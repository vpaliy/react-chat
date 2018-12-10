const TOKEN_KEY = 'authToken'

class SessionManager {

  static authenticateUser (token) {
    if (window.localStorage) {
      window.localStorage.setItem(TOKEN_KEY, token)
    }
  }

  static isUserAuthenticated () {
    if (window.localStorage) {
      return window.localStorage.getItem(TOKEN_KEY) !== null
    }
  }

  static deauthenticateUser () {
    if (window.localStorage) {
      window.localStorage.removeItem(TOKEN_KEY)
    }
  }

  static getToken () {
    if (window.localStorage) {
      return window.localStorage.getItem(TOKEN_KEY)
    }
  }
}

export default SessionManager
