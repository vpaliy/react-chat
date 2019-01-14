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

export default Storage
