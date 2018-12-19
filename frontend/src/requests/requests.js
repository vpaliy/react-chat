import superagent from "superagent";
import SessionManager from "./authSession";

const baseUrl = "http://localhost:5000/api";

const tokenPlugin = request => {
  if (SessionManager.isUserAuthenticated()) {
    request.set("Authorization", SessionManager.getToken());
  }
};

const responseBody = response => {
  const body = response.body;
  if (body !== undefined) {
    if (body.token !== undefined) {
      SessionManager.authenticateUser(body.token);
    }
  }
  return body;
};

const errorMessage = error => {
  if (error.response.text !== undefined) {
    const errorObject = JSON.parse(error.response.text);
    throw {
      name: "HTTP Request Failed",
      message: errorObject.message,
      toString: () => `${this.name}:${this.message}`
    };
  }
  throw error;
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
      .get(url)
      .use(tokenPlugin)
      .query(query)
      .set("Accept", "application/json")
      .then(responseBody)
      .catch(errorMessage),

  delete: url =>
    superagent
      .delete(url)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(errorMessage)
};

export default requests;
