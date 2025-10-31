// js/fireworks.js
(function initFireworksWhenReady() {
  function init() {
    const canvas = document.getElementById('fireworksCanvas');
    if (!canvas) {
      console.warn('[fireworks] Canvas #fireworksCanvas not found.');
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    let w = 0, h = 0, rafId = null, running = false;
    let particles = [];
    let lastSpawn = 0;

    // Performance-aware defaults
    const cores = navigator.hardwareConcurrency || 2;
    const perf = cores >= 8 ? 1.0 : cores >= 4 ? 0.8 : 0.6;

    // Global safety caps
    const MAX_PARTICLES = Math.floor(1400 * perf);       // hard cap
    const MAX_SPAWN_PER_BURST = Math.floor(40 * perf);   // max new particles per burst
    const MAX_DRAW_PER_FRAME = Math.floor(500 * perf);   // max particles processed per frame

    // Parameters (bigger sparks, slightly longer life)
    const params = {
      spawnIntervalMs: Math.floor(420 / perf), // slower spawn initially
      countMin: Math.floor(22 * perf),
      countMax: Math.floor(40 * perf),
      speedMin: 100,
      speedMax: 200,
      lifeMin: 1.2,    // bigger sparks stay longer
      lifeMax: 1.9,
      sizeMin: 2.8,    // larger particles
      sizeMax: 4.6,
      gravity: 110,
      secondaryBurstChance: 0.0, // disabled for stability
      fadeFactor: 0.9,
      saturation: 95,
      lightness: 68    // a bit brighter
    };

    // Gentle size booster for first few seconds
    let sizeBoosterActive = false;
    let sizeBoosterEndTs = 0;
    const sizeBooster = {
      durationMs: 3500,
      sizeMin: 3.4,
      sizeMax: 5.6,
      lifeMin: 1.3,
      lifeMax: 2.0,
    };

    function resize() {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const bw = Math.floor(window.innerWidth * dpr);
      const bh = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      w = canvas.width;
      h = canvas.height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    window.addEventListener('resize', resize);

    function rand(min, max) { return Math.random() * (max - min) + min; }
    function hsla(h, s, l, a) { return `hsla(${h},${s}%,${l}%,${a})`; }

    function currentParams(ts) {
      const p = params;
      if (sizeBoosterActive && ts < sizeBoosterEndTs) {
        return {
          ...p,
          sizeMin: sizeBooster.sizeMin,
          sizeMax: sizeBooster.sizeMax,
          lifeMin: sizeBooster.lifeMin,
          lifeMax: sizeBooster.lifeMax,
        };
      } else {
        sizeBoosterActive = false;
        return p;
      }
    }

    function spawnBurst(x, y, p) {
      if (particles.length >= MAX_PARTICLES) return;

      const planned = Math.floor(rand(p.countMin, p.countMax));
      const count = Math.min(planned, MAX_SPAWN_PER_BURST, MAX_PARTICLES - particles.length);
      const hueBase = rand(0, 360);

      for (let i = 0; i < count; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(p.speedMin, p.speedMax);
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: rand(p.lifeMin, p.lifeMax),
          age: 0,
          size: rand(p.sizeMin, p.sizeMax),
          color: hsla((hueBase + rand(-10, 10)) % 360, p.saturation, p.lightness, 1),
        });
      }
    }

    function loop(ts) {
      if (!running) return;

      const p = currentParams(ts);

      // Clear screen
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);

      // Adaptive backoff if too many particles
      const load = particles.length / MAX_PARTICLES;
      if (load > 0.8) {
        params.spawnIntervalMs = Math.min(params.spawnIntervalMs + 60, 800);
      } else if (load < 0.4) {
        params.spawnIntervalMs = Math.max(params.spawnIntervalMs - 20, Math.floor(360 / perf));
      }

      // Periodic bursts
      if (ts - lastSpawn > p.spawnIntervalMs) {
        lastSpawn = ts;
        const x = rand(w * 0.18, w * 0.82);
        const y = rand(h * 0.18, h * 0.55);
        spawnBurst(x, y, p);
      }

      // Draw/update only a limited slice per frame
      const dt = 1 / 60;
      ctx.globalCompositeOperation = 'lighter';

      let processed = 0;
      const nextParticles = [];
      const len = particles.length;

      for (let i = 0; i < len; i++) {
        const pt = particles[i];
        if (processed >= MAX_DRAW_PER_FRAME) {
          // Age faster when skipped so they expire
          pt.age += dt * 1.5;
          if (pt.age <= pt.life) nextParticles.push(pt);
          continue;
        }

        pt.age += dt;
        if (pt.age > pt.life) continue;

        pt.vy += p.gravity * dt;
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;

        const alpha = Math.max(0, 1 - (pt.age / pt.life) * p.fadeFactor);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = pt.color.replace(/[\d.]+\)$/, (alpha + ')'));
        ctx.fill();

        nextParticles.push(pt);
        processed++;
      }

      // Preemptive trim if still over cap
      if (nextParticles.length > MAX_PARTICLES) {
        nextParticles.length = MAX_PARTICLES;
      }
      particles = nextParticles;

      rafId = requestAnimationFrame(loop);
    }

    function showCanvas() {
      canvas.style.display = 'block';
      resize();
    }
    function hideCanvas() {
      canvas.style.display = 'none';
    }

    // Public API
    window.startFireworks = function () {
      if (running) return;
      running = true;
      showCanvas();
      lastSpawn = performance.now();

      // Enable size booster for first seconds
      sizeBoosterActive = true;
      sizeBoosterEndTs = lastSpawn + sizeBooster.durationMs;

      rafId = requestAnimationFrame(loop);
    };

    window.stopFireworks = function () {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      particles = [];
      hideCanvas();
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
