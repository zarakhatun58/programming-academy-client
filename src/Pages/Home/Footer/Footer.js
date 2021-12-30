import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-white pt-5 footer-section">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 py-3 text-start">
            <div className="col">
              <img className="mb-3" width="100" src="" alt="" />
              {/* <div className="fs-1">
                <FaFacebookSquare />
                <span className="mx-4">
                  <FaInstagramSquare />
                </span>
                <FaWhatsappSquare />
              </div> */}
              <p className="mt-3">
                Copyright &copy; 2019 | All Rights Reserved.
              </p>
            </div>
            <div className="col">
              <h5>Quick Links</h5>
              <p>Home</p>
              <p>Term</p>
              <p>Privacy & Policy</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
            <div className="col">
              <h5>About Us</h5>
              <p>Our Story</p>
              <p>Courses Blog & Tips</p>
              <p>Working With Us</p>
              <p>Courses Information</p>
              <p>Be Our Partner</p>
            </div>
            <div className="col">
              <h5>Quick Links</h5>
              <p>Support</p>
              <p>Customer Support</p>
              <p>Privacy & Policy</p>
              <p>Terms & Condition</p>
              <p>Forum</p>
              <p>Courses Guide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
