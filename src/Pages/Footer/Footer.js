import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className="text-dark pt-3 mt-5 "
        style={{ backgroundColor: "	#7FFFD4" }}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 py-3 text-start">
            <div className="col">
              <h5>Quick Links</h5>
              <p>University</p>
              <p>Students</p>
              <p>Privacy & Policy</p>
              <p>Academy</p>
              <p>Contact Us</p>
            </div>
            <div className="col">
              <h5>CORPORATE</h5>
              <p>About Us</p>
              <p>Investors</p>
              <p>Careers</p>
              <p>Media</p>
              <p>Reach Us</p>
            </div>
            <div className="col">
              <h5>MORE FROM US</h5>
              <p>Programming-Academy</p>
              <p>Programming-Academy </p>
              <p> Accessories</p>
              <p>Terms & Condition</p>
              <p>Institutional Customer</p>
              <p>Courses Guide</p>
            </div>

            <div className="col">
              <img
                className="mb-3"
                width="100"
                height="50px"
                src="https://i.ibb.co/hC5rRzL/banner3.png "
                alt=""
              />
              <div className="fs-1">
                <h6>+18001021800</h6>
                <h6>contact@programming.co.in</h6>
                <FaFacebookSquare />
                <span className="mx-4">
                  <FaInstagramSquare />
                </span>
                <FaWhatsappSquare />
              </div>
              <p className="mt-3">
                Copyright &copy; 2021 | All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
