"use client";

import { useEffect } from "react";

export function ScrollAnimator() {
  useEffect(() => {
    const body = document.body;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      && body.dataset.forceMotion !== "true";
    const revealItems = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const parallaxItems = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    const counters = [...document.querySelectorAll<HTMLElement>("[data-counter]")];
    const animationFrames = new Set<number>();
    const revealedItems = new WeakSet<HTMLElement>();

    revealItems.forEach((element) => {
      const delay = Number(element.dataset.revealDelay ?? 0);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    });
    body.classList.add("motion-ready");

    if (reduceMotion) {
      body.classList.remove("motion-ready");
      return;
    }

    const markAsRevealed = (element: HTMLElement) => {
      revealedItems.add(element);
      element.dataset.revealed = "true";
    };

    const preserveRevealState = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const element = mutation.target as HTMLElement;
        if (revealedItems.has(element) && element.dataset.revealed !== "true") {
          element.dataset.revealed = "true";
        }
      });
    });
    preserveRevealState.observe(body, { subtree: true, attributes: true, attributeFilter: ["data-revealed"] });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        markAsRevealed(entry.target as HTMLElement);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    revealItems.forEach((element) => revealObserver.observe(element));

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const target = Number(element.dataset.counter ?? 0);
        const suffix = element.dataset.counterSuffix ?? "";
        const digits = Number(element.dataset.counterDigits ?? String(target).length);
        const startedAt = performance.now();
        const duration = 1350;

        const updateCounter = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased).toString().padStart(digits, "0");
          element.textContent = `${value}${suffix}`;
          if (progress < 1) {
            const frame = requestAnimationFrame(updateCounter);
            animationFrames.add(frame);
          }
        };

        element.textContent = `${"0".padStart(digits, "0")}${suffix}`;
        const frame = requestAnimationFrame(updateCounter);
        animationFrames.add(frame);
        counterObserver.unobserve(element);
      });
    }, { threshold: 0.55 });

    counters.forEach((element) => counterObserver.observe(element));

    let parallaxFrame = 0;
    const updateParallax = () => {
      parallaxFrame = 0;
      parallaxItems.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Number(element.dataset.parallax ?? 24);
        const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight));
        element.style.setProperty("--parallax-y", `${(-progress * distance).toFixed(2)}px`);
      });
    };
    const scheduleParallax = () => {
      if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", scheduleParallax, { passive: true });
    window.addEventListener("resize", scheduleParallax);

    return () => {
      body.classList.remove("motion-ready");
      preserveRevealState.disconnect();
      revealObserver.disconnect();
      counterObserver.disconnect();
      animationFrames.forEach((frame) => cancelAnimationFrame(frame));
      if (parallaxFrame) cancelAnimationFrame(parallaxFrame);
      window.removeEventListener("scroll", scheduleParallax);
      window.removeEventListener("resize", scheduleParallax);
    };
  }, []);

  return null;
}
