import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// CSS IMPORT //
import '../../../public/css/globals.css';
import '../../../public/css/et-lineicons.css';
import '../../../public/css/flaticon.css';
import '../../../public/css/themify-icons.css';
import '../../../public/css/animate.css';
import '../../../public/css/bootstrap.css';
import '../../../public/css/flexslider.css';
import '../../../public/css/magnific-popup.css';

import Navigation from '../../components/shared/Navigation';
import Script from 'next/script';

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
        {/* <div className="preloader-bg"></div>
        <div id="preloader">
          <div id="preloader-status">
            <div className="preloader-position loader">
              {' '}
              <span></span>{' '}
            </div>
          </div>
        </div> */}
        <main>
          <Navigation />
          <section>
            <div>{children}</div>
          </section>
        </main>
        {/* <!-- Js --> */}
        <Script src="/js/jquery.min.js" strategy="afterInteractive"></Script>
        <Script
          src="/js/modernizr-2.6.2.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/js/jquery.easing.1.3.js"
          strategy="afterInteractive"
        ></Script>
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive"></Script>
        <Script
          src="/js/jquery.waypoints.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/js/jquery.flexslider-min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/js/sticky-kit.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/js/owl.carousel.min.js"
          strategy="afterInteractive"
        ></Script>
        <Script src="/js/main.js" strategy="afterInteractive"></Script>
      </body>
    </html>
  );
}
