import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    "Simple, credit-based pricing for NotSecure's automated VAPT platform. Pay only for what you use — no fixed plans.",
  alternates: {
    canonical: 'https://notsecure.in/pricing',
  },
};

export default function PricingPage() {
  return (
    <main className="pricing-page">
      {/* Pricing Hero */}
      <section className="pricing-hero">
        <div className="container pricing-hero-inner">
          <h1 className="pricing-title">
            Simple, <span className="gradient-text">Credit-Based</span> Pricing
          </h1>
          <p className="pricing-subtitle">
            No fixed plans. No hidden fees. Pay only for what you use — in credits.
          </p>
        </div>
      </section>

      {/* Pricing Explanation */}
      <section className="pricing-info">
        <div className="container pricing-info-inner">
          <div className="pricing-info-card">
            <div className="pricing-info-icon">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <h2>How It Works</h2>
            <p>
              Our pricing is based on <strong>credits</strong>, not token values.
              Each security assessment or API call consumes a certain number of credits
              depending on complexity and depth.
            </p>
            <p>
              For real-time pricing, credit balance, and plan management,
              please visit your dashboard — the single source of truth for all billing.
            </p>
            <a
              href="https://dashboard.notsecure.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary pricing-dashboard-btn"
            >
              Visit Dashboard <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

          <div className="pricing-features">
            <div className="pricing-feature-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>No monthly commitment</span>
            </div>
            <div className="pricing-feature-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Pay-as-you-go credits</span>
            </div>
            <div className="pricing-feature-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Transparent usage logs</span>
            </div>
            <div className="pricing-feature-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Volume discounts available</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}