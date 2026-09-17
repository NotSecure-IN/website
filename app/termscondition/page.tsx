import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'NotSecure Terms of Service - Terms governing your use of our website and cybersecurity services.',
  alternates: {
    canonical: 'https://notsecure.in/termscondition',
  },
};

export default function TermsConditionPage() {
  return (
    <main className="terms-page">
      <div className="container terms-container">
        <h1 className="terms-title">Terms of Service</h1>
        <p className="terms-effective">Effective Date: 30/03/2025</p>

        <p className="terms-intro">
          Welcome to NotSecure. These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of our website, services, and cybersecurity solutions — including APTE Engine
          (via API, dashboard.notsecure.in, or offline deployment). By using our website and
          services, you agree to these Terms. If you do not agree, please do not use our services.
        </p>

        <h2>1. Definitions</h2>
        <div className="terms-definitions">
          <div className="terms-def-item">
            <h3>&quot;Company&quot;</h3>
            <p>Refers to NotSecure, its subsidiaries, affiliates, and employees.</p>
          </div>
          <div className="terms-def-item">
            <h3>&quot;User&quot;</h3>
            <p>Refers to anyone accessing or using our website or services.</p>
          </div>
          <div className="terms-def-item">
            <h3>&quot;Services&quot;</h3>
            <p>
              Refer to penetration testing, vulnerability assessments, security audits, APTE Engine
              (including its API, dashboard, and offline versions), security awareness training,
              and any other cybersecurity solutions offered by NotSecure.
            </p>
          </div>
          <div className="terms-def-item">
            <h3>&quot;Website&quot;</h3>
            <p>Refers to notsecure.in and any related subdomains, including dashboard.notsecure.in.</p>
          </div>
        </div>

        <h2>2. Eligibility &amp; Acceptable Use</h2>
        <p>You may only use our services if:</p>
        <ul className="terms-list terms-check">
          <li><i className="bi bi-check-circle-fill"></i> You are 18 years or older and legally capable of entering into contracts</li>
          <li><i className="bi bi-check-circle-fill"></i> You agree to use our services only for lawful and ethical purposes</li>
          <li><i className="bi bi-check-circle-fill"></i> You do not use our services for malicious hacking, cybercrime, or unauthorized access to systems</li>
          <li><i className="bi bi-check-circle-fill"></i> You do not attempt to disrupt, interfere with, or exploit vulnerabilities in our website or infrastructure</li>
        </ul>
        <p>We reserve the right to suspend or terminate your access if you violate these Terms.</p>

        <h2>3. Description of Services</h2>
        <p>NotSecure provides cybersecurity services, including:</p>
        <ul className="terms-list">
          <li><strong>Penetration Testing:</strong> Web, Network, Mobile, Cloud, API, IoT</li>
          <li><strong>Vulnerability Assessment &amp; Risk Audits</strong></li>
          <li><strong>APTE Engine:</strong> Autonomous vulnerability detection via API, dashboard, or on-premises offline deployment</li>
          <li><strong>Security Awareness Training:</strong> For corporate employees, students, and teachers</li>
          <li><strong>Security Consulting &amp; Advisory Services</strong></li>
        </ul>
        <p className="terms-notice">
          <i className="bi bi-exclamation-circle"></i> All engagements require explicit written
          authorization from the client before security assessments are conducted.
        </p>

        <h2>4. Payment Terms</h2>
        <ul className="terms-list">
          <li>Service fees must be paid in full before the engagement starts unless otherwise agreed</li>
          <li>APTE Engine usage is billed via credits purchased through dashboard.notsecure.in</li>
          <li>No refunds will be issued once a cybersecurity assessment has begun</li>
          <li>Unused credits remain valid according to the terms specified at the time of purchase</li>
          <li>Late payments may result in service suspension until payment is received</li>
        </ul>

        <h2>5. Confidentiality &amp; Data Protection</h2>
        <ul className="terms-list">
          <li>We treat all client information, security findings, and reports as confidential</li>
          <li>Security reports and assessments will only be shared with authorized personnel</li>
          <li>We do not store sensitive client data beyond the project duration unless explicitly required for compliance</li>
          <li>APTE Engine offline mode ensures zero data leaves your infrastructure</li>
          <li>Our services comply with GDPR, CCPA, and India&apos;s IT Act, 2000 for data privacy and protection</li>
        </ul>
        <p>For more details, see our <a href="/privacypolicy" className="gradient-text">Privacy Policy</a>.</p>

        <h2>6. Intellectual Property</h2>
        <ul className="terms-list">
          <li>All website content, security reports, research, APTE Engine technology, and trademarks are owned by NotSecure and protected under copyright laws</li>
          <li>Clients receive a limited, non-transferable license to use security reports for internal use only</li>
          <li>You may not modify, distribute, reverse engineer, or sell our intellectual property without written permission</li>
          <li>APTE Engine is proprietary technology — you may not copy, decompile, or create derivative works</li>
        </ul>

        <h2>7. Limitations of Liability</h2>
        <div className="terms-warning">
          <p><i className="bi bi-exclamation-triangle-fill"></i> NotSecure is not liable for:</p>
          <ul className="terms-list">
            <li>Any cyberattacks, data breaches, system failures, or financial losses occurring before, during, or after our assessments</li>
            <li>Third-party actions, vulnerabilities, or security flaws beyond our control</li>
            <li>Losses due to client misconfigurations, non-compliance, or failure to implement recommendations</li>
          </ul>
          <p>Our maximum liability is limited to the amount paid for the specific service provided.</p>
        </div>

        <h2>8. Indemnification</h2>
        <p>You agree to indemnify and hold NotSecure harmless from any claims, damages, or liabilities arising from:</p>
        <ul className="terms-list">
          <li>Your misuse of our services or reports</li>
          <li>Unauthorized disclosure of security reports leading to reputational or financial damage</li>
          <li>Any legal or regulatory violations due to non-compliance on your part</li>
        </ul>

        <h2>9. Termination &amp; Suspension</h2>
        <p>We reserve the right to suspend or terminate your access to our services if:</p>
        <ul className="terms-list">
          <li>You violate these Terms</li>
          <li>You engage in fraudulent, illegal, or unethical activity</li>
          <li>You fail to make payments for our services</li>
        </ul>
        <p>Upon termination, you must destroy any security reports, findings, or proprietary materials shared with you.</p>

        <h2>10. Compliance with Laws</h2>
        <p>
          You agree to comply with all applicable cybersecurity, data protection, and ethical
          hacking laws, including but not limited to:
        </p>
        <ul className="terms-list">
          <li>General Data Protection Regulation (GDPR) – If handling EU data</li>
          <li>California Consumer Privacy Act (CCPA) – If handling California residents&apos; data</li>
          <li>India&apos;s Information Technology Act, 2000 – Governing cybersecurity in India</li>
          <li>Computer Fraud and Abuse Act (CFAA, USA) – Preventing unauthorized access</li>
        </ul>
        <p className="terms-notice">
          <i className="bi bi-exclamation-circle"></i> Clients must provide legal authorization
          before penetration tests or security audits begin.
        </p>

        <h2>11. Force Majeure</h2>
        <p>
          NotSecure is not liable for any delays or failures in service due to events beyond our
          control, including:
        </p>
        <ul className="terms-list">
          <li>Cyberattacks, server outages, or internet failures</li>
          <li>Natural disasters, war, government restrictions, or pandemics</li>
        </ul>

        <h2>12. Dispute Resolution</h2>
        <ul className="terms-list">
          <li><strong>Governing Law:</strong> These Terms are governed by the laws of India</li>
          <li>
            <strong>Dispute Resolution:</strong> Any disputes shall first attempt to be resolved
            through negotiation. If unresolved, disputes shall be settled in a court of Kolkata, India.
          </li>
        </ul>

        <h2>13. Changes to Terms of Service</h2>
        <p>
          We may update these Terms of Service from time to time. Changes will be posted on this
          page, and the Effective Date will be updated. If you continue to use our website or
          services after changes are made, it constitutes acceptance of the new Terms.
        </p>

        <h2>14. Contact Information</h2>
        <p>If you have questions about these Terms, please contact us:</p>
        <div className="terms-contact">
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto:support@notsecure.in" className="gradient-text">
            support@notsecure.in
          </a>
        </div>
      </div>
    </main>
  );
}