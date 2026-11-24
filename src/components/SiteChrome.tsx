"use client";

import { useState, useEffect } from "react";
import { useLang } from "./LangProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  const { locale, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
          Warairarepano
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-links">
          <a href={`/${locale}#nearby`}>{{ en:"Explore Caracas", es:"Explorar Caracas", zh:"探索加拉加斯" }[locale]}</a>
          <a href={`/${locale}#about`}>{t.nav.about}</a>
          <a href={`/${locale}#visiting`}>{t.nav.visiting}</a>
          <a href={`/${locale}#transportation`}>{t.nav.transportation}</a>
          <a href={`/${locale}#tips`}>{t.nav.tips}</a>
          <a href={`/${locale}#reviews`}>{t.nav.reviews}</a>
          <a href={`/${locale}#faq`}>{t.nav.faq}</a>
          <a href={`/${locale}#location`}>{t.nav.location}</a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export function Footer() {
  const { locale, t } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link: any, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <a href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {{ en: "Privacy Policy", es: "Privacidad", zh: "隐私政策" }[locale]}
        </a>
        <a href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {{ en: "Terms of Service", es: "Condiciones de uso", zh: "服务条款" }[locale]}
        </a>
        <a href="/cookies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          {{ en: "Cookie Settings", es: "Preferencias de cookies", zh: "Cookie 设置" }[locale]}
        </a>
      </div>
      <p className="footer-text" style={{ marginTop: "1rem" }}>{t.footer.text}</p>
      <p className="footer-made">{t.footer.made}</p>
    </footer>
  );
}
