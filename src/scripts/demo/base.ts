// Comportamento comum dos sites de academia: rolagem suave, revelação, cabeçalho,
// contadores, grade de horários, comparadores e o aviso dos botões da demo.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

export const lenis = reduced ? null : new Lenis({ lerp: 0.1 });
if (lenis) {
  (window as any).__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (!a) return;
  const alvo = document.querySelector<HTMLElement>(a.getAttribute('href')!);
  if (!alvo) return;
  e.preventDefault();
  lenis ? lenis.scrollTo(alvo, { offset: -70 }) : alvo.scrollIntoView();
});

// Revelação ao rolar
if (!reduced) {
  ScrollTrigger.batch('[data-r]', {
    start: 'top 90%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.07, overwrite: 'auto' }),
  });
}

// Cabeçalho: sobe para o topo quando a faixa da demo sai da tela, fica sólido e some ao descer.
const hdr = document.querySelector<HTMLElement>('[data-dhdr]');
const ribbon = document.querySelector<HTMLElement>('[data-ribbon]');
const mbar = document.querySelector<HTMLElement>('[data-dmbar]');
let ultimo = 0;
const rolou = (y: number) => {
  const rh = ribbon?.offsetHeight ?? 0;
  hdr?.classList.toggle('is-top0', y >= rh);
  hdr?.classList.toggle('is-solid', y > rh + 20);
  if (y > 600 && y > ultimo + 3) hdr?.classList.add('is-hidden');
  if (y < ultimo - 3 || y < 600) hdr?.classList.remove('is-hidden');
  mbar?.classList.toggle('is-on', y > innerHeight * 0.7);
  ultimo = y;
};
lenis ? lenis.on('scroll', ({ scroll }: { scroll: number }) => rolou(scroll)) : addEventListener('scroll', () => rolou(scrollY), { passive: true });
rolou(scrollY);

// Contadores: anima o número que está no começo do texto (ex.: "1.200+", "24h", "98%").
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
  const m = el.textContent!.match(/^(\D*)([\d.]+)(.*)$/);
  if (!m || reduced) return;
  const [, pre, num, pos] = m;
  const alvo = parseFloat(num.replace(/\./g, ''));
  const milhar = num.includes('.');
  const obj = { v: 0 };
  const fmt = (v: number) => pre + (milhar ? Math.round(v).toLocaleString('pt-BR') : Math.round(v)) + pos;
  el.textContent = fmt(0);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 90%',
    once: true,
    onEnter: () => gsap.to(obj, { v: alvo, duration: 1.6, ease: 'expo.out', onUpdate: () => (el.textContent = fmt(obj.v)) }),
  });
});

// Grade: destaca a coluna de hoje
const hoje = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'][new Date().getDay()];
document.querySelectorAll(`[data-hor] [data-dia="${hoje}"]`).forEach((c) => c.classList.add('is-hoje'));

// Comparadores antes/depois
document.querySelectorAll<HTMLElement>('[data-cmp]').forEach((cmp) => {
  const input = cmp.querySelector('input')!;
  const ir = (p: number) => {
    p = Math.max(0, Math.min(100, p));
    cmp.style.setProperty('--p', String(p));
    input.value = String(Math.round(p));
  };
  let ativo = false;
  let decidido = false;
  let x0 = 0;
  let y0 = 0;
  const pos = (e: PointerEvent) => {
    const r = cmp.getBoundingClientRect();
    return ((e.clientX - r.left) / r.width) * 100;
  };
  cmp.addEventListener('pointerdown', (e) => {
    ativo = true;
    decidido = e.pointerType === 'mouse';
    x0 = e.clientX;
    y0 = e.clientY;
    if (decidido) {
      cmp.setPointerCapture(e.pointerId);
      ir(pos(e));
    }
  });
  cmp.addEventListener('pointermove', (e) => {
    if (!ativo) return;
    if (!decidido) {
      const dx = Math.abs(e.clientX - x0);
      const dy = Math.abs(e.clientY - y0);
      if (dx < 6 && dy < 6) return;
      if (dy > dx) return void (ativo = false);
      decidido = true;
      cmp.setPointerCapture(e.pointerId);
    }
    ir(pos(e));
  });
  const fim = (e: PointerEvent) => {
    if (ativo && !decidido && e.type === 'pointerup') ir(pos(e));
    ativo = false;
  };
  cmp.addEventListener('pointerup', fim);
  cmp.addEventListener('pointercancel', fim);
  input.addEventListener('input', () => ir(+input.value));
});

// Botões da demo: mostram o que aconteceria no site real.
const toast = document.querySelector<HTMLElement>('[data-toast]');
let tid = 0;
document.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLElement>('[data-demo-cta]');
  if (!b || !toast) return;
  e.preventDefault();
  toast.innerHTML = '';
  const t = document.createElement('span');
  if (b.dataset.tipo === 'rota') {
    t.innerHTML = '<b>No site real</b>, abre o Google Maps ou o Waze com a rota até a academia.';
    toast.append(t);
  } else {
    t.innerHTML = '<b>No site real</b>, abre o WhatsApp da academia com a mensagem pronta:';
    const q = document.createElement('q');
    q.textContent = b.dataset.msg ?? '';
    toast.append(t, q);
  }
  toast.classList.add('is-on');
  clearTimeout(tid);
  tid = window.setTimeout(() => toast.classList.remove('is-on'), 4200);
});

export { gsap, ScrollTrigger };
