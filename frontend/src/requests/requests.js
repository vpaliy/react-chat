import superagent from "superagent";
import SessionManager from "./authSession";
import applyMiddleware from "./middleware";
import TokenRefresher from "./jwt";

const baseUrl = "http://localhost:5000/api";
const responseBody = response => response.body;

const tokenRefresher = new TokenRefresher(`${baseUrl}/refresh`);

const tokenPlugin = request => {
  if (SessionManager.isUserAuthenticated()) {
    const accessToken = SessionManager.getAccessToken();
    request.set("Authorization", `Token ${accessToken}`);
  }
};

const errorMessage = error => {
  const response = error.response;
  if (response && response.text) {
    const errorObject = JSON.parse(response.text);
    throw {
      name: "HTTP Request Failed",
      message: errorObject.message,
      toString: () => `${errorObject.message}`
    };
  }
  throw error;
};

const middleware = request => {
  if (SessionManager.isUserAuthenticated()) {
    if (SessionManager.hasExpired()) {
      const token = SessionManager.getRefreshToken();
      return tokenRefresher
        .refresh(token)
        .then(request)
        .catch(errorMessage);
    }
  }
  return request();
};

const requests = {
  post: (url, body) =>
    superagent
      .post(`${baseUrl}${url}`)
      .use(tokenPlugin)
      .send(body)
      .set("Accept", "application/json")
      .then(responseBody)
      .catch(errorMessage),

  get: (url, query = {}) =>
    superagent
      .get(`${baseUrl}${url}`)
      .use(tokenPlugin)
      .query(query)
      .set("Accept", "application/json")
      .then(responseBody)
      .catch(errorMessage),

  delete: url =>
    superagent
      .get(`${baseUrl}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(errorMessage)
};

export default applyMiddleware(middleware)(requests);
