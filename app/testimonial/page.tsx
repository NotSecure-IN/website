import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: "See what our clients and partners say about NotSecure's cybersecurity solutions.",
  alternates: {
    canonical: 'https://notsecure.in/testimonial',
  },
};

export default function TestimonialPage() {
  return (
    <main className="testimonial-page">
      {/* Hero Section */}
      <section className="testimonial-hero">
        <div className="container testimonial-hero-inner">
          <h1 className="testimonial-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h1>
          <p className="testimonial-subtitle">
            Trusted by forward‑thinking organizations and individuals worldwide.
          </p>
        </div>
      </section>
      {/* Testimonials Grid */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <i className="bi bi-quote"></i>
              </div>
              <p className="testimonial-text">
                The offline APTE deployment was exactly what our government agency needed.
                Zero data leaves our premises, yet the insights are world-class.
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">DL</div>
                <div>
                  <h4>David</h4>
                  <p>IT Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}