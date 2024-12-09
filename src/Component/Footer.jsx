import React from "react";
import footerShape from "../assets/images/shapes/home-footer.png";
import '../assets/css/solinom.css';
import '../assets/css/solinom-custom-rtl.css';
import '../assets/css/solinom-rtl.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="main-footer custom-footer-margin">
      <div className="main-footer__top">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-6 col-lg-4 col-xl-5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div className="footer-widget footer-widget--about">
                <h2 className="footer-widget__title">About</h2>
                <p className="footer-widget__text">
                  There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration
                </p>
                <form action="#" className="footer-widget__newsletter mc-form">
                  <input type="text" name="EMAIL" placeholder="Email Address" />
                  <button type="submit" className="fas fa-paper-plane">
                    <span className="sr-only">submit</span>
                  </button>
                </form>
                <div className="mc-form__response"></div>
                <div className="footer-widget__social">
                  <a href="https://facebook.com/">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://pinterest.com/">
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                    <span className="sr-only">Pinterest</span>
                  </a>
                  <a href="https://youtube.com/">
                    <i className="fab fa-youtube" aria-hidden="true"></i>
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Links Section */}
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Links</h2>
                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <i className="fas fa-circle"></i>
                    <a href="room-details-3.html">Hotel Room</a>
                  </li>
                  <li>
                    <i className="fas fa-circle"></i>
                    <a href="faq.html">Privacy Policy</a>
                  </li>
                  <li>
                    <i className="fas fa-circle"></i>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <i className="fas fa-circle"></i>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact Section */}
            <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="700ms">
              <div className="footer-widget footer-widget--contact">
                <h2 className="footer-widget__title">Contact</h2>
                <ul className="list-unstyled footer-widget__info">
                  <li>
                    <div className="footer-widget__info__item">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <a className="footer-widget__info__text" href="https://www.google.com/maps">
                      6391 Elgin St. Celina, Delaware <br /> New York. USA
                    </a>
                  </li>
                  <li>
                    <div className="footer-widget__info__item">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <a className="footer-widget__info__text" href="tel:303-555-0105">
                      (303) 555-0105
                    </a>
                  </li>
                  <li>
                    <div className="footer-widget__info__item">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <a className="footer-widget__info__text" href="mailto:luxurystay@example.com">
                      luxurystay@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer__top__shape">
          <img src={footerShape} alt="Footer Shape" />
        </div>
      </div>
      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">
              &copy; Copyright <span className="dynamic-year"></span> by LuxuryStay Hospitality.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
