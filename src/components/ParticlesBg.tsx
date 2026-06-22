import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  sz: number;
  vx: number;
  vy: number;
  op: number;
  col: string;
  life: number;
  max: number;
}

const COLORS = [
  'rgba(245,158,11',
  'rgba(88,101,242',
  'rgba(252,211,77',
  'rgba(114,137,218',
];

function makeParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    sz: Math.random() * 1.8 + 0.4,
    vx: (Math.random() - 0.5) * 0.25,
    vy: -Math.random() * 0.35 - 0.08,
    op: Math.random() * 0.5 + 0.1,
    col: COLORS[Math.floor(Math.random() * COLORS.length)],
    life: 0,
    max: Math.random() * 280 + 120,
  };
}

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ps: Particle[] = [];
    for (let i = 0; i < 55; i++) {
      const p = makeParticle(canvas.width, canvas.height);
      p.life = Math.random() * p.max;
      ps.push(p);
    }

    let animId: number;

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ps.forEach((p, i) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        const t = p.life / p.max;
        const a =
          t < 0.2
            ? (t / 0.2) * p.op
            : t > 0.8
            ? ((1 - t) / 0.2) * p.op
            : p.op;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = `${p.col},${a})`;
        ctx.fill();
        if (p.life >= p.max)
          ps[i] = makeParticle(canvas.width, canvas.height);
      });
      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.65,
      }}
    />
  );
}
