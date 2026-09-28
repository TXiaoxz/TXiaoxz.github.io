(function () {
  'use strict';

  var widgetId = 'xz-companions';
  var storageKey = 'xz-companions-minimized';
  var restDelay = 8000;
  if (window.__xzCompanions) return;
  window.__xzCompanions = { pending: true };

  function mount() {
    if (!document.body || document.getElementById(widgetId)) return;

    var stylesheet = document.getElementById('xz-companions-styles');
    var addStylesheet = !stylesheet;
    if (addStylesheet) {
      stylesheet = document.createElement('link');
      stylesheet.id = 'xz-companions-styles';
      stylesheet.rel = 'stylesheet';
      stylesheet.href = '/companions/companions.css';
    }

    var root = document.createElement('aside');
    root.id = widgetId;
    root.className = 'site-companions';
    root.hidden = true;
    root.lang = 'zh-Hans';
    root.setAttribute('aria-label', 'Xupeng 和笨笨，网站小伙伴');
    root.innerHTML = [
      '<div class="site-companions__expanded">',
      '  <div class="site-companions__stage">',
      '    <div class="site-companions__traveler site-companions__traveler--zack">',
      '      <button class="site-companions__character site-companions__character--zack" type="button" data-pose="idle" aria-label="和 Xupeng 打个招呼">',
      '        <span class="site-companions__sprite" aria-hidden="true"></span>',
      '      </button>',
      '    </div>',
      '    <div class="site-companions__traveler site-companions__traveler--benben">',
      '      <button class="site-companions__character site-companions__character--benben" type="button" data-pose="idle" aria-label="摸摸笨笨">',
      '        <span class="site-companions__sprite" aria-hidden="true"></span>',
      '      </button>',
      '    </div>',
      '  </div>',
      '  <div class="site-companions__controls">',
      '    <button class="site-companions__minimize" type="button" aria-label="收起 Xupeng 和笨笨"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg></button>',
      '  </div>',
      '</div>',
      '<span class="site-companions__announcement" role="status" aria-live="polite" aria-atomic="true"></span>',
      '<button class="site-companions__restore" type="button" aria-label="展开 Xupeng 和笨笨" hidden><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><ellipse cx="5" cy="9" rx="1.8" ry="2.4"/><ellipse cx="10" cy="5.5" rx="1.8" ry="2.4"/><ellipse cx="15" cy="5.5" rx="1.8" ry="2.4"/><ellipse cx="20" cy="9" rx="1.8" ry="2.4"/><path d="M8.5 13c1.5-2.5 5.5-2.5 7 0l2 3c1.5 2.5 0 4.5-2.5 4l-2.5-.5-2.5.5c-2.5.5-4-1.5-2.5-4Z"/></svg></button>'
    ].join('');
    document.body.appendChild(root);

    var expanded = root.querySelector('.site-companions__expanded');
    var announcement = root.querySelector('.site-companions__announcement');
    var zack = root.querySelector('.site-companions__character--zack');
    var benben = root.querySelector('.site-companions__character--benben');
    var minimizeButton = root.querySelector('.site-companions__minimize');
    var restoreButton = root.querySelector('.site-companions__restore');
    var timers = {};
    var minimized = false;
    var catInteraction = 0;
    var destroyed = false;
    var layoutFrame = 0;

    function clearTimer(name) {
      if (timers[name]) window.clearTimeout(timers[name]);
      delete timers[name];
    }

    function later(name, callback, delay) {
      clearTimer(name);
      timers[name] = window.setTimeout(function () {
        delete timers[name];
        if (!destroyed) callback();
      }, delay);
    }

    function clearTimers() {
      Object.keys(timers).forEach(clearTimer);
    }

    function pose(personPose, catPose) {
      zack.setAttribute('data-pose', personPose);
      benben.setAttribute('data-pose', catPose);
    }

    function idle() {
      pose('idle', 'idle');
    }

    function isResting() {
      return zack.getAttribute('data-pose') === 'quiet' && benben.getAttribute('data-pose') === 'quiet';
    }

    function speak(text) {
      announcement.textContent = text;
    }

    function scheduleRest() {
      clearTimer('rest');
      if (destroyed || minimized || root.hidden || document.hidden || isResting()) return;
      later('rest', function () {
        clearTimer('pose');
        pose('quiet', 'quiet');
      }, restDelay);
    }

    function finishInteraction() {
      later('pose', idle, 2800);
      scheduleRest();
    }

    function avoidFooter() {
      if (destroyed || root.hidden) return;
      var rect = root.getBoundingClientRect();
      var lift = parseFloat(root.style.getPropertyValue('--companion-footer-lift')) || 0;
      var baseBottom = (parseFloat(window.getComputedStyle(root).bottom) || 0) - lift;
      var viewportHeight = window.innerHeight;
      var defaultTop = viewportHeight - baseBottom - rect.height;
      var neededLift = 0;
      document.querySelectorAll('footer, .footer').forEach(function (footer) {
        var footerRect = footer.getBoundingClientRect();
        if (footerRect.width && footerRect.height && footerRect.top < viewportHeight &&
            footerRect.bottom > defaultTop && footerRect.right > rect.left && footerRect.left < rect.right) {
          neededLift = Math.max(neededLift, viewportHeight - footerRect.top + 10 - baseBottom);
        }
      });
      // Keep the complete widget in view, including on short landscape screens.
      var maxLift = Math.max(0, viewportHeight - baseBottom - rect.height - 12);
      root.style.setProperty('--companion-footer-lift', Math.min(neededLift, maxLift) + 'px');
    }

    function scheduleLayout() {
      if (layoutFrame || destroyed || document.hidden) return;
      layoutFrame = window.requestAnimationFrame(function () {
        layoutFrame = 0;
        avoidFooter();
      });
    }

    function greet() {
      clearTimer('pose');
      pose('greeting', 'greeting');
      speak('嗨，我是 Xupeng！旁边这位是笨笨。');
      finishInteraction();
    }

    function petCat() {
      var messages = ['喵～笨笨蹭了蹭你的手。', '笨笨：再摸一下嘛。', 'Xupeng 和笨笨，很高兴见到你。'];
      clearTimer('pose');
      pose('happy', 'happy');
      speak(messages[catInteraction % messages.length]);
      catInteraction += 1;
      finishInteraction();
    }

    function reset() {
      clearTimers();
      announcement.textContent = '';
      idle();
    }

    function pause() {
      clearTimers();
      announcement.textContent = '';
      if (!isResting()) idle();
      window.cancelAnimationFrame(layoutFrame);
      layoutFrame = 0;
      root.setAttribute('data-paused', 'true');
    }

    function setMinimized(value, moveFocus) {
      minimized = value;
      reset();
      expanded.hidden = value;
      restoreButton.hidden = !value;
      root.setAttribute('data-minimized', value ? 'true' : 'false');
      avoidFooter();
      scheduleRest();
      try { window.sessionStorage.setItem(storageKey, value ? '1' : '0'); } catch (error) { /* Storage is optional. */ }
      if (moveFocus) (value ? restoreButton : zack).focus({ preventScroll: true });
    }

    function minimize() { setMinimized(true, true); }
    function restore() { setMinimized(false, true); }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        announcement.textContent = '';
      }
    }

    function onVisibilityChange() {
      if (document.hidden) {
        pause();
      } else {
        root.removeAttribute('data-paused');
        scheduleLayout();
        scheduleRest();
      }
    }

    function onPageHide() {
      pause();
    }

    function onPageShow() {
      onVisibilityChange();
    }

    zack.addEventListener('click', greet);
    benben.addEventListener('click', petCat);
    minimizeButton.addEventListener('click', minimize);
    restoreButton.addEventListener('click', restore);
    root.addEventListener('keydown', onKeyDown);
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('resize', scheduleLayout);
    window.addEventListener('scroll', scheduleLayout, { passive: true });
    window.addEventListener('load', scheduleLayout);
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);

    try { minimized = window.sessionStorage.getItem(storageKey) === '1'; } catch (error) { /* Use the visible default. */ }
    setMinimized(minimized, false);
    onVisibilityChange();

    function onStylesLoaded() {
      if (destroyed) return;
      root.hidden = false;
      avoidFooter();
      scheduleRest();
    }

    function destroy() {
        destroyed = true;
        clearTimers();
        window.cancelAnimationFrame(layoutFrame);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        window.removeEventListener('resize', scheduleLayout);
        window.removeEventListener('scroll', scheduleLayout);
        window.removeEventListener('load', scheduleLayout);
        window.removeEventListener('pagehide', onPageHide);
        window.removeEventListener('pageshow', onPageShow);
        stylesheet.removeEventListener('load', onStylesLoaded);
        stylesheet.removeEventListener('error', destroy);
        root.remove();
        delete window.__xzCompanions;
    }

    window.__xzCompanions = { destroy: destroy };
    stylesheet.addEventListener('load', onStylesLoaded, { once: true });
    stylesheet.addEventListener('error', destroy, { once: true });
    if (addStylesheet) document.head.appendChild(stylesheet);
    else if (stylesheet.sheet) onStylesLoaded();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
})();
