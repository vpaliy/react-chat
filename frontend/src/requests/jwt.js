import superagent from "superagent";
import { EventEmitter } from "events";
import SessionManager from "./authSession";

export const saveAuth = response => {
  const auth = response.auth;
  if (auth) {
    SessionManager.save(auth);
    return {
      token: auth.access_token,
      user: response.user
    };
  }
  return response;
};

class TokenRefresher {
  constructor(url) {
    this.url = url;
    this.locked = false;
    this.emitter = new EventEmitter();
  }

  refresh = async (token, onReceive) => {
    if (!this.locked) {
      this.locked = true;
      return superagent
        .post(this.url)
        .set("Authorization", `Token ${token}`)
        .set("Accept", "application/json")
        .then(res => {
          onReceive(token);
          this.release();
          return Promise.resolve();
        });
    }

    const wait = () => {
      if (this.locked) {
        this.locked = false;
        return Promise.resolve();
      }
    };
    this.emitter.on("release", wait);
  };

  release() {
    setImmediate(() => this.emitter.emit("release"));
  }
}

export default TokenRefresher;
