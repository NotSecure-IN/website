import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://notsecure.in'),
  title: {
    default: 'NotSecure | Automated VAPT & Cybersecurity Training',
    template: '%s | NotSecure',
  },
  description:
    'NotSecure is a cybersecurity technology company offering APTE-powered automated VAPT and practical cybersecurity training for organizations and academic institutions.',
  keywords: [
    'automated VAPT',
    'APTE',
    'cybersecurity',
    'penetration testing',
    'security testing',
    'vulnerability assessment',
    'NotSecure',
    'application security',
  ],
  authors: [{ name: 'NotSecure' }],
  creator: 'NotSecure',
  publisher: 'NotSecure',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://notsecure.in',
    siteName: 'NotSecure',
    title: 'NotSecure | Automated VAPT & Cybersecurity Training',
    description:
      'Security testing, built for the way you build. APTE-powered automated VAPT and practical cybersecurity training.',
    images: [
      {
        url: 'https://notsecure.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NotSecure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NotSecure | Automated VAPT & Cybersecurity Training',
    description: 'APTE-powered automated VAPT and practical cybersecurity training.',
    images: ['https://notsecure.in/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container top-bar-inner">
            <div className="contact-info">
              <a href="mailto:support@notsecure.in">
                <i className="bi bi-envelope"></i> support@notsecure.in
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/not-secure/" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/notsec/" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/notsecure_in/" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="main-navbar">
          <div className="container navbar-inner">
            <a href="/" className="brand">
              NOT SECURE
            </a>

            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <label htmlFor="nav-toggle" className="nav-toggle-label">
              <span></span>
            </label>

            <ul className="nav-list">
              <li><a href="/research" className="nav-link">Research</a></li>
              <li><a href="/product" className="nav-link">Product</a></li>
              <li><a href="/about" className="nav-link">About</a></li>
              <li><a href="/service" className="nav-link">Service</a></li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-col">
              <h5>Not Secure</h5>
              <p>
                We are a leading cybersecurity firm dedicated to protecting businesses
                from digital threats. Our comprehensive solutions safeguard your digital
                assets with cutting-edge technology and expert strategies.
              </p>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <div className="footer-links-row">
                <ul className="footer-links-col">
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/service">Services</a></li>
                  <li><a href="/testimonial">Testimonial</a></li>
                </ul>
                <ul className="footer-links-col">
                  <li><a href="/career">Career</a></li>
                  <li><a href="/pricing">Pricing</a></li>
                  <li><a href="/vdp">Vulnerability Disclosure</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-col">
              <h5>Contact Information</h5>
              <address>
                <strong>Not Secure</strong><br />
                <i className="bi bi-envelope"></i> support@notsecure.in
              </address>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/not-secure/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.facebook.com/notsec/" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/notsecure_in/" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="container footer-copyright">
            <p>&copy; 2025 Not Secure. All Rights Reserved.</p>
          </div>
        </footer>

        {/* Sub Footer */}
        <div className="sub-footer">
          <div className="container text-center">
            <p>
              &copy; 2025 Not Secure. All Rights Reserved |{' '}
              <a href="/privacypolicy">Privacy Policy</a> |{' '}
              <a href="/termscondition">Terms of Service</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}