import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <div className="main">
          <div className="footer">
            <div className="single-footer">
              <h3>Thank you for scrolling</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                dolorem sapiente corporis quo sint natus cupiditate nobis
                laudantium in odio!
              </p>
              <div className="footer-social">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>

            <div className="single-footer">
              <h4>Main Menu</h4>
              <ul>
                <li>
                  <a href="#">
                    <FaChevronRight /> Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Gallery
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Our commitment
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Our teachers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="single-footer">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">
                    <FaChevronRight /> Admission Form
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Our Vacancies
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Privacy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Quick Link
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> My Love
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Haha
                  </a>
                </li>
              </ul>
            </div>

            <div className="single-footer">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="#">
                    <FaChevronRight /> Bidur - 4 Battar Nuwakot
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Phone: 23456789
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Email: put gmail here
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Principal Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <p>&copy; 2024 all rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
