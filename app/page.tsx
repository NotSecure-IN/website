// app/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Testing, Built for the Way You Build',
  description:
    'NotSecure makes application security testing simple, automated, and accessible. Run APTE-powered VAPT on demand through a single platform.',
  alternates: {
    canonical: 'https://notsecure.in',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              Security testing, <span className="gradient-text">built for the way you build.</span>
            </h1>
            <p className="hero-subtitle">
              NotSecure makes application security testing simple, automated, and accessible.
              Run APTE-powered VAPT on demand through a single platform — without the
              complexity of traditional security testing.
            </p>
            <div className="hero-buttons">
              <a
                href="https://dashboard.notsecure.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start Testing
              </a>
              <a href="/product" className="btn-secondary">
                Explore APTE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why NotSecure?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="bi bi-clock-history"></i>
              <h3>On-Demand</h3>
              <p>Run security tests whenever you need them, without waiting for manual engagements.</p>
            </div>
            <div className="feature-card">
              <i className="bi bi-credit-card"></i>
              <h3>Credit-Based</h3>
              <p>Purchase credits and use them exactly when you need — no long-term contracts or complex pricing.</p>
            </div>
            <div className="feature-card">
              <i className="bi bi-clipboard-check"></i>
              <h3>Actionable Results</h3>
              <p>Findings that are clear, evidence-driven, and designed to help you fix issues quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="product-showcase">
        <div className="container showcase-inner">
          <div className="showcase-text">
            <h2>Meet APTE</h2>
            <p>
              The engine behind automated VAPT. APTE powers NotSecure's automated security
              testing platform — built around structured analysis, testing, verification, and
              actionable findings.
            </p>
            <a href="/product" className="btn-primary">
              Learn More
            </a>
          </div>
          <div className="showcase-visual">
            <div className="abstract-shape"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="services-grid">
            <div className="service-item">
              <i className="bi bi-shield-check"></i>
              <h3>Automated VAPT</h3>
            </div>
            <div className="service-item">
              <i className="bi bi-mortarboard"></i>
              <h3>Cybersecurity Training</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="about-teaser">
        <div className="container">
          <h2>Building a simpler way to approach cybersecurity.</h2>
          <p>
            NotSecure is a cybersecurity technology company focused on accessible,
            product-led security solutions.
          </p>
          <a href="/about" className="btn-secondary">
            About Us
          </a>
        </div>
      </section>
    </>
  );
}