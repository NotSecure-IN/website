import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career',
  description:
    'Join NotSecure team. Apply by sending your CV, phone number, and photo to support@notsecure.in.',
  alternates: {
    canonical: 'https://notsecure.in/career',
  },
};

export default function CareerPage() {
  return (
    <main className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="container career-hero-inner">
          <h1 className="career-title">
            Join the <span className="gradient-text">NotSecure</span> Team
          </h1>
          <p className="career-subtitle">
            We&apos;re always looking for passionate security researchers, developers, and
            problem-solvers who want to make the digital world safer.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="career-section">
        <div className="container career-content">
          <h2 className="career-section-title">Why Work With Us?</h2>
          <div className="career-reasons">
            <div className="career-reason-card">
              <i className="bi bi-cpu"></i>
              <h3>Cutting-Edge Technology</h3>
              <p>Work on APTE Engine — a next-generation security cognitive architecture.</p>
            </div>
            <div className="career-reason-card">
              <i className="bi bi-people"></i>
              <h3>Small, Focused Team</h3>
              <p>Join a close-knit group where your ideas and contributions matter.</p>
            </div>
            <div className="career-reason-card">
              <i className="bi bi-lightbulb"></i>
              <h3>Continuous Learning</h3>
              <p>Stay ahead with real-world security research and advanced projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Instructions */}
      <section className="career-section career-section-alt">
        <div className="container career-content">
          <h2 className="career-section-title">How to Apply</h2>
          <p className="career-text">
            We currently do not have any open positions, but we are always excited to connect
            with talented individuals. If you believe you can contribute to our mission,
            please send your application to:
          </p>
          <div className="career-email">
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:support@notsecure.in" className="gradient-text">
              support@notsecure.in
            </a>
          </div>
          <div className="career-requirements">
            <h3>What to Include</h3>
            <ul>
              <li>Recent CV (PDF format)</li>
              <li>Valid phone number</li>
              <li>Passport-size recent photograph</li>
              <li>Optional: link to your portfolio, GitHub, or previous work</li>
            </ul>
          </div>
          <p className="career-note">
            We review every application carefully and will contact you if we find a suitable match.
          </p>
        </div>
      </section>
    </main>
  );
}