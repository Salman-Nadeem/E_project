import React from "react";
import logoLight from "../assets/images/logo-light.png";
import '../assets/css/solinom.css';
import '../assets/css/solinom-custom-rtl.css';
import '../assets/css/solinom-rtl.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  return (
    <header className="main-header main-header--two sticky-header sticky-header--normal">
      <div className="container">
        <div className="main-header__inner">
          <div className="main-header__logo">
            <a href="index.html">
              <img
                src={logoLight}
                alt="Solinom HTML"
                width="110"
                height="90"
              />
            </a>
          </div>
          <div className="main-header__middle">
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li className="dropdown">
                  <a href="room-2.html">Room</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/">Deluxe</a>
                    </li>
                    <li>
                      <a href="/">Standard</a>
                    </li>
                    <li>
                      <a href="room-details-3.html">Room Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="gallery-grid.html">Gallery</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="404.html">404 Error</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="faq.html">FAQs</a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
              </ul>
            </nav>

            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main-header__right">
            <a href="room-2.html" className="solinom-btn main-header__btn">
              Book Room
            </a>

            <div className="main-header__info">
              <a href="cart.html" className="main-header__info__item">
                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                <span className="sr-only">Cart</span>
              </a>
              <a href="#" className="search-toggler main-header__info__item">
                <i className="fas fa-search" aria-hidden="true"></i>
                <span className="sr-only">Search</span>
              </a>
            </div>
            <div className="mobile-nav__btn mobile-nav__toggler">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
