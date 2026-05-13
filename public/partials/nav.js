(function () {
  function detectKey() {
    var p = window.location.pathname;
    if (p === '/' || p === '/index.html') return 'home';
    if (p.indexOf('/research') === 0) return 'research';
    if (p.indexOf('/projects') === 0) return 'projects';
    if (p.indexOf('/cv') === 0) return 'cv';
    if (p.indexOf('/contact') === 0) return 'contact';
    if (p.indexOf('/photos') === 0) return 'photos';
    return null;
  }

  function markActive(root, key) {
    if (!key) return;
    var links = root.querySelectorAll('.nav-link[data-nav-key]');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav-key') === key) {
        links[i].classList.add('active');
      }
    }
  }

  function mount(html) {
    var slot = document.getElementById('nav-root');
    if (!slot) return;
    slot.innerHTML = html;
    markActive(slot, detectKey());
  }

  fetch('/partials/nav.html', { cache: 'no-cache' })
    .then(function (r) { return r.text(); })
    .then(mount)
    .catch(function () {
      var slot = document.getElementById('nav-root');
      if (slot) slot.innerHTML = '<nav class="site-nav"><div class="site-nav-inner"><a href="/" class="logo">&lt;X_Z&gt;</a></div></nav>';
    });
})();
