export default function Home() {
  return (
    <>
      <div id="beauty-main">
        <aside id="beauty-hero" className="js-fullheight">
          {/* <!-- Slider --> */}
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: `url('assets/images/slider/Slider1.jpg')`,
                }}
              >
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Everthing is possible with our salon!</h1>
                          <p>We make the best makeup in 515 West Ave Norwalk</p>
                          <div className="btn btn-contact">
                            <a href="#" target="_blank">
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: `url('assets/images/slider/Slider2.jpg')`,
                }}
              >
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Welcome to beauty Beauty Salon!</h1>
                          <p>Everthing is possible with our salon</p>
                          <div className="btn btn-contact">
                            <a href="#" target="_blank">
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: `url('assets/images/slider/Slider3.jpg')`,
                }}
              >
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Everthing is possible with our salon!</h1>
                          <p>
                            We make the best hairdressing in 515 West Ave
                            Norwalk
                          </p>
                          <div className="btn btn-contact">
                            <a href="#" target="_blank">
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        {/* <!-- Services --> */}
        <div className="beauty-home-services beauty-services">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="beauty-heading">Our Services</h2>
                <span className="heading-meta">
                  We offer a wide range of beauty services
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="/assets/images/services/01.jpg" alt="" />
                  </div>
                  <div className="con">
                    <a href="/services-page">
                      <h5>Makeup</h5>
                      <p>
                        <i className="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="/assets/images/services/02.jpg" alt="" />
                  </div>
                  <div className="con">
                    <a href="/services-page">
                      <h5>Hairdressing</h5>
                      <p>
                        <i className="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="/assets/images/services/03.jpg" alt="" />
                  </div>
                  <div className="con">
                    <a href="/services-page">
                      <h5>Barber</h5>
                      <p>
                        <i className="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="/assets/images/services/04.jpg" alt="" />
                  </div>
                  <div className="con">
                    <a href="/services-page">
                      <h5>Massage Theraphy</h5>
                      <p>
                        <i className="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="/assets/images/services/05.jpg" alt="" />
                  </div>
                  <div className="con">
                    <a href="/services-page">
                      <h5>Body Treatments</h5>
                      <p>
                        <i className="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="/assets/images/services/06.jpg" alt="" />
                  </div>
                  <div className="con">
                    <a href="/services-page">
                      <h5>Aromatherapy</h5>
                      <p>
                        <i className="ti-arrow-right"></i>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Blog --> */}
        <div className="beauty-home-blog">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="beauty-heading">Latest News</h2>
                <span className="heading-meta">
                  Read about latest health trends
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="blog-entry">
                  <a href="post.html" className="blog-img">
                    <img
                      src="/assets/images/blog/2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <a href="#">Makeup</a>
                    </span>
                    <h4>
                      <a href="/post">Top 5 Benefits of Body Polishing</a>
                    </h4>
                    <span className="text-right">
                      <a href="#">Dec 30, 2023</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-entry">
                  <a href="/post" className="blog-img">
                    <img
                      src="/assets/images/blog/1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <a href="#">Makeup</a>
                    </span>
                    <h4>
                      <a href="/post">Hair Accessories You Should Try</a>
                    </h4>
                    <span className="text-right">
                      <a href="#">Dec 29, 2023</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-entry">
                  <a href="/post" className="blog-img">
                    <img
                      src="/assets/images/blog/3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <a href="#">Barber</a>
                    </span>
                    <h4>
                      <a href="post.html">
                        Trending Hairstyles For Men in 2023
                      </a>
                    </h4>
                    <span className="text-right">
                      <a href="#">Dec 20, 2023</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="btn btn-contact">
                  <a href="/blog">All Blog Post</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testiominals --> */}
        <div
          className="beauty-testimonial testimonials bg-img bg-fixed"
          data-background="/assets/images/banner.jpg"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="section-head">
                  <h4>What our clients say about beauty</h4>
                  <p>
                    Quisque consectetur massa id ipsum soltudin ultrices.
                    Pellentesque the sceisque justo.
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="owl-carousel owl-theme">
                  <div className="item-box">
                    <span className="quote">
                      <img src="/assets/images/quot.png" alt="" />
                    </span>
                    <p>
                      Quality dapibus augue metus the nec feugiat erat hendrerit
                      nec. Duis ve ante the lemon sanleo.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="/assets/images/team/a.png" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Emma Brown</h6>
                        <span>Lawyer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-box">
                    <span className="quote">
                      <img src="/assets/images/quot.png" alt="" />
                    </span>
                    <p>
                      Quality dapibus augue metus the nec feugiat erat hendrerit
                      nec. Duis ve ante the lemon sanleo.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="/assets/images/team/b.png" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Jason White</h6>
                        <span>Model</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-box">
                    <span className="quote">
                      <img src="/assets/images/quot.png" alt="" />
                    </span>
                    <p>
                      Quality dapibus augue metus the nec feugiat erat hendrerit
                      nec. Duis ve ante the lemon sanleo.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="/assets/images/team/c.png" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Emily Smith</h6>
                        <span>Psychologist</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Brands --> */}
        <div className="beauty-brands brands">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="beauty-heading">Our Brands</h2>
                <span className="heading-meta">
                  We use only the high quality original products
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 owl-carousel owl-theme">
                <div className="brand-logo">
                  <a href="#">
                    <img src="/assets/images/brands/1.png" alt="" />
                  </a>
                </div>
                <div className="brand-logo">
                  <a href="#">
                    <img src="/assets/images/brands/2.png" alt="" />
                  </a>
                </div>
                <div className="brand-logo">
                  <a href="#">
                    <img src="/assets/images/brands/3.png" alt="" />
                  </a>
                </div>
                <div className="brand-logo">
                  <a href="#">
                    <img src="/assets/images/brands/4.png" alt="" />
                  </a>
                </div>
                <div className="brand-logo">
                  <a href="#">
                    <img src="/assets/images/brands/5.png" alt="" />
                  </a>
                </div>
                <div className="brand-logo">
                  <a href="#">
                    <img src="/assets/images/brands/6.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer --> */}
        <div id="beauty-footer2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="beauty-logo">
                  <a href="index.html">
                    <img src="/assets/images/logo.png" alt="" />
                  </a>
                  <h2 className="text-center">
                    Beauty Salon
                    <span>It's all About You</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-left">
                <div className="beauty-footer">
                  <p>beauty by Progress Victor. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
