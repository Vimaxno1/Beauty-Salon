const page = () => {
  return (
    <>
      <div id="beauty-main">
        {/* <!-- Blog --> */}
        <div className="beauty-blog">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="beauty-heading">Our News</h2>{' '}
                <span className="heading-meta">
                  Read about latest health trends
                </span>{' '}
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="blog-entry">
                  <a href="/post" className="blog-img">
                    <img
                      src="/assets/images/blog/2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="desc">
                    {' '}
                    <span>
                      <a href="#">Makeup | Dec 30, 2023</a>
                    </span>
                    <h3>
                      <a href="/post">Top 5 Benefits of Body Polishing</a>
                    </h3>
                    <p>
                      Quisque volutpat non nisl id tincidunt. Praesent at eros
                      vitae dui pulvinar ornare. Morbi mollis a enim nec
                      ullamcorper. Proin condimentum ut mauris ut placerat.
                      Donec commodo diam lorem, commodo viverra metus mollis
                      nec.
                    </p>
                  </div>
                </div>
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
                      <a href="#">Makeup | Dec 29, 2023</a>
                    </span>
                    <h3>
                      <a href="/post">Hair Accessories You Should Try</a>
                    </h3>
                    <p>
                      Quisque volutpat non nisl id tincidunt. Praesent at eros
                      vitae dui pulvinar ornare. Morbi mollis a enim nec
                      ullamcorper. Proin condimentum ut mauris ut placerat.
                      Donec commodo diam lorem, commodo viverra metus mollis
                      nec.
                    </p>
                  </div>
                </div>
                <div className="blog-entry">
                  <a href="/post" className="blog-img">
                    <img
                      src="/assets/images/blog/3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="desc">
                    {' '}
                    <span>
                      <a href="#">Barber | Dec 20, 2023</a>
                    </span>
                    <h3>
                      <a href="/post">Hairstyles For Men in 2023</a>
                    </h3>
                    <p>
                      Quisque volutpat non nisl id tincidunt. Praesent at eros
                      vitae dui pulvinar ornare. Morbi mollis a enim nec
                      ullamcorper. Proin condimentum ut mauris ut placerat.
                      Donec commodo diam lorem, commodo viverra metus mollis
                      nec.
                    </p>
                  </div>
                </div>
                <div className="blog-entry">
                  <a href="/post" className="blog-img">
                    <img
                      src="/assets/images/blog/4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="desc">
                    {' '}
                    <span>
                      <a href="#">Cosmetics | Dec 20, 2023</a>
                    </span>
                    <h3>
                      <a href="/post">Natural Face Masks At Home</a>
                    </h3>
                    <p>
                      Quisque volutpat non nisl id tincidunt. Praesent at eros
                      vitae dui pulvinar ornare. Morbi mollis a enim nec
                      ullamcorper. Proin condimentum ut mauris ut placerat.
                      Donec commodo diam lorem, commodo viverra metus mollis
                      nec.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {/* <!-- Pagination --> */}
                    <ul className="beauty-pagination-wrap text-center">
                      <li>
                        <a href="/blog">
                          <i className="ti-arrow-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/blog">1</a>
                      </li>
                      <li>
                        <a href="/blog" className="active">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="/blog">3</a>
                      </li>
                      <li>
                        <a href="/blog">
                          <i className="ti-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Sidebar --> */}
              <div className="col-md-4">
                <div className="beauty-sidebar-part">
                  <div className="beauty-sidebar-block beauty-sidebar-block-search">
                    <form className="beauty-sidebar-search-form" method="get">
                      <input
                        type="text"
                        name="name"
                        className="form-control search-field"
                        id="search"
                        placeholder="Search..."
                      />
                      <button
                        type="submit"
                        className="ti-arrow-right beauty-sidebar-search-submit"
                      ></button>
                    </form>
                  </div>
                  <div className="beauty-sidebar-block beauty-sidebar-block-categories">
                    <div className="beauty-sidebar-block-title">
                      {' '}
                      Categories{' '}
                    </div>
                    <div className="beauty-sidebar-block-content">
                      <ul className="ul1">
                        <li>
                          <a href="/blog">Barber</a>
                        </li>
                        <li>
                          <a href="/blog">Hairstyle</a>
                        </li>
                        <li>
                          <a href="/blog">Makeup</a>
                        </li>
                        <li>
                          <a href="/blog">Cosmetics</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="beauty-sidebar-block beauty-sidebar-block-latest-posts">
                    <div className="beauty-sidebar-block-title">
                      {' '}
                      Latest Posts{' '}
                    </div>
                    <div className="beauty-sidebar-block-content">
                      <div className="latest">
                        <a href="/post" className="clearfix">
                          <div className="txt1">
                            Top 5 Benefits of Body Polishing
                          </div>
                          <div className="txt2">Dec 30, 2023</div>
                        </a>
                      </div>
                      <div className="latest">
                        <a href="/post" className="clearfix">
                          <div className="txt1">
                            Hair Accessories You Should Try
                          </div>
                          <div className="txt2">Dec 29, 2023</div>
                        </a>
                      </div>
                      <div className="latest">
                        <a href="/post" className="clearfix">
                          <div className="txt1">Hairstyles For Men in 2023</div>
                          <div className="txt2">Dec 20, 2023</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="beauty-sidebar-block beauty-sidebar-block-tags">
                    <div className="beauty-sidebar-block-title"> Tags </div>
                    <div className="beauty-sidebar-block-content">
                      <ul className="tags clearfix">
                        <li>
                          <a href="/blog">Cosmetics</a>
                        </li>
                        <li>
                          <a href="/blog">Hair</a>
                        </li>
                        <li>
                          <a href="/blog">Massage</a>
                        </li>
                        <li>
                          <a href="/blog">Barber</a>
                        </li>
                        <li>
                          <a href="/blog">Body</a>
                        </li>
                        <li>
                          <a href="/blog">Theraphy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
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
