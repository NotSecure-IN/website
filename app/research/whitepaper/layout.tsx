import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Whitepaper: Go Supply Chain RCE',
  description:
    'In-depth research on supply chain attack in Go ecosystem leading to RCE via malicious dependency.',
  alternates: {
    canonical: 'https://notsecure.in/research/whitepaper',
  },
};

export default function WhitepaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}