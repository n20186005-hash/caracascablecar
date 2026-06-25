"use client";

import React, { useEffect, useState, useRef } from "react";
import { LangProvider, useLang } from "@/components/LangProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const MAPS_URL = "https://maps.app.goo.gl/U9eHagpbauG8U5U57";

const GALLERY_IMAGES = Array.from(
  { length: 15 },
  (_: number, i: number) => `/gallery/caracascablecar (${i + 1}).jpg`
);

const GOOGLE_REVIEWS = [
  { name: "Carlos Mendoza", avatar: "CM", rating: 5, date: "2024-03-15", text: "Una experiencia increíble. Las vistas de Caracas desde el teleférico son espectaculares. Muy recomendado para locales y turistas." },
  { name: "Sarah Johnson", avatar: "SJ", rating: 5, date: "2024-02-20", text: "Amazing experience! The cable car ride offers breathtaking panoramic views of Caracas. A must-visit when you're in Venezuela's capital." },
  { name: "张伟", avatar: "张", rating: 5, date: "2024-04-10", text: "非常棒的体验！缆车沿途风景壮观，从山顶俯瞰整个加拉加斯城，视野极佳。票价也很实惠，强烈推荐！" },
  { name: "María González", avatar: "MG", rating: 4, date: "2024-01-28", text: "El viaje en teleférico es muy bonito, las vistas son únicas. Lleguen temprano para evitar las filas. La cima del Ávila es espectacular." },
  { name: "James Wilson", avatar: "JW", rating: 5, date: "2024-03-05", text: "The Warairarepano Cable Car is a fantastic way to see Caracas from above. The ride is smooth and the views are unforgettable. Great value for money!" },
  { name: "Isabella Rossi", avatar: "IR", rating: 5, date: "2024-02-15", text: "Che bello! Il sistema di teleférico è stato ristrutturato molto bene. Dalla cima si vede tutta la città e anche il mare in lontananza. Da non perdere!" },
];

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Nav() {
  const { t } = useLang();
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
          <a href="#about">{t.nav.about}</a>
          <a href="#visiting">{t.nav.visiting}</a>
          <a href="#transportation">{t.nav.transportation}</a>
          <a href="#tips">{t.nav.tips}</a>
          <a href="#reviews">{t.nav.reviews}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#location">{t.nav.location}</a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-texture" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tagline">{t.hero.tagline}</p>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <a href="#about" className="hero-cta">
          {t.hero.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
      <div className="hero-meta">
        <div className="hero-rating">4.5</div>
        <div className="hero-stars">★★★★☆</div>
        <div className="hero-reviews">11,855 {t.rating.reviews} · {t.rating.source}</div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section">
      <ScrollReveal>
        <p className="section-label">01</p>
        <h2 className="section-title">{t.about.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>{t.about.p1}</p>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>{t.about.p2}</p>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>{t.about.p3}</p>
      </ScrollReveal>
      <ScrollReveal>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem", marginTop: "2rem" }}>
          {t.about.highlights.title}
        </h3>
        <div className="highlights-grid">
          {t.about.highlights.items.map((item: string, i: number) => (
            <div className="highlight-item" key={i}>
              <div className="highlight-icon" />
              <span className="highlight-text">{item}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#fff", borderRadius: "2px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.5rem", whiteSpace: "pre-line" }}>
            {t.about.management.title}
          </h4>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "var(--color-earth-soft)", whiteSpace: "pre-line" }}>
            {t.about.management.content}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Visiting() {
  const { t } = useLang();
  const cards = [
    { title: t.visiting.hours.title, content: t.visiting.hours.content, note: t.visiting.hours.note },
    { title: t.visiting.price.title, content: t.visiting.price.content, note: t.visiting.price.note },
    { title: t.visiting.duration.title, content: t.visiting.duration.content, note: t.visiting.duration.note },
  ];

  return (
    <section id="visiting" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #eee8dd 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">02</p>
          <h2 className="section-title">{t.visiting.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="info-grid">
            {cards.map((c, i) => (
              <div className="info-card" key={i}>
                <div className="info-card-title">{c.title}</div>
                <div className="info-card-content">{c.content}</div>
                <div className="info-card-note">{c.note}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bring-section">
            <div className="bring-title">{t.visiting.bring.title}</div>
            <ul className="bring-list">
              {t.visiting.bring.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Transportation() {
  const { t } = useLang();

  return (
    <section id="transportation" className="section">
      <ScrollReveal>
        <p className="section-label">03</p>
        <h2 className="section-title">{t.transportation.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          
          <div className="transport-card">
            <div className="transport-icon">✈️</div>
            <h3 className="transport-title">{t.transportation.airport.title}</h3>
            <p className="transport-content" style={{ marginBottom: "1rem" }}>{t.transportation.airport.content}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {t.transportation.airport.options.map((opt: any, i: number) => (
                <div key={i} style={{ padding: "1.25rem", background: "rgba(0,0,0,0.03)", borderRadius: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--color-deep)", fontSize: "1.05rem" }}>{opt.name}</strong>
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                    <span style={{ color: "var(--color-gold)", fontWeight: 600 }}>{opt.price}</span>
                    <span>⏱️ {opt.time}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {opt.steps.map((step: string, j: number) => (
                      <div key={j} style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="transport-card">
              <div className="transport-icon">🚇</div>
              <h3 className="transport-title">{t.transportation.city.title}</h3>
              <p className="transport-content" style={{ marginBottom: "1rem" }}>{t.transportation.city.content}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "rgba(0,0,0,0.02)", padding: "1.25rem", borderRadius: "6px" }}>
                {t.transportation.city.steps.map((step: string, i: number) => (
                  <div key={i} style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="transport-card">
              <div className="transport-icon">🚗</div>
              <h3 className="transport-title">{t.transportation.selfDrive.title}</h3>
              <p className="transport-content" style={{ marginBottom: "1rem" }}>{t.transportation.selfDrive.content}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "rgba(0,0,0,0.02)", padding: "1.25rem", borderRadius: "6px" }}>
                {t.transportation.selfDrive.steps.map((step: string, i: number) => (
                  <div key={i} style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

function Tips() {
  const { t } = useLang();
  return (
    <section id="tips" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">04</p>
          <h2 className="section-title">{t.tips.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <ul className="tips-list">
            {t.tips.items.map((tip: string, i: number) => (
              <li className="tip-item" key={i}>
                <span className="tip-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="tip-text">{tip}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null));
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="section">
      <ScrollReveal>
        <p className="section-label">05</p>
        <h2 className="section-title">{t.gallery.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <div className="gallery-item" key={i} onClick={() => setLightboxIndex(i)}>
              <img src={src} alt={`Warairarepano Cable Car ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {t.gallery.viewMore}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>×</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>‹</button>
          <img src={GALLERY_IMAGES[lightboxIndex]} alt={`Warairarepano Cable Car ${lightboxIndex + 1}`} className="lightbox-img" />
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length); }}>›</button>
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const { t } = useLang();

  return (
    <section id="reviews" className="section">
      <ScrollReveal>
        <p className="section-label">06</p>
        <h2 className="section-title">{t.reviews.title}</h2>
        <p className="section-subtitle">{t.reviews.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="reviews-grid">
          {GOOGLE_REVIEWS.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-info">
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-rating">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-source">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4285F4"/>
                </svg>
                Google
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {t.reviews.viewMore}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FAQ() {
  const { t } = useLang();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems = t.faq.items;

  return (
    <section id="faq" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">07</p>
          <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-subtitle">{t.faq.subtitle}</p>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-list">
            {faqItems.map((item: any, i: number) => (
              <div className={`faq-item ${expandedIndex === i ? "expanded" : ""}`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <span>{item.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`faq-icon ${expandedIndex === i ? "rotated" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {expandedIndex === i && (
                  <div className="faq-answer">
                    {item.answer.split("\n\n").map((paragraph: string, j: number) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="section">
      <ScrollReveal>
        <p className="section-label">08</p>
        <h2 className="section-title">{t.location.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="location-section">
          <div className="location-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.925017488201!2d-66.927997!3d10.539444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2c5b5b5b5b5b%3A0x8c8c8c8c8c8c8c!2sMarip%C3%A9rez%20Station!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="800"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Warairarepano Cable Car Location Map"
            />
          </div>
          <div className="location-info">
            <p className="location-address">{t.location.address}</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-link">
              {t.location.openMaps}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const phone = t.contact.phone;
  const cleanPhone = phone.replace(/\s/g, "");
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: "4rem" }}>
      <ScrollReveal>
        <div className="contact-block">
          <div className="contact-icon">📞</div>
          <div>
            <a href={`tel:${cleanPhone}`} className="contact-phone">{phone}</a>
            <p className="contact-note">{t.contact.phoneNote}</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
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
          Privacy Policy
        </a>
        <a href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          Terms of Service
        </a>
        <a href="/cookies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          Cookie Settings
        </a>
      </div>
      <p className="footer-text" style={{ marginTop: "1rem" }}>{t.footer.text}</p>
      <p className="footer-made">{t.footer.made}</p>
    </footer>
  );
}

export default function Home(props: { params: Promise<{ locale: string }> }) {
  const params = React.use(props.params);
  return (
    <LangProvider initialLocale={params.locale as any}>
      <Nav />
      <Hero />
      <About />
      <Visiting />
      <Transportation />
      <Tips />
      <Gallery />
      <Reviews />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
    </LangProvider>
  );
}
