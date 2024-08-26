const page = () => {
  return (
    <>
      <div id="beauty-main">
        {/* <!-- Contact --> */}
        <div className="beauty-contact">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="beauty-heading">Contact Us</h2>
                <span className="heading-meta">
                  How to find our beauty salon
                </span>
              </div>
            </div>
            <div className="row">
              {/* <!-- Contact Info --> */}
              <div className="col-md-5 mb-30">
                <div className="beauty-contact-info2">
                  <div className="feat-inner2">
                    {' '}
                    <span className="icon et-phone"></span>
                    <div className="feat-info2">
                      <h5>Phone Text</h5>
                      <h6>+234 903-123-0606</h6>
                    </div>
                  </div>
                </div>
                <div className="beauty-contact-info2">
                  <div className="feat-inner2">
                    {' '}
                    <span className="icon et-map-pin"></span>
                    <div className="feat-info2">
                      <h5>Address</h5>
                      <h6>515 Woji, Port Harcourt Rivers</h6>
                    </div>
                  </div>
                </div>
                <div className="beauty-contact-info2">
                  <div className="feat-inner2">
                    {' '}
                    <span className="icon et-notebook"></span>
                    <div className="feat-info2">
                      <h5>E-Mail</h5>
                      <h6>info@beauty.com</h6>
                    </div>
                  </div>
                </div>
                <div className="beauty-contact-info2">
                  <div className="feat-inner2">
                    {' '}
                    <span className="icon et-clock"></span>
                    <div className="feat-info2">
                      <h5>Mon-Fri: 08.00 - 19.00</h5>
                      <h6>Sunday: Closed</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Contact Form --> */}
              <div className="col-md-7 mb-30">
                <form
                  method="post"
                  className="contact__form"
                  action="https://duruthemes.com/demo/html/betty/multipage/mail.php"
                >
                  {/* <!-- Form message --> */}
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-success contact__msg"
                        style={{ display: 'none' }}
                        role="alert"
                      >
                        Your message was sent successfully.
                      </div>
                    </div>
                  </div>
                  {/* <!-- Form elements --> */}
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        name="name"
                        type="text"
                        placeholder="Name *"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email *"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Number *"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject *"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Message *"
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <input name="submit" type="submit" value="Send Message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- Map Section--> */}
            <div className="map-section mt-5">
              <div className="row">
                <div className="col-md-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9698.644062941705!2d-73.41602323726926!3d41.11551512970224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e81c2ced482153%3A0xad3509ddda68a552!2s515%20West%20Ave%2C%20Norwalk%2C%20CT%2006850%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1645662886641!5m2!1str!2str&amp;zoom=9"
                    width="100%"
                    height="450"
                    style={{ border: '0' }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
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
                  </h2>{' '}
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
