import React, { useState } from 'react';

const SearchPopup = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchPopup = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* Search Popup */}
      <div className={`search-popup ${isSearchOpen ? 'active' : ''}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={toggleSearchPopup}
        ></div>
        <div className="search-popup__content">
          <form role="search" method="get" className="search-popup__form" action="#">
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="solinom-btn solinom-btn--base">
              <span><i className="icon-search"></i></span>
            </button>
          </form>
        </div>
      </div>

      {/* Trigger button for the search popup */}
      <a href="#" className="search-toggler main-header__info__item" onClick={toggleSearchPopup}>
        <i className="fas fa-search" aria-hidden="true"></i>
        <span className="sr-only">Search</span>
      </a>
    </>
  );
};

export default SearchPopup;
