import superagent from "superagent";
import SessionManager from "./authSession";

const baseUrl = "http://localhost:5000/api";
const responseBody = res => res.body;

const requests = {
  post: (url, body) =>
    superagent
      .post(`${baseUrl}${url}`)
      .send(body)
      .end(response => {
        console.log(response);
        return async() => response;
      })
};

export default requests;
