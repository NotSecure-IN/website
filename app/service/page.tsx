// app/service/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Automated VAPT powered by APTE and practical cybersecurity training for organizations, colleges, and universities.',
  alternates: {
    canonical: 'https://notsecure.in/service',
  },
};

export default function ServicePage() {
  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container service-hero-inner">
          <h1 className="service-title">
            Security solutions for <span className="gradient-text">people and applications.</span>
          </h1>
          <p className="service-subtitle">
            NotSecure currently focuses on two things: automated application security testing
            through APTE, and practical cybersecurity training for organizations and academic
            institutions.
          </p>
        </div>
      </section>

      {/* Service Overview Cards */}
      <section className="service-overview">
        <div className="container">
          <div className="service-overview-grid">
            {/* Card 1: Automated VAPT */}
            <a
              href="https://dashboard.notsecure.in"
              target="_blank"
              rel="noopener noreferrer"
              className="service-overview-card service-card-link"
            >
              <div className="service-overview-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h2>Automated VAPT</h2>
              <p>
                Test your application on demand. Powered by APTE, our automated VAPT platform
                delivers structured security testing with clear, actionable findings.
              </p>
              <span className="btn-secondary service-card-btn">
                Start Testing <i className="bi bi-arrow-up-right"></i>
              </span>
            </a>

            {/* Card 2: Cybersecurity Training */}
            <div className="service-overview-card">
              <div className="service-overview-icon">
                <i className="bi bi-mortarboard"></i>
              </div>
              <h2>Cybersecurity Training</h2>
              <p>
                Build security skills that last beyond the classroom. Practical training for
                corporate teams, colleges, and universities.
              </p>
              <a href="#training-service" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service: Cybersecurity Training */}
      <section id="training-service" className="service-detail-section service-detail-alt">
        <div className="container">
          <div className="service-detail-header">
            <span className="service-detail-tag">Education</span>
            <h2 className="service-detail-title">Cybersecurity Training</h2>
            <div className="about-divider"></div>
            <p className="service-detail-intro">
              We provide practical cybersecurity training for corporate teams, colleges and
              universities — adapting the depth, topics, and delivery to the audience and
              learning objectives.
            </p>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-features">
              <div className="service-detail-feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <div>
                  <h3>For Organizations</h3>
                  <p>
                    Employee security awareness, technical team training, developer/security
                    education, and fully customized programs.
                  </p>
                </div>
              </div>
              <div className="service-detail-feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <div>
                  <h3>For Colleges & Universities</h3>
                  <p>
                    Student workshops, cybersecurity fundamentals, VAPT/application security
                    learning, practical sessions, faculty/staff programs, and bootcamps.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-detail-cta">
              <p>Want to schedule training for your organization or institution?</p>
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Future Private Deployment (Coming Soon) */}
      <section className="service-detail-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Private Security Deployment</h2>
          <p style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>Coming Soon</p>
          <p style={{ color: '#64748b' }}>
            Deployment options for organizations that require security testing within their own
            infrastructure.
          </p>
        </div>
      </section>
    </main>
  );
}