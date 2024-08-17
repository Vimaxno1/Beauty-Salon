import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

import Navigation from '../../components/shared/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beauty Salon',
  description: "It's All About You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navigation />
          <section>
            <div>{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
