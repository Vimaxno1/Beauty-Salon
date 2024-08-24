const page = () => {
  return (
    <>
      <div id="beauty-main">
        {/* <!-- About Us --> */}
        <div className="beauty-about">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="beauty-heading">About Us</h2>{' '}
                <span className="heading-meta">
                  Welcome bring the best service!
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {' '}
                <img
                  src="/assets/images/about.jpg"
                  className="img-fluid mb-30"
                  alt=""
                />{' '}
              </div>
              <div className="col-md-6">
                <p>
                  Phasellus tincidunt nunc vitae lectus rutrum, ac porttitor the
                  eleifend. Nunc rhoncus neque eget justo iaculis rhoncus. Etiam
                  pellentesque ex in mattis. Nulla facilisi. Curabitur iaculis
                  sapien et est vehicu aliquet aliquam neque elementum duis
                  posuere euismove.
                </p>
                <p>
                  Donec dapibus turpis ut orci auctor feugiat sed fermentum
                  felis. In ultricies, arcu et finibus ultricies, ex metus
                  egestas magna, ac efficitur ipsum eros sit amet nunc the
                  vivense.
                </p>
                <p>
                  Quality tincidunt nunc vitae lectus rutrum, ac porttitor the
                  eleifend. Nunc rhoncus neque eget justo iaculis rhoncus. Donec
                  dapibus turpis ut orci auctor feugiat sed fermentum felis. In
                  ultricies. Etiam pellentesque eximattis. Nulla facilisi
                  vurabitur iaculis alique.
                </p>
                <br />
                <h2 className="beauty-about-heading">
                  Betty White
                  <br />
                  <span>Salon Owner</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Our Team --> */}
        <div className="beauty-team team">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="beauty-heading">Our Team</h2>{' '}
                <span className="heading-meta">Choose best for you</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="item mb-30">
                  <div className="img">
                    {' '}
                    <img src="/assets/images/team/1.jpg" alt="" />{' '}
                  </div>
                  <div className="info valign">
                    <div className="full-width">
                      <h6>Emma White</h6>
                      <span>Makeup Specialist</span>
                      <p>
                        Phasellus tincidunt nunc vitae the lectus rutrum the
                        eliend.
                      </p>
                      <div className="social">
                        <div className="full-width">
                          <a href="#" className="icon">
                            {' '}
                            <i className="ti-pinterest"></i>{' '}
                          </a>
                          <a href="#" className="icon">
                            {' '}
                            <i className="ti-twitter"></i>{' '}
                          </a>
                          <a href="#" className="icon">
                            {' '}
                            <i className="ti-instagram"></i>{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item mb-30">
                  <div className="img">
                    {' '}
                    <img src="/assets/images/team/2.jpg" alt="" />{' '}
                  </div>
                  <div className="info valign">
                    <div className="full-width">
                      <h6>Arya Brown</h6>
                      <span>Body Treatments</span>
                      <p>
                        Phasellus tincidunt nunc vitae the lectus rutrum the
                        eliend.
                      </p>
                      <div className="social">
                        <div className="full-width">
                          <a href="#0" className="icon">
                            {' '}
                            <i className="ti-pinterest"></i>{' '}
                          </a>
                          <a href="#0" className="icon">
                            {' '}
                            <i className="ti-twitter"></i>{' '}
                          </a>
                          <a href="#0" className="icon">
                            {' '}
                            <i className="ti-instagram"></i>{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    {' '}
                    <span className="quote">
                      <img src="/assets/images/quot.png" alt="" />
                    </span>
                    <p>
                      Quality dapibus augue metus the nec feugiat erat hendrerit
                      nec. Duis ve ante the lemon sanleo.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        {' '}
                        <img src="/assets/images/team/a.png" alt="" />{' '}
                      </div>
                      <div className="cont">
                        <h6>Emma Brown</h6> <span>Lawyer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-box">
                    {' '}
                    <span className="quote">
                      <img src="/assets/images/quot.png" alt="" />
                    </span>
                    <p>
                      Quality dapibus augue metus the nec feugiat erat hendrerit
                      nec. Duis ve ante the lemon sanleo.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        {' '}
                        <img src="/assets/images/team/b.png" alt="" />{' '}
                      </div>
                      <div className="cont">
                        <h6>Jason White</h6> <span>Model</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-box">
                    {' '}
                    <span className="quote">
                      <img src="/assets/images/quot.png" alt="" />
                    </span>
                    <p>
                      Quality dapibus augue metus the nec feugiat erat hendrerit
                      nec. Duis ve ante the lemon sanleo.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        {' '}
                        <img src="/assets/images/team/c.png" alt="" />{' '}
                      </div>
                      <div className="cont">
                        <h6>Emily Smith</h6> <span>Psychologist</span>
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
                <h2 className="beauty-heading">Our Brands</h2>{' '}
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
                  <a href="/">
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
                  <p>Beauty Salon by Progress Victor. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
