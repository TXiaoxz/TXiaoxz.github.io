import { useEffect, useRef } from 'react';

// Keep in sync with /public/partials/nav.js — the static pages mount the same
// markup through that script, this component does it for the React homepage.
function detectKey(pathname: string): string | null {
  if (pathname === '/' || pathname === '/index.html') return 'home';
  if (pathname.indexOf('/research') === 0) return 'research';
  if (pathname.indexOf('/projects') === 0) return 'projects';
  if (pathname.indexOf('/cv') === 0) return 'cv';
  if (pathname.indexOf('/contact') === 0) return 'contact';
  if (pathname.indexOf('/about') === 0) return 'about';
  if (pathname.indexOf('/photos') === 0) return 'photos';
  return null;
}

export function Navbar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const teardown: Array<() => void> = [];

    fetch('/partials/nav.html', { cache: 'no-cache' })
      .then((r) => r.text())
      .then((html) => {
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = html;

        const key = detectKey(window.location.pathname);
        if (key) {
          ref.current
            .querySelectorAll<HTMLAnchorElement>('.nav-link[data-nav-key]')
            .forEach((a) => {
              if (a.getAttribute('data-nav-key') === key) a.classList.add('active');
            });
        }

        // Collapsed menu. The toggle is CSS-hidden at 900px and up, so on wide
        // screens these listeners never fire.
        const nav = ref.current.querySelector<HTMLElement>('.site-nav');
        const toggle = ref.current.querySelector<HTMLButtonElement>('.nav-toggle');
        if (!nav || !toggle) return;

        const setOpen = (open: boolean) => {
          nav.classList.toggle('is-open', open);
          toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
          toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        };

        const onToggle = (e: MouseEvent) => {
          e.stopPropagation();
          setOpen(!nav.classList.contains('is-open'));
        };
        const onNavClick = (e: MouseEvent) => {
          if ((e.target as HTMLElement).closest('.nav-link')) setOpen(false);
        };
        const onDocClick = (e: MouseEvent) => {
          if (!nav.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => {
          if (e.key === 'Escape') setOpen(false);
        };
        const onResize = () => {
          if (window.innerWidth >= 900) setOpen(false);
        };

        toggle.addEventListener('click', onToggle);
        nav.addEventListener('click', onNavClick);
        document.addEventListener('click', onDocClick);
        document.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);

        teardown.push(() => {
          toggle.removeEventListener('click', onToggle);
          nav.removeEventListener('click', onNavClick);
          document.removeEventListener('click', onDocClick);
          document.removeEventListener('keydown', onKey);
          window.removeEventListener('resize', onResize);
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      teardown.forEach((fn) => fn());
    };
  }, []);

  return <div ref={ref} style={{ minHeight: 72 }} />;
}
