/* ===================================================
   RORIRI ERP - Frontend API Client Layer
   Handles JWT token persistence, API requests to Express,
   and graceful fallback if offline.
   =================================================== */

(function() {
  'use strict';

  var API_BASE = (function() {
    if (typeof window !== 'undefined' && window.ENV && window.ENV.API_URL) {
      return window.ENV.API_URL + '/api';
    }
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      return window.location.origin + '/api';
    }
    return 'http://localhost:8080/api';
  })();

  var TOKEN_KEY = 'roriri_auth_token_v1';
  var USER_KEY = 'roriri_auth_user_v1';

  var API = {
    baseUrl: API_BASE,

    getToken: function() {
      try { return localStorage.getItem(TOKEN_KEY); } catch (e) { return null; }
    },

    setToken: function(token) {
      try { localStorage.setItem(TOKEN_KEY, token); } catch (e) {}
    },

    getUser: function() {
      try {
        var u = localStorage.getItem(USER_KEY);
        return u ? JSON.parse(u) : null;
      } catch (e) { return null; }
    },

    setUser: function(user) {
      try { localStorage.setItem(USER_KEY, JSON.stringify(user)); } catch (e) {}
    },

    clearAuth: function() {
      try {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
      } catch (e) {}
    },

    request: async function(endpoint, options) {
      options = options || {};
      var url = endpoint.startsWith('http') ? endpoint : API_BASE + endpoint;
      var headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      };

      var token = API.getToken();
      if (token) {
        headers['Authorization'] = 'Bearer ' + token;
      }

      try {
        var res = await fetch(url, {
          method: options.method || 'GET',
          headers: headers,
          body: options.body ? JSON.stringify(options.body) : undefined
        });

        var data = await res.json().catch(function() { return {}; });
        if (!res.ok) {
          throw new Error(data.message || ('HTTP ' + res.status));
        }
        return data;
      } catch (err) {
        console.warn('[API Client] Request to ' + url + ' failed:', err.message);
        throw err;
      }
    },

    get: function(endpoint) {
      return API.request(endpoint, { method: 'GET' });
    },

    post: function(endpoint, body) {
      return API.request(endpoint, { method: 'POST', body: body });
    },

    put: function(endpoint, body) {
      return API.request(endpoint, { method: 'PUT', body: body });
    },

    delete: function(endpoint) {
      return API.request(endpoint, { method: 'DELETE' });
    },

    login: async function(username, password) {
      var res = await API.post('/auth/login', { username: username, password: password });
      if (res.success && res.token) {
        API.setToken(res.token);
        API.setUser(res.user);
      }
      return res;
    },

    logout: function() {
      API.clearAuth();
      return API.post('/auth/logout', {}).catch(function() {});
    }
  };

  window.API = API;
})();
