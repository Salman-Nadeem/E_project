import React, { useState } from "react";
import logoLight from "../assets/images/logo-light.png";
import '../assets/css/solinom.css';
import '../assets/css/solinom-custom-rtl.css';
import '../assets/css/solinom-rtl.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MobileNav from './navbarScroll';  // Import MobileNav Component
import SearchPopup from './Searchpoup';  // Import SearchPopup Component

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="main-header main-header--two sticky-header fixed-top sticky-header--normal">
      <div className="container">
        <div className="main-header__inner">
          <div className="main-header__logo">
            <a href="/">
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="dropdown">
                  <a href="room-2.html">Room</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/room">Deluxe</a>
                    </li>
                    <li>
                      <a href="/">Standard</a>
                    </li>
                    <li>
                      <a href="/detail">Room Details</a>
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
                      <a href="/cart">Cart</a>
                    </li>
                    <li>
                      <a href="/checkout">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </nav>

            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main-header__right">
            <a href="room-2.html" className="solinom-btn main-header__btn">
              Book Room
            </a>

            <div className="main-header__info">
              <a href="cart" className="main-header__info__item">
                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                <span className="sr-only">Cart</span>
              </a>
              {/* Include Search Popup */}
              <SearchPopup />
            </div>
            {/* Mobile Nav Toggle Button */}
            <div
              className="mobile-nav__btn mobile-nav__toggler"
              onClick={toggleMobileNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* Render MobileNav Component */}
      {isMobileNavOpen && <MobileNav />}
    </header>
  );
}

export default Navbar;
