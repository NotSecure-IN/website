// app/product/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APTE Engine',
  description:
    "APTE is the security testing engine behind NotSecure's automated VAPT platform — structured, evidence-driven, and built for modern teams.",
  alternates: {
    canonical: 'https://notsecure.in/product',
  },
};

export default function ProductPage() {
  return (
    <main className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container product-hero-inner">
          <div className="product-hero-text">
            <h1 className="product-hero-title">
              <span className="gradient-text">APTE</span>
            </h1>
            <p className="product-hero-subtitle">
              A new approach to automated security testing.
            </p>
            <p className="product-hero-subtitle" style={{ fontSize: '1.1rem' }}>
              APTE is the security testing engine behind NotSecure's automated VAPT platform —
              built to analyze applications, perform structured security testing, validate
              findings, and produce actionable results.
            </p>
            <div className="product-hero-buttons">
              <a
                href="https://dashboard.notsecure.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start Testing
              </a>
              <a href="/research" className="btn-secondary">
                Read Our Research
              </a>
            </div>
          </div>
          <div className="product-hero-visual">
            <div className="product-visual-circle"></div>
            <i className="bi bi-cpu product-visual-icon"></i>
          </div>
        </div>
      </section>

      {/* What APTE Is */}
      <section className="product-section problem-section">
        <div className="container">
          <h2 className="section-title">What APTE Is</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            APTE is a security testing framework designed to move beyond simple scanning.
            It follows a structured process that mirrors how security professionals approach
            testing — but automated and repeatable.
          </p>
        </div>
      </section>

      {/* Why a Structured Approach */}
      <section className="product-section features-product-section">
        <div className="container">
          <h2 className="section-title">Why Structured Security Testing</h2>
          <div className="features-product-grid">
            <div className="feature-product-card">
              <i className="bi bi-diagram-3"></i>
              <h3>Analysis Over Noise</h3>
              <p>APTE focuses on analysis, verification, and evidence to reduce false positives.</p>
            </div>
            <div className="feature-product-card">
              <i className="bi bi-check2-circle"></i>
              <h3>Traceable Findings</h3>
              <p>Every result is tied to a testing workflow, making it easier to understand and act on.</p>
            </div>
            <div className="feature-product-card">
              <i className="bi bi-arrow-repeat"></i>
              <h3>Repeatable</h3>
              <p>Run the same tests again after fixes to confirm issues are resolved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APTE Workflow */}
      <section className="product-section how-section">
        <div className="container">
          <h2 className="section-title">How APTE Works</h2>
          <div className="how-steps">
            <div className="how-step">
              <div className="how-step-number">1</div>
              <h3>Observe</h3>
              <p>Understand the application and its attack surface.</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">2</div>
              <h3>Analyze</h3>
              <p>Break down components and potential risk areas.</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">3</div>
              <h3>Test</h3>
              <p>Run targeted security experiments.</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">4</div>
              <h3>Verify</h3>
              <p>Confirm findings and eliminate false positives.</p>
            </div>
            <div className="how-step">
              <div className="how-step-number">5</div>
              <h3>Report</h3>
              <p>Produce clear, actionable results.</p>
            </div>
          </div>
          <p className="how-note">
            APTE is built for structured security testing — not just scanning.
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="product-section deployment-section">
        <div className="container">
          <h2 className="section-title">Key Capabilities</h2>
          <div className="deployment-grid">
            <div className="deployment-card">
              <i className="bi bi-search"></i>
              <h3>Structured Security Analysis</h3>
            </div>
            <div className="deployment-card">
              <i className="bi bi-check-circle"></i>
              <h3>Finding Verification</h3>
            </div>
            <div className="deployment-card">
              <i className="bi bi-link-45deg"></i>
              <h3>Attack Relationship / Chain Analysis</h3>
            </div>
            <div className="deployment-card">
              <i className="bi bi-file-earmark-text"></i>
              <h3>Evidence-Driven Results</h3>
            </div>
            <div className="deployment-card">
              <i className="bi bi-arrow-repeat"></i>
              <h3>Repeatable Testing</h3>
            </div>
            <div className="deployment-card">
              <i className="bi bi-robot"></i>
              <h3>Automated Security Testing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Delivery */}
      <section className="product-section deployment-section" style={{ background: '#fff' }}>
        <div className="container">
          <h2 className="section-title">SaaS Delivery</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem' }}>
            APTE is delivered through the NotSecure platform. No complex installations —
            just sign up, purchase credits, configure your test, and run.
          </p>
          <div className="how-steps" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
            <div className="how-step">
              <div className="how-step-number">1</div>
              <h3>Create Account</h3>
            </div>
            <div className="how-step">
              <div className="how-step-number">2</div>
              <h3>Purchase Credits</h3>
            </div>
            <div className="how-step">
              <div className="how-step-number">3</div>
              <h3>Configure Test</h3>
            </div>
            <div className="how-step">
              <div className="how-step-number">4</div>
              <h3>Run APTE</h3>
            </div>
            <div className="how-step">
              <div className="how-step-number">5</div>
              <h3>Review Findings</h3>
            </div>
            <div className="how-step">
              <div className="how-step-number">6</div>
              <h3>Test Again</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Private Deployment - Coming Soon */}
      <section className="product-section deployment-section">
        <div className="container">
          <h2 className="section-title">Private Deployment</h2>
          <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            Coming Soon
          </p>
          <p style={{ textAlign: 'center', color: '#64748b' }}>
            For organizations that require security testing within their own infrastructure.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="product-section product-cta">
        <div className="container">
          <h2>Ready to start testing?</h2>
          <a
            href="https://dashboard.notsecure.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start Testing
          </a>
        </div>
      </section>
    </main>
  );
}