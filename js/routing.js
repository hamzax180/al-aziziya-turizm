/* ── ROUTING ── */
window.showHome = function() {
  if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
    window.location.href = 'index.html';
  } else {
    window.scrollTo({top:0, behavior:'smooth'});
  }
};

window.scrollToSec = function(id) {
  if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
    window.location.href = 'index.html#' + id;
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Handle `scrollTo('id')` which is used in nav
window.scrollTo = function(id) {
  if (typeof id === 'string') {
    window.scrollToSec(id);
  } else {
    // fallback to original window.scrollTo if passed an object
    window.constructor.prototype.scrollTo.apply(window, arguments);
  }
};

window.openInquiry = function(opts) {
  let url = 'inquiry.html?';
  if (opts.dest) url += 'city=' + encodeURIComponent(opts.dest.toLowerCase()) + '&';
  if (opts.service) url += 'service=' + encodeURIComponent(opts.service) + '&';
  window.location.href = url;
};

window.openCityInquiry = function(city) {
  window.location.href = 'inquiry.html?city=' + encodeURIComponent(city);
};
