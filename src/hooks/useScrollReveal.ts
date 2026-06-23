import { useEffect, type DependencyList } from 'react';

export function useScrollReveal(deps: DependencyList = []) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal child .reveal elements with stagger
            entry.target
              .querySelectorAll('.reveal:not(.visible)')
              .forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 90);
              });
            // Also reveal the target itself if it has the class
            if (entry.target.classList.contains('reveal')) {
              setTimeout(() => entry.target.classList.add('visible'), 0);
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((s) => io.observe(s));

    // Also directly observe .reveal elements for standalone usage
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, deps);
}
