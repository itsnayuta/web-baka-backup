"use client";

import { useEffect, useState } from "react";
import { officialChannels, siteConfig } from "@/config/site";
import { CloseIcon, GridIcon, SearchIcon } from "@/components/ui/Icons";
import { Logo } from "./Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;
      const sections = siteConfig.navigation
        .map((item) => ({ item, element: document.getElementById(item.href.slice(1)) }))
        .filter((entry): entry is { item: (typeof siteConfig.navigation)[number]; element: HTMLElement } => Boolean(entry.element))
        .sort((a, b) => a.element.offsetTop - b.element.offsetTop);

      if (!sections.length) return;

      const isAtPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const readingLine = window.scrollY + 112 + Math.min(window.innerHeight * 0.16, 150);
      let currentHref = sections[0].item.href;

      for (const section of sections) {
        if (section.element.offsetTop <= readingLine) currentHref = section.item.href;
        else break;
      }

      if (isAtPageEnd) currentHref = "#contact";
      setActiveHref((previous) => previous === currentHref ? previous : currentHref);
    };

    const scheduleUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  const selectSection = (href: string) => setActiveHref(href);

  return (
    <>
    <header className={`site-header ${stuck ? "is-sticky" : ""}`}>
      <div className="header-container">
        <nav className="header-nav" aria-label="Điều hướng chính">
          <a className="header-logo" href="#home" onClick={() => selectSection("#home")}><Logo /></a>
          <ul className="desktop-nav">
            {siteConfig.navigation.map((item) => (
              <li className={item.children ? "has-dropdown" : ""} key={item.label}>
                <a className={activeHref === item.href ? "active" : ""} href={item.href} aria-current={activeHref === item.href ? "location" : undefined} onClick={() => selectSection(item.href)}>{item.label}</a>
                {item.children && <ul className="dropdown">{item.children.map((child) => <li key={child}><a href="#products" onClick={() => selectSection("#products")}>{child}</a></li>)}</ul>}
              </li>
            ))}
          </ul>
          <div className="header-actions">
            <a className="action-link search-link" href="#knowledge" aria-label="Tìm hiểu về tinh bột kháng" onClick={() => selectSection("#knowledge")}><SearchIcon /></a>
            <a className="grid-button" href={officialChannels.products} target="_blank" rel="noreferrer" aria-label="Khám phá sản phẩm BAKA"><GridIcon /></a>
          </div>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(true)} aria-expanded={menuOpen} aria-label="Mở trình đơn"><GridIcon /></button>
        </nav>
      </div>
      <div className={`mobile-drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />
        <nav className="drawer-panel" aria-label="Điều hướng di động">
          <div className="drawer-head"><Logo /><button onClick={() => setMenuOpen(false)} aria-label="Đóng trình đơn"><CloseIcon /></button></div>
          <ul>{siteConfig.navigation.map((item) => <li key={item.label}><a className={activeHref === item.href ? "active" : ""} href={item.href} aria-current={activeHref === item.href ? "location" : undefined} onClick={() => { selectSection(item.href); setMenuOpen(false); }}>{item.label}</a>{item.children?.map(child => <a className="drawer-child" href="#products" key={child} onClick={() => { selectSection("#products"); setMenuOpen(false); }}>{child}</a>)}</li>)}</ul>
        </nav>
      </div>
    </header>
    <div className="header-spacer" aria-hidden="true" />
    </>
  );
}
