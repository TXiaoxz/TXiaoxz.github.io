(function () {
  function detectKey() {
    var p = window.location.pathname;
    if (p === '/' || p === '/index.html') return 'home';
    if (p.indexOf('/research') === 0) return 'research';
    if (p.indexOf('/projects') === 0) return 'projects';
    if (p.indexOf('/cv') === 0) return 'cv';
    if (p.indexOf('/contact') === 0) return 'contact';
    if (p.indexOf('/about') === 0) return 'about';
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

  // Collapsed menu. The toggle button is CSS-hidden above the breakpoint,
  // so on wide screens these handlers simply never fire.
  function wireToggle(root) {
    var nav = root.querySelector('.site-nav');
    var toggle = root.querySelector('.nav-toggle');
    if (!nav || !toggle) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!nav.classList.contains('is-open'));
    });

    // Tapping a link, pressing Escape, or clicking outside all close the panel.
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.nav-link')) setOpen(false);
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') setOpen(false);
    });

    // Reset if the viewport grows past the breakpoint while the panel is open.
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) setOpen(false);
    });
  }

  function mount(html) {
    var slot = document.getElementById('nav-root');
    if (!slot) return;
    slot.innerHTML = html;
    markActive(slot, detectKey());
    wireToggle(slot);
  }

  fetch('/partials/nav.html', { cache: 'no-cache' })
    .then(function (r) { return r.text(); })
    .then(mount)
    .catch(function () {
      var slot = document.getElementById('nav-root');
      if (slot) slot.innerHTML = '<nav class="site-nav"><div class="site-nav-inner"><a href="/" class="logo">&lt;X_Z&gt;</a></div></nav>';
    });
})();
