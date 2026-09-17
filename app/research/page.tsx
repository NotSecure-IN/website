import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Insights',
  description: 'In-depth technical whitepapers, security analyses, and cutting-edge findings from NotSecure.',
  alternates: {
    canonical: 'https://notsecure.in/research',
  },
};

import Link from 'next/link';

export default function ResearchPage() {
  return (
    <main className="research-page">
      <div className="container">
        <h1 className="research-title">Research & Insights</h1>
        <p className="research-subtitle">
          In-depth technical whitepapers, security analyses, and cutting-edge findings from our team.
        </p>

        <div className="research-grid">
          {/* Sample Blog Card */}
          <article className="research-card">
            <div className="research-card-badge">Whitepaper</div>
            <h2 className="research-card-title">
              <Link href="/research/whitepaper">
                Supply Chain Attack in Go Ecosystem: Direct RCE via a Malicious Dependency
              </Link>
            </h2>
            <p className="research-card-excerpt">
              How a single `go get` command can lead to full remote code execution through the Go `init()` function.
            </p>
            <div className="research-card-meta">
              <span><i className="bi bi-person"></i> Subhadeep Pramanik</span>
              <span><i className="bi bi-calendar"></i> August 2026</span>
            </div>
            <Link href="/research/whitepaper" className="btn-primary research-read-more">
              Read More
            </Link>
          </article>

          {/* Additional cards can be added here later */}
        </div>
      </div>
    </main>
  );
}