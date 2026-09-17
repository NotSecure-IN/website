import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vulnerability Disclosure Program',
  description:
    'Responsible disclosure program for NotSecure. Report vulnerabilities to support@notsecure.in and get recognized.',
  alternates: {
    canonical: 'https://notsecure.in/vdp',
  },
};

export default function VdpPage() {
  return (
    <main className="vdp-page">
      {/* Hero Section */}
      <section className="vdp-hero">
        <div className="container vdp-hero-inner">
          <h1 className="vdp-title">
            Vulnerability <span className="gradient-text">Disclosure</span> Program
          </h1>
          <p className="vdp-subtitle">
            We value the security community and welcome responsible disclosure of vulnerabilities
            to help us protect our users and systems.
          </p>
          <div className="vdp-note">
            <i className="bi bi-info-circle-fill"></i>
            <p>
              This is a <strong>recognition-only</strong> program. We do not offer monetary rewards,
              but we honor valid submissions with a Hall of Fame listing and a Letter of Recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Introduction */}
      <section className="vdp-section">
        <div className="container vdp-content">
          <div className="vdp-intro">
            <h2>Our Commitment</h2>
            <p>
              At NotSecure, we take security seriously. We believe that working with the security
              research community is essential to maintaining a robust security posture. This page
              outlines how to report vulnerabilities responsibly and what you can expect from us.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="vdp-section vdp-section-alt">
        <div className="container vdp-content">
          <h2 className="vdp-section-title">Scope</h2>
          <div className="vdp-scope-grid">
            <div className="vdp-scope-card">
              <div className="vdp-scope-header">
                <i className="bi bi-check-circle-fill"></i>
                <h3>In Scope</h3>
              </div>
              <ul className="vdp-list">
                <li><strong>Websites:</strong> *.notsecure.in (all subdomains)</li>
                <li><strong>Framework:</strong> APTE Engine (including its API and related components)</li>
                <li><strong>APIs:</strong> dashboard.notsecure.in and other official endpoints</li>
              </ul>
            </div>

            <div className="vdp-scope-card">
              <div className="vdp-scope-header">
                <i className="bi bi-x-circle-fill"></i>
                <h3>Out of Scope</h3>
              </div>
              <ul className="vdp-list vdp-list-out">
                <li>Denial of Service (DoS) attacks</li>
                <li>Social engineering or phishing</li>
                <li>Physical security testing</li>
                <li>Third-party services not owned by NotSecure</li>
                <li>Non-security bugs or typos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Report */}
      <section className="vdp-section">
        <div className="container vdp-content">
          <h2 className="vdp-section-title">How to Report</h2>
          <p className="vdp-text">
            If you discover a vulnerability within our scope, please send a detailed report to:
          </p>
          <div className="vdp-report-method">
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:support@notsecure.in" className="vdp-email">
              support@notsecure.in
            </a>
          </div>

          <h3 className="vdp-subheading">What to Include</h3>
          <ul className="vdp-list vdp-list-plain">
            <li>Description of the vulnerability</li>
            <li>Steps to reproduce (with proof-of-concept if possible)</li>
            <li>Affected asset/URL or component</li>
            <li>Potential impact and severity assessment</li>
            <li>Your contact information (optional, but recommended)</li>
          </ul>

          <h3 className="vdp-subheading">Response Process</h3>
          <ol className="vdp-list vdp-list-plain">
            <li><strong>Acknowledgment:</strong> We will confirm receipt within 48 hours.</li>
            <li><strong>Investigation:</strong> Our team will validate the report (usually within 7 days).</li>
            <li><strong>Resolution:</strong> We will work to fix confirmed issues in a timely manner.</li>
            <li><strong>Communication:</strong> We will keep you updated on progress.</li>
          </ol>
        </div>
      </section>

      {/* Recognition Section (New) */}
      <section className="vdp-section vdp-section-alt">
        <div className="container vdp-content">
          <h2 className="vdp-section-title">Recognition</h2>
          <p className="vdp-text">
            As a token of our appreciation for helping us improve security, we offer the following
            non‑monetary recognition for valid reports:
          </p>
          <div className="vdp-recognition-grid">
            <div className="vdp-recognition-card">
              <i className="bi bi-award"></i>
              <h3>Hall of Fame</h3>
              <p>Your name (or alias) will be permanently listed on our Hall of Fame page.</p>
            </div>
            <div className="vdp-recognition-card">
              <i className="bi bi-envelope-paper"></i>
              <h3>Letter of Recognition</h3>
              <p>We will provide an official letter acknowledging your contribution, which you can use for your portfolio or employer.</p>
            </div>
          </div>
          <p className="vdp-text vdp-text-spaced">
            We do <strong>not</strong> offer monetary rewards, bounties, or gifts for vulnerability reports.
          </p>
        </div>
      </section>

      {/* Safe Harbor */}
      <section className="vdp-section">
        <div className="container vdp-content">
          <h2 className="vdp-section-title">Safe Harbor</h2>
          <p className="vdp-text">
            We will not pursue legal action against individuals who:
          </p>
          <ul className="vdp-list vdp-list-plain">
            <li>Report vulnerabilities in good faith and follow this policy.</li>
            <li>Avoid accessing or modifying data beyond what is necessary to demonstrate the vulnerability.</li>
            <li>Do not publicly disclose the vulnerability before we have had a reasonable time to address it.</li>
          </ul>
          <p className="vdp-text vdp-text-spaced">
            We appreciate your help in keeping our systems secure.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="vdp-section">
        <div className="container vdp-content vdp-contact">
          <h2 className="vdp-section-title">Need Help?</h2>
          <p className="vdp-text">
            For any questions about this program, contact us at{' '}
            <a href="mailto:support@notsecure.in" className="gradient-text">
              support@notsecure.in
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}