import { useEffect, useRef } from 'react';

function detectKey(pathname: string): string | null {
  if (pathname === '/' || pathname === '/index.html') return 'home';
  if (pathname.indexOf('/research') === 0) return 'research';
  if (pathname.indexOf('/projects') === 0) return 'projects';
  if (pathname.indexOf('/cv') === 0) return 'cv';
  if (pathname.indexOf('/contact') === 0) return 'contact';
  if (pathname.indexOf('/photos') === 0) return 'photos';
  return null;
}

export function Navbar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/partials/nav.html', { cache: 'no-cache' })
      .then((r) => r.text())
      .then((html) => {
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = html;
        const key = detectKey(window.location.pathname);
        if (!key) return;
        const links = ref.current.querySelectorAll<HTMLAnchorElement>(
          '.nav-link[data-nav-key]'
        );
        links.forEach((a) => {
          if (a.getAttribute('data-nav-key') === key) a.classList.add('active');
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: 72 }} />
  );
}
