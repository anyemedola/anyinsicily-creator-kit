import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import { dmSans } from '@/lib/fonts';
import LemonCursor from '@/components/cursor/lemonCursor';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://anyinsicily.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Any in Sicily — UGC Creator in Sicily',
    template: '%s | Any in Sicily',
  },
  description: 'Brazilian UGC creator in Sicily making viral English-language Reels about Italian phrases, culture shock, travel, expat life and Mediterranean lifestyle.',
  keywords: [
    'Any in Sicily',
    'anyinsicily',
    'Sicily UGC creator',
    'Italian culture creator',
    'Brazilian creator in Italy',
    'Italy travel content creator',
    'Sicily travel creator',
    'UGC creator portfolio',
    'expat life Italy',
    'Instagram Reels creator',
  ],
  authors: [{ name: 'Any in Sicily', url: 'https://www.instagram.com/anyinsicily/' }],
  creator: 'Any in Sicily',
  publisher: 'Any in Sicily',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Any in Sicily',
    title: 'Any in Sicily — UGC Creator in Sicily',
    description: 'Viral Reels, UGC and brand content about Sicily, Italian phrases, culture shock, travel and expat life.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Any in Sicily — UGC Creator in Sicily',
    description: 'Brazilian creator in Sicily making viral English-language Reels about Italian culture, travel and expat life.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body
        style={{
          backgroundColor: '#FFF7FA',
          color: '#32131F',
          minHeight: '100vh',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: `
              radial-gradient(ellipse 800px 600px at 80% 10%, rgba(196,53,96,0.12) 0%, transparent 70%),
              radial-gradient(ellipse 600px 400px at 10% 80%, rgba(110,207,184,0.18) 0%, transparent 70%)
            `,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <LemonCursor />
        <ThemeRegistry>
          <Nav />
          <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
