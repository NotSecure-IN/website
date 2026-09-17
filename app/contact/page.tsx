import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Connect with NotSecure via Twitter, LinkedIn, email, or dashboard support. We're here to help with your security needs.",
  alternates: {
    canonical: 'https://notsecure.in/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <h1 className="contact-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="contact-subtitle">
            Have a question, need a security assessment, or want to discuss APTE Engine?
            Reach out through any of our official channels below.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="contact-channels">
        <div className="container">
          <div className="contact-grid">
            {/* Twitter / X */}
            <a
              href="https://twitter.com/notsecure_in"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <i className="bi bi-twitter-x"></i>
              </div>
              <h3>Twitter / X</h3>
              <p>Follow us for security insights, updates, and announcements.</p>
              <span className="contact-card-link">
                @notsecure_in <i className="bi bi-arrow-up-right"></i>
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/not-secure/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <i className="bi bi-linkedin"></i>
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with us professionally for business inquiries and partnerships.</p>
              <span className="contact-card-link">
                NotSecure <i className="bi bi-arrow-up-right"></i>
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:support@notsecure.in"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <h3>Email Support</h3>
              <p>For direct inquiries, security assessments, or general questions.</p>
              <span className="contact-card-link">
                support@notsecure.in <i className="bi bi-arrow-up-right"></i>
              </span>
            </a>

            {/* Dashboard Support */}
            <a
              href="https://dashboard.notsecure.in"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <h3>Dashboard Support</h3>
              <p>Existing customers can open a support ticket from the dashboard.</p>
              <span className="contact-card-link">
                dashboard.notsecure.in <i className="bi bi-arrow-up-right"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}