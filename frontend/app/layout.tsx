import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { dmSans } from '@/lib/fonts';
import { LangProvider } from '@/lib/i18n/LangContext';

export const metadata: Metadata = {
  title: 'Any in Sicily — Creator Kit',
  description: 'UGC Creator Portfolio — Brazilian content creator based in Sicily',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body
        style={{
          backgroundColor: '#FBF5F0',
          color: '#2C2420',
          minHeight: '100vh',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        {/* Ambient gradient overlay */}
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: `
              radial-gradient(ellipse 800px 600px at 80% 10%, rgba(232,160,160,0.18) 0%, transparent 70%),
              radial-gradient(ellipse 600px 400px at 10% 80%, rgba(201,169,110,0.12) 0%, transparent 70%)
            `,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <ThemeRegistry>
          <LangProvider>
            <Nav />
            <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
