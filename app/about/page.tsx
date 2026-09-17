// app/about/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'NotSecure is a cybersecurity technology company building accessible, automated security solutions for modern digital teams.',
  alternates: {
    canonical: 'https://notsecure.in/about',
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              Building a <span className="gradient-text">simpler way</span> to approach cybersecurity.
            </h1>
            <p className="about-hero-description">
              NotSecure is a cybersecurity technology company building accessible, automated
              security solutions for modern digital teams.
            </p>
            <div className="about-hero-buttons">
              <a href="/product" className="btn-primary">
                Explore APTE
              </a>
              <a href="/service" className="btn-secondary">
                Our Services
              </a>
            </div>
          </div>
          <div className="about-hero-visual">
            <div className="about-visual-shape"></div>
            <i className="bi bi-shield-lock about-visual-icon"></i>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-company-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-tag">Who We Are</span>
            <h2 className="about-section-title">Security should be easier to access, easier to understand, and easier to act on.</h2>
            <div className="about-divider"></div>
            <p className="about-section-subtext">
              Traditional security testing can involve specialized expertise, complex tools, and
              lengthy processes. NotSecure is building a simpler, product-led approach to automated
              security testing.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="about-company-section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-tag">What We're Building</span>
            <h2 className="about-section-title">A cybersecurity platform, starting with automated VAPT.</h2>
            <div className="about-divider"></div>
            <p className="about-section-subtext">
              Our core focus is APTE — the engine behind our automated VAPT platform. We're building
              a SaaS experience where anyone can run security tests on demand, review clear findings,
              and fix issues faster.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-mission-section">
        <div className="container">
          <div className="about-mission-top">
            <span className="about-section-tag">Our Purpose</span>
            <h2 className="about-section-title">Mission & Core Values</h2>
            <div className="about-divider"></div>
          </div>

          <div className="about-mission-statement">
            <p>
              Make meaningful cybersecurity <span className="gradient-text">accessible</span> to
              more people and more organizations.
            </p>
          </div>

          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon"><i className="bi bi-tools"></i></div>
              <h4>Practicality</h4>
              <p>We build for real security problems, not just impressive demonstrations.</p>
              <div className="about-value-highlight"></div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon"><i className="bi bi-eye"></i></div>
              <h4>Transparency</h4>
              <p>Security results should be understandable, traceable, and useful.</p>
              <div className="about-value-highlight"></div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon"><i className="bi bi-lightbulb"></i></div>
              <h4>Innovation</h4>
              <p>We continuously explore better ways to automate and improve security testing.</p>
              <div className="about-value-highlight"></div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon"><i className="bi bi-shield-check"></i></div>
              <h4>Responsibility</h4>
              <p>Security technology must be developed and used with care, respect, and clear authorization.</p>
              <div className="about-value-highlight"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="about-company-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-tag">Our Path</span>
            <h2 className="about-section-title">We're just getting started.</h2>
            <div className="about-divider"></div>
          </div>
          <div className="about-timeline-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="about-timeline">
              <div className="about-timeline-item">
                <div className="about-timeline-date">Today</div>
                <div className="about-timeline-content">
                  <h3>Building and improving APTE-powered automated VAPT</h3>
                  <p>Through the NotSecure SaaS platform.</p>
                </div>
              </div>
              <div className="about-timeline-item">
                <div className="about-timeline-date">Next</div>
                <div className="about-timeline-content">
                  <h3>Expanding testing capabilities</h3>
                  <p>Improving the security testing experience.</p>
                </div>
              </div>
              <div className="about-timeline-item">
                <div className="about-timeline-date">Coming Soon</div>
                <div className="about-timeline-content">
                  <h3>Private deployment options</h3>
                  <p>For organizations requiring security testing within their own infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}