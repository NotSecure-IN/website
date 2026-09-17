import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'NotSecure Privacy Policy - Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://notsecure.in/privacypolicy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <div className="container privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-effective">Effective Date: 30/03/2025</p>

        <p className="privacy-intro">
          At NotSecure, we are committed to protecting your privacy and ensuring the security of
          your personal information. This Privacy Policy outlines how we collect, use, store, and
          protect your data when you use our website, services, including the APTE Engine (via API,
          dashboard, or offline deployment), and any other interactions with NotSecure.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Personal Information</h3>
        <ul>
          <li>Name, email address, phone number, and company details (when you contact us or request services)</li>
          <li>Billing and payment details (when purchasing our services or credits)</li>
        </ul>

        <h3>1.2 Technical Information</h3>
        <ul>
          <li>IP address, browser type, operating system, and device details</li>
          <li>Cookies and tracking technologies to improve user experience</li>
          <li>Log files containing access details, timestamps, and service interactions</li>
        </ul>

        <h3>1.3 Security Testing & APTE Engine Usage</h3>
        <ul>
          <li>
            When you use APTE Engine (via API, dashboard, or offline), we may process data related
            to your IT infrastructure, applications, API requests, and identified vulnerabilities.
          </li>
          <li>
            <strong>Offline Mode:</strong> If you deploy APTE Engine on-premises or in an
            air‑gapped environment, <strong>no data leaves your infrastructure</strong>. NotSecure
            has no access to that data.
          </li>
          <li>
            <strong>Cloud/API Mode:</strong> If you use our cloud or API services, we may
            temporarily process your data to perform the security assessment. We do not store
            sensitive client data beyond the duration of the engagement unless required for
            compliance or as explicitly agreed.
          </li>
          <li>
            <strong>Dashboard:</strong> When you use dashboard.notsecure.in, we collect account
            information (email, password hash), usage logs, and billing details.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected data to:</p>
        <ul>
          <li>Provide, operate, and improve our cybersecurity services, including APTE Engine</li>
          <li>Respond to inquiries and communicate about our services</li>
          <li>Conduct security testing, risk assessments, and audits</li>
          <li>Maintain website functionality, performance, and analytics</li>
          <li>Process payments and manage credits/subscriptions</li>
          <li>Prevent fraud, security threats, or unauthorized access</li>
          <li>Comply with legal obligations and regulatory requirements</li>
        </ul>

        <h2>3. Cookies & Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to:</p>
        <ul>
          <li>Improve website functionality and user experience</li>
          <li>Analyze website traffic and user behavior</li>
          <li>Enable marketing and retargeting campaigns</li>
        </ul>
        <p>You can control cookie settings in your browser. Disabling cookies may affect some website functionalities.</p>

        <h2>4. How We Protect Your Information</h2>
        <h3>Security Measures:</h3>
        <p>
          We implement strong security measures, including encryption, firewalls, and access
          controls, to protect your data from unauthorized access, loss, or disclosure.
        </p>
        <h3>Data Retention:</h3>
        <ul>
          <li>We retain personal data only as long as necessary for business and legal purposes</li>
          <li>Security testing data is deleted upon project completion unless agreed otherwise</li>
          <li>API and dashboard logs may be retained for a limited period for audit and security purposes</li>
        </ul>

        <h2>5. How We Share Your Information</h2>
        <p>We do not sell, trade, or rent personal data. However, we may share data in the following cases:</p>
        <ul>
          <li>With trusted third-party service providers (e.g., payment processors, analytics tools) who assist in delivering our services</li>
          <li>When required by law (e.g., court orders, law enforcement requests)</li>
          <li>To protect our legal rights and prevent fraud or cyber threats</li>
        </ul>

        <h2>6. Third-Party Links & External Services</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for their
          privacy practices. Please review their policies before providing any personal data.
        </p>
        <p>
          APTE Engine may optionally integrate with third-party LLM services (e.g., DeepSeek API)
          if configured by you. In such cases, data sent to those services is subject to their
          respective privacy policies. We recommend using local/offline models for maximum privacy.
        </p>

        <h2>7. Your Rights & Choices</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal data</li>
          <li>Object to or restrict certain data processing activities</li>
          <li>Withdraw consent for marketing communications</li>
        </ul>
        <p>To exercise these rights, contact us at: support@notsecure.in</p>

        <h2>8. Compliance with Global Privacy Laws</h2>
        <p>We comply with major data protection laws, including:</p>
        <ul>
          <li>GDPR (General Data Protection Regulation) – Applicable to users in the EU</li>
          <li>CCPA (California Consumer Privacy Act) – Applicable to California residents</li>
          <li>IT Act, 2000 (India) – Governing cybersecurity and data privacy regulations</li>
        </ul>

        <h2>9. Children&apos;s Privacy</h2>
        <p>
          Our services are not intended for individuals under 18 years old. We do not knowingly
          collect data from minors.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy from time to time. The latest version will always be available
          on our website, with the effective date mentioned at the top.
        </p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or how we handle your data, contact us at:</p>
        <p>
          Email: <a href="mailto:support@notsecure.in" className="gradient-text">support@notsecure.in</a>
        </p>
      </div>
    </main>
  );
}