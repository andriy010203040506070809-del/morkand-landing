"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, createContext, useContext, type ReactNode } from "react";
import { useT } from "@/i18n/context";

const PreloaderContext = createContext(false);
export const usePreloaderDone = () => useContext(PreloaderContext);

export function PageWrapper({ children }: { children: ReactNode }) {
  const t = useT();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "hold" | "reveal" | "done">("loading");
  const rafRef = useRef<number>(0);
  const startRef = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    startRef.current = performance.now();
    const duration = 2400;

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setProgress(Math.floor(eased * 100));

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase("hold");
        setTimeout(() => {
          setPhase("reveal");
          setTimeout(() => {
            setPhase("done");
            document.body.style.overflow = "";
            if (contentRef.current) {
              contentRef.current.className = "site-visible";
            }
          }, 1000);
        }, 1000);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <PreloaderContext.Provider value={phase === "done"}>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="preloader"
          >
            <div className="preloader-grid" />

            {/* SVG — large & vivid */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(90vw, 620px)",
              height: "min(90vw, 620px)",
              opacity: 0.45,
              overflow: "visible",
            }}>
              <svg viewBox="0 0 400 400" fill="none" overflow="visible" style={{ width: "100%", height: "100%" }}>
                <motion.rect
                  x="40" y="40" width="320" height="320" rx="20"
                  stroke="url(#preGrad)" strokeWidth="1.5"
                  initial={{ pathLength: 0, rotate: 0 }}
                  animate={{ pathLength: 1, rotate: 360 }}
                  transition={{ pathLength: { duration: 2, ease: "easeInOut" }, rotate: { duration: 8, ease: "linear", repeat: Infinity } }}
                  style={{ originX: "50%", originY: "50%" }}
                />
                <motion.rect
                  x="80" y="80" width="240" height="240" rx="12"
                  stroke="url(#preGrad)" strokeWidth="0.8" strokeDasharray="6 4"
                  initial={{ pathLength: 0, rotate: 0 }}
                  animate={{ pathLength: 1, rotate: -360 }}
                  transition={{ pathLength: { duration: 1.8, ease: "easeInOut", delay: 0.2 }, rotate: { duration: 12, ease: "linear", repeat: Infinity } }}
                  style={{ originX: "50%", originY: "50%" }}
                />
                <motion.circle
                  cx="200" cy="200" r="80"
                  stroke="url(#preGrad)" strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.circle
                  cx="200" cy="200" r="50"
                  stroke="url(#preGrad)" strokeWidth="0.8" strokeDasharray="3 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
                />
                <motion.line x1="200" y1="60" x2="200" y2="340" stroke="#a855f7" strokeWidth="0.6" opacity="0.7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.line x1="60" y1="200" x2="340" y2="200" stroke="#a855f7" strokeWidth="0.6" opacity="0.7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
                <motion.line x1="100" y1="100" x2="300" y2="300" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
                <motion.line x1="300" y1="100" x2="100" y2="300" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.9 }} />
                {[[200,120],[280,200],[200,280],[120,200],[145,145],[255,145],[255,255],[145,255]].map(([cx,cy],i) => (
                  <motion.circle key={i} cx={cx} cy={cy} r="4" fill="#a855f7" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.8, scale: 1 }} transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }} />
                ))}
                <motion.circle cx="200" cy="200" r="8" fill="#a855f7" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0,1,0.7,1], scale: [0,1.3,0.9,1] }} transition={{ delay: 0.5, duration: 1.5 }} />
                {["M140 140 L110 110 L110 60","M260 140 L290 110 L340 110","M260 260 L290 290 L290 340","M140 260 L110 290 L60 290"].map((d,i) => (
                  <motion.path key={i} d={d} stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }} />
                ))}
                <defs>
                  <linearGradient id="preGrad" x1="0" y1="0" x2="400" y2="400">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Logo */}
            <motion.div className="preloader-logo" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <div className="preloader-brand">
                <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>MOR</motion.span>
                <motion.span className="preloader-accent" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>KAND</motion.span>
              </div>
              <motion.div className="preloader-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
                {t.preloader.tagline}
              </motion.div>
            </motion.div>

            {/* Progress */}
            <div className="preloader-bottom">
              <motion.div className="preloader-counter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <span className="preloader-num">{String(progress).padStart(3, "0")}</span>
                <span className="preloader-pct">%</span>
              </motion.div>
              <div className="preloader-bar-track">
                <motion.div className="preloader-bar-fill" initial={{ scaleX: 0 }} animate={{ scaleX: progress / 100 }} transition={{ duration: 0.1 }} />
              </div>
              <motion.div className="preloader-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                {progress < 30 ? t.preloader.status[0] : progress < 60 ? t.preloader.status[1] : progress < 90 ? t.preloader.status[2] : t.preloader.status[3]}
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Content — starts hidden via CSS class, revealed by JS after preloader */}
      <div ref={contentRef} className="site-hidden">
        {children}
      </div>
    </PreloaderContext.Provider>
  );
}
