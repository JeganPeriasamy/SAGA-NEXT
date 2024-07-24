import React from "react";

const Footer = () => {
  return (
    <div className="foot py-3 container-fluid mt-4">
      <footer class=" text-center text-lg-start bg-body-tertiary text-muted">
        <section >
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
                <a class="text-uppercase fw-bold mb-4">
                  <img
                    src="https://www.zameensquare.com/_next/static/media/zameen-logo.be926326.png"
                    alt=""
                  ></img>
                </a>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control "
                    placeholder="Enter Your Email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <button type="button" class="btn btn-primary mx-2">
                    Subscribe
                  </button>
                </div>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 class="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Blogs
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Conatct Us
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset text-decoration-none">
                    Terms & Condition
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
                <h6 class="text-uppercase fw-bold mb-4">Top Localities</h6>
                <div className="row ">
                  <div className="col text-nowrap">
                    <p>Properites in New Delhi</p>
                    <p>Property in Banglore</p>
                    <p>Property in Hydrabad</p>
                  </div>
                  <div className="col text-nowrap">
                    <p>Property in Mumbai</p>
                    <p>Property in Ahmedabad</p>
                  </div>
                  <div className="col text-nowrap">
                    <p>Property in Chennai</p>
                    <p>Property in Gurgaon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>© 2024 All right reserved.</span>
          </div>

          <div>
            <a href="" class="me-4 ">
              <i class="bi bi-facebook "></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-instagram text-warning"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-twitter text-primary "></i>
            </a>

            <a href="" class="me-4 text-reset">
              <i class="bi bi-linkedin text-primary"></i>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;