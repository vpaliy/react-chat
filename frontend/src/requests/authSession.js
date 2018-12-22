const TOKENS_KEY = "auth-tokens";

class Storage {
  static get(key) {
    if (window.localStorage) {
      return window.localStorage.getItem(key);
    }
  }

  static put(key, value) {
    if (window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  }

  static clear() {
    if (window.localStorage) {
      window.localStorage.clear();
    }
  }

  static remove(key) {
    if (window.localStorage) {
      window.localStorage.removeItem(key);
    }
  }

  static contains(key) {
    return this.get(key);
  }
}

class SessionManager {
  static authenticateUser(authData) {
    console.log(authData);
    Storage.put(TOKENS_KEY, JSON.stringify(authData));
  }

  static isUserAuthenticated() {
    return Storage.contains(TOKENS_KEY);
  }

  static hasExpired() {
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
