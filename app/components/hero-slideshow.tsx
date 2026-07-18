"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type HeroSlide = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const DISSOLVE_MS = 1100; // length of the pixel dissolve
const BLOCK = 42; // px — dissolve "pixel" grain size

/* Full-bleed hero background that transitions between images with a
   canvas-based PIXEL DISSOLVE: the incoming image is revealed one random
   block at a time (classic dissolve), drawn straight from the already
   decoded, Next-optimized <img> elements (same-origin, no extra fetch).
   - First slide is the LCP image (priority); the rest load eagerly.
   - prefers-reduced-motion: no auto-rotation, static first slide.
   - Pauses while the tab is hidden. Array-based — add a slide, done. */
export default function HeroSlideshow({
  slides,
  interval = 5000
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const animatingRef = useRef(false);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const objectPositionFractions = (op?: string) => {
      const keyword = (v: string): number | null =>
        v === "center"
          ? 0.5
          : v === "left" || v === "top"
            ? 0
            : v === "right" || v === "bottom"
              ? 1
              : null;
      if (!op) return { x: 0.5, y: 0.5 };
      const [px = "50%", py = "50%"] = op.trim().split(/\s+/);
      const parse = (v: string) => {
        const k = keyword(v);
        if (k !== null) return k;
        const n = parseFloat(v);
        return Number.isNaN(n) ? 0.5 : n / 100;
      };
      return { x: parse(px), y: parse(py) };
    };

    const drawCover = (
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      w: number,
      h: number,
      op?: string
    ) => {
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return;
      const scale = Math.max(w / iw, h / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const { x, y } = objectPositionFractions(op);
      ctx.drawImage(img, (w - dw) * x, (h - dh) * y, dw, dh);
    };

    const transitionTo = (nextIdx: number) => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      const nextImg = imgRefs.current[nextIdx];
      // If the incoming image or canvas isn't ready, swap instantly.
      if (!canvas || !container || !nextImg || !nextImg.complete || !nextImg.naturalWidth) {
        setActive(nextIdx);
        return;
      }
      const w = container.clientWidth;
      const h = container.clientHeight;
      const ctx = canvas.getContext("2d");
      if (!w || !h || !ctx) {
        setActive(nextIdx);
        return;
      }

      animatingRef.current = true;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Composite the incoming image (cover-fit) onto an offscreen buffer,
      // then reveal it block-by-block.
      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d");
      if (!octx) {
        setActive(nextIdx);
        animatingRef.current = false;
        return;
      }
      drawCover(octx, nextImg, w, h, slides[nextIdx].objectPosition);

      const cols = Math.ceil(w / BLOCK);
      const rows = Math.ceil(h / BLOCK);
      const blocks: [number, number][] = [];
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) blocks.push([x, y]);
      for (let i = blocks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
      }

      const total = blocks.length;
      let drawn = 0;
      let startTs: number | undefined;

      const step = (ts: number) => {
        if (startTs === undefined) startTs = ts;
        const t = Math.min((ts - startTs) / DISSOLVE_MS, 1);
        const target = Math.floor(t * total);
        for (let k = drawn; k < target; k++) {
          const [bx, by] = blocks[k];
          const sx = bx * BLOCK;
          const sy = by * BLOCK;
          ctx.drawImage(off, sx, sy, BLOCK, BLOCK, sx, sy, BLOCK, BLOCK);
        }
        drawn = target;
        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          // Incoming fully drawn: promote it to the base layer, then clear
          // the canvas a frame later so the swap is seamless.
          setActive(nextIdx);
          animatingRef.current = false;
          requestAnimationFrame(() =>
            requestAnimationFrame(() => ctx.clearRect(0, 0, w, h))
          );
        }
      };
      raf = requestAnimationFrame(step);
    };

    const tick = () => {
      if (animatingRef.current) return;
      transitionTo((activeRef.current + 1) % slides.length);
    };

    const start = () => {
      clearInterval(timer);
      timer = setInterval(tick, interval);
    };
    const onVisibility = () => {
      if (document.hidden) {
        clearInterval(timer);
        cancelAnimationFrame(raf);
      } else {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(timer);
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [slides, interval]);

  return (
    <div className="hero-media" ref={containerRef}>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          ref={(el) => {
            imgRefs.current[i] = el;
          }}
          className={`hero-slide${i === active ? " is-active" : ""}`}
          src={slide.src}
          alt={i === 0 ? slide.alt : ""}
          aria-hidden={i === 0 ? undefined : true}
          fill
          priority={i === 0}
          loading={i === 0 ? undefined : "eager"}
          sizes="100vw"
          style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
        />
      ))}
      <canvas ref={canvasRef} className="hero-dissolve" aria-hidden="true" />
    </div>
  );
}
