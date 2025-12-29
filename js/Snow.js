    // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();
      (function () {
          // ✅ Set your window (YYYY-MM-DD). END is inclusive.
          const START = "2025-12-01";
          const END = "2026-01-05";

          function inWindowLocal(startYmd, endYmd) {
              const now = new Date();
              const start = new Date(startYmd + "T00:00:00");
              const end = new Date(endYmd + "T23:59:59");
              return now >= start && now <= end;
          }

          function applySnowcap(enabled) {
              const btn = document.getElementById("btn");
              if (!btn) return;
              btn.classList.toggle("snowcap", enabled);
          }

          let snow = null;

          function startSnowfall() {
              if (snow) return; // already running

              // --- Canvas setup ---
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");

              canvas.style.position = "fixed";
              canvas.style.left = "0";
              canvas.style.top = "0";
              canvas.style.width = "100%";
              canvas.style.height = "100%";
              canvas.style.pointerEvents = "none";
              canvas.style.zIndex = "999999"; // above all
              document.body.appendChild(canvas);

              // IMPORTANT: canvas resize resets context styles (iOS issue) -> re-apply styles after resize.
              function applySnowStyle() {
                  ctx.fillStyle = "rgba(255,255,255,1)";
                  ctx.shadowColor = "rgba(243,241,241,0.9)";
                  ctx.shadowBlur = 8;
              }

              function resize() {
                  const dpr = window.devicePixelRatio || 1;
                  canvas.width = Math.floor(window.innerWidth * dpr);
                  canvas.height = Math.floor(window.innerHeight * dpr);
                  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                  applySnowStyle(); // ✅ fixes “snow turns black after scroll/resize”
              }
              resize();

              // iOS Safari often fires resize while scrolling (address bar). This is why we must re-apply style.
              window.addEventListener("resize", resize);

              // --- Particles ---
              const COUNT = 220; // denser so it's easier to see
              const flakes = Array.from({ length: COUNT }, () => ({
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  r: 2 + Math.random() * 4,
                  vx: -0.4 + Math.random() * 0.8,
                  vy: 1.2 + Math.random() * 2.2,
                  wobble: Math.random() * Math.PI * 2,
              }));

              let running = true;

              function tick() {
                  if (!running) return;

                  applySnowStyle();

                  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

                  for (const f of flakes) {
                      f.wobble += 0.02;
                      f.x += f.vx + Math.sin(f.wobble) * 0.45;
                      f.y += f.vy;

                      // wrap
                      if (f.y > window.innerHeight + 12) {
                          f.y = -12;
                          f.x = Math.random() * window.innerWidth;
                      }
                      if (f.x > window.innerWidth + 12) f.x = -12;
                      if (f.x < -12) f.x = window.innerWidth + 12;

                      ctx.beginPath();
                      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                      ctx.fill();
                  }

                  requestAnimationFrame(tick);
              }
              tick();

              snow = {
                  stop() {
                      running = false;
                      window.removeEventListener("resize", resize);
                      canvas.remove();
                      snow = null;
                  }
              };
          }

          function syncHolidayMode() {
              const enabled = inWindowLocal(START, END);
              applySnowcap(enabled);

              if (enabled) {
                  startSnowfall();
              } else if (snow) {
                  snow.stop();
              }
          }

          // Initial sync
          syncHolidayMode();

          // Optional: if the page stays open across midnight, update within a minute.
          setInterval(syncHolidayMode, 60_000);
      })();