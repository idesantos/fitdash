import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Rolagem suave ----------
export const lenis = reduced ? null : new Lenis({ lerp: 0.11, wheelMultiplier: 0.95 });
if (lenis) {
  (window as any).__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (!a || a.getAttribute('href') === '#') return;
  const alvo = document.querySelector(a.getAttribute('href')!);
  if (!alvo) return;
  e.preventDefault();
  lenis ? lenis.scrollTo(alvo as HTMLElement, { offset: -64 }) : alvo.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  history.replaceState(null, '', a.getAttribute('href'));
});

// ---------- Títulos palavra por palavra ----------
function split(el: HTMLElement) {
  const walk = (node: Node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        for (const parte of child.textContent!.split(/(\s+)/)) {
          if (!parte) continue;
          if (/^\s+$/.test(parte)) frag.append(parte);
          else {
            const w = document.createElement('span');
            w.className = 'w';
            const i = document.createElement('span');
            i.textContent = parte;
            w.append(i);
            frag.append(w);
          }
        }
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && !(child as HTMLElement).matches('br')) walk(child);
    }
  };
  walk(el);
}
document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
  split(el);
  if (reduced) return;
  gsap.fromTo(
    el.querySelectorAll('.w > span'),
    { yPercent: 105, y: 0, skewX: 14 },
    {
      yPercent: 0,
      skewX: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.045,
      delay: el.dataset.splitDelay ? +el.dataset.splitDelay : 0,
      scrollTrigger: el.hasAttribute('data-split-now') ? undefined : { trigger: el, start: 'top 88%', once: true },
    },
  );
});

// ---------- Blocos que sobem ----------
if (!reduced) {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08, overwrite: true }),
  });
}

// ---------- Cabeçalho ----------
const header = document.querySelector<HTMLElement>('[data-header]');
let ultimoY = 0;
const aoRolar = (y: number) => {
  header?.classList.toggle('is-solid', y > 40);
  header?.classList.toggle('is-hidden', y > 500 && y > ultimoY + 2);
  if (y < ultimoY - 2) header?.classList.remove('is-hidden');
  ultimoY = y;
  document.querySelector('[data-mbar]')?.classList.toggle('is-on', y > innerHeight * 0.6);
};
lenis ? lenis.on('scroll', ({ scroll }: { scroll: number }) => aoRolar(scroll)) : addEventListener('scroll', () => aoRolar(scrollY), { passive: true });
aoRolar(scrollY);

// ---------- Linha dos passos ----------
document.querySelectorAll<HTMLElement>('[data-progress-line]').forEach((linha) => {
  if (reduced) return linha.style.setProperty('--p', '1');
  gsap.fromTo(linha, { '--p': 0 }, { '--p': 1, ease: 'none', scrollTrigger: { trigger: linha.parentElement, start: 'top 70%', end: 'bottom 60%', scrub: 0.6 } });
});

// ---------- Rastros de velocidade (fundo do hero) ----------
document.querySelectorAll<HTMLCanvasElement>('[data-streaks]').forEach((cv) => {
  const ctx = cv.getContext('2d');
  if (!ctx) return;
  type R = { x: number; y: number; len: number; v: number; w: number; c: string };
  let W = 0, H = 0, dpr = 1, rastros: R[] = [], visivel = true, vel = 0;
  const cores = ['36,141,207', '17,244,178', '255,255,255'];
  const novo = (x?: number): R => ({
    x: x ?? Math.random() * W,
    y: Math.random() * H,
    len: 60 + Math.random() * 220,
    v: 0.6 + Math.random() * 2.2,
    w: Math.random() < 0.15 ? 2 : 1,
    c: cores[Math.random() < 0.6 ? 0 : Math.random() < 0.5 ? 1 : 2],
  });
  const medir = () => {
    dpr = Math.min(devicePixelRatio, 2);
    W = cv.clientWidth;
    H = cv.clientHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    rastros = Array.from({ length: Math.round((W * H) / 26000) }, () => novo());
  };
  medir();
  new ResizeObserver(medir).observe(cv);
  new IntersectionObserver(([e]) => (visivel = e.isIntersecting)).observe(cv);
  lenis?.on('scroll', ({ velocity }: { velocity: number }) => (vel = Math.min(Math.abs(velocity), 60)));
  const inclina = Math.tan((12 * Math.PI) / 180);
  const desenha = () => {
    ctx.clearRect(0, 0, W, H);
    for (const r of rastros) {
      if (!reduced) r.x += r.v * (1 + vel * 0.35);
      if (r.x - r.len > W) Object.assign(r, novo(-r.len * Math.random()));
      const dy = r.len * inclina * 0.12;
      const g = ctx.createLinearGradient(r.x - r.len, 0, r.x, 0);
      g.addColorStop(0, `rgba(${r.c},0)`);
      g.addColorStop(1, `rgba(${r.c},${r.c === cores[2] ? 0.18 : 0.42})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = r.w;
      ctx.beginPath();
      ctx.moveTo(r.x - r.len, r.y + dy);
      ctx.lineTo(r.x, r.y);
      ctx.stroke();
    }
    vel *= 0.92;
  };
  if (reduced) return desenha();
  gsap.ticker.add(() => visivel && !document.hidden && desenha());
});

// ---------- Eventos de clique (GA4 / Pixel quando forem instalados) ----------
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (!el) return;
  const w = window as any;
  const evento = el.dataset.track!;
  (w.dataLayer ||= []).push({ event: evento, label: el.dataset.trackLabel ?? el.textContent?.trim() });
  w.gtag?.('event', evento, { label: el.dataset.trackLabel });
  w.fbq?.('trackCustom', evento);
});

export { gsap, ScrollTrigger };
