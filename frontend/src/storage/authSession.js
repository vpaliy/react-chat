import Storage from "./storage";

const TOKENS_KEY = "auth-tokens";


class SessionManager {
  static save(authData) {
    Storage.put(TOKENS_KEY, JSON.stringify(authData));
  }

  static hasTokens() {
    return Storage.contains(TOKENS_KEY);
  }

  static isExpired() {
    const authData = this.getAuthDataJSON();
    if (authData.expires_in) {
      return true;
    }
  }

  static deauthenticateUser() {
    Storage.remove(TOKENS_KEY);
  }

  static getAccessToken() {
    const authData = this.getAuthDataJSON();
    return authData.access_token;
  }

  static getRefreshToken() {
    const authData = this.getAuthDataJSON();
    return authData.refresh_token;
  }

  static getAuthDataJSON() {
    const authData = Storage.get(TOKENS_KEY);
    return JSON.parse(authData) || {};
  }
}

export default SessionManager;
