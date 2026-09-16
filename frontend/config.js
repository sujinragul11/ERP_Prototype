/**
 * Frontend Environment Configuration
 * 
 * Automatically switches between:
 * - Production (Render): https://erp-prototype-be.onrender.com
 * - Local Development: uses same origin or localhost:8080
 */
window.ENV = window.ENV || {};

(function() {
  var PRODUCTION_BACKEND_URL = 'https://erp-prototype-be.onrender.com';

  // If already explicitly provided, respect it
  if (window.ENV.API_URL) return;

  var hostname = (typeof window !== 'undefined' && window.location && window.location.hostname) || '';
  var isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '';

  // In production (Render / custom domain), route requests to deployed backend
  // In local monolithic dev, use relative origin or local server
  window.ENV.API_URL = isLocal ? '' : PRODUCTION_BACKEND_URL;
})();

