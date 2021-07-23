class Utils {
    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    /* eslint-disable no-undef */
    debugger;
    static authenticateUser(user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", user.token);
      localStorage.setItem("expire", new Date().getTime());
    }
  
    static isUserAuthenticated() {
      return localStorage.getItem("loggedIn");
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("loggedIn");
      localStorage.setItem('cartItems', []);
      localStorage.setItem('totalAmount', 0);
      localStorage.setItem('cartLength', 0);
      localStorage.setItem("expire", null);
    }
  
    /**
     * Get a token value.
     *
     * @returns {string}
     */
    static getToken() {
      return localStorage.getItem("token");
    }
  
    static getUser() {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
  
  export default Utils;
  