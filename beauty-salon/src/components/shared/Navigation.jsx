'use client';
import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div id="beauty-page">
        <a href="#" class="js-beauty-nav-toggle beauty-nav-toggle">
          <i></i>
        </a>
        <aside id="beauty-aside">
          {/* <!-- Logo --> */}
          <div class="beauty-logo">
            <a href="/">
              <img src="/assets/images/logo1.png" alt="logo" />
            </a>
          </div>

          <nav id="beauty-main-menu">
            <ul>
              <li class="active">
                {sidebarLinks.map((link) => {
                  const isActive =
                    (pathname.includes(link.route) && link.route.length > 1) ||
                    pathname === link.route;

                  if (link.route === '/') link.route = `${link.route}`;
                  return (
                    <a
                      href={link.route}
                      key={link.label}
                      classNameName={`leftsidebar_link ${
                        isActive && 'bg-primary-500'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </li>
            </ul>
          </nav>

          {/* Info */}
          <div className="beauty-contact-info">
            <div className="feat-inner">
              {' '}
              <span className="icon et-clock"></span>
              <div className="feat-info">
                <h5>Mon-Fri: 08.00 - 19.00</h5>
                <h6>Sunday: Closed</h6>
              </div>
            </div>
          </div>
          <div className="beauty-contact-info">
            <div className="feat-inner">
              {' '}
              <span className="icon et-phone"></span>
              <div className="feat-info">
                <h5>+234 903-123-0606</h5>
                <h6>515 Woji, Port Harcourt Rivers </h6>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="beauty-footer">
            <ul>
              <li>
                <a href="#">
                  <i className="ti-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Navigation;
