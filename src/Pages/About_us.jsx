import React, { useEffect } from 'react'; 
import '../assets/css/solinom.css';
import '../assets/css/solinom-custom-rtl.css';
import '../assets/css/solinom-rtl.css';
import headerBg from '../assets/images/backgrounds/header-bg.jpg';
import pageHeaderShape from '../assets/images/shapes/page-header-s-1.png';
import aboutImg1 from '../assets/images/about/about-1-1.jpg';
import aboutShape1 from '../assets/images/shapes/about-shape-1-1.png';
import aboutImgS1 from '../assets/images/about/about-s-1-1.png';
import aboutShape2 from '../assets/images/shapes/about-shape-1-2.png';
import secTitleImg from '../assets/images/shapes/sec-title-s-1.png';
import advantageBg1 from '../assets/images/resources/advantage-bg-1-1.png';
import advantageCardShape from '../assets/images/shapes/advantages-card-shape-1-1.png';
import reviewImage1 from '../assets/images/resources/review-1-1.jpg';
import reviewImage2 from '../assets/images/resources/review-1-2.jpg';
import reviewImage3 from '../assets/images/resources/review-1-3.jpg';
import testimonialsShape from '../assets/images/shapes/testimonials-1-1.png';
import testimonialsHoverShape from '../assets/images/shapes/testimonials-hover-1-1.png';
import aboutMan from '../assets/images/resources/about-man.png';
import advantageShape from '../assets/images/shapes/advantages-shape-1-1.png';


import { WOW  } from 'wowjs'; // Assuming you're using the wow.js library
import CountUp from 'react-countup'; 



import 'font-awesome/css/font-awesome.min.css';

const AboutUs = () => {
    useEffect(() => {
        const wow = new WOW({
          live: false, // Optional setting to disable live DOM changes
        });
        wow.init(); // Initialize WOW.js
      }, []);
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${headerBg})` }}
        ></div>
        <div className="container">
          <img
            src={pageHeaderShape}
            alt="About Us"
            className="page-header__shape"
          />
          <h2 className="page-header__title">About Us</h2>
          <ul className="solinom-breadcrumb list-unstyled">
            <li><a href="index.html">Home</a></li>
            <li><span>About</span></li>
          </ul>
        </div>
      </section>
      <div className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-one__thumb">
                <div className="about-one__thumb__item">
                  <img src={aboutImg1} alt="solinom about" />
                  <div className="about-one__thumb__item__element">
                    <img src={aboutShape1} alt="" />
                  </div>
                </div>
                <div className="about-one__thumb__line">
                  <span></span><span></span><span></span>
                </div>
                <div className="about-one__thumb__element">
                  <div className="about-one__thumb__shape">
                    <img src={aboutImgS1} alt="solinom image" />
                  </div>
                  <div className="about-one__thumb__shape-two">
                    <img src={aboutShape2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="sec-title text-start">
                  <img src={secTitleImg} alt="WELCOME TO HOTEL" className="sec-title__img" />
                  <h6 className="sec-title__tagline bw-split-in-right">WELCOME TO HOTEL</h6>
                  <h3 className="sec-title__title bw-split-in-up">The Best Hotel on the Beach Side</h3>
                </div>
                <p className="about-one__content__text">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                </p>
                <div className="about-one__feature">
                  <div className="about-one__feature__item">
                    <div className="about-one__feature__left">
                      <div className="about-one__feature__icon">
                        <i className="fa fa-calendar-check"></i>  {/* Correct Font Awesome Icon */}
                      </div>
                      <h4 className="about-one__feature__title">
                        <a href="room-details-2.html">Easy & Quick Booking</a>
                      </h4>
                    </div>
                    <p className="about-one__feature__text">Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                  <div className="about-one__feature__item">
                    <div className="about-one__feature__left">
                      <div className="about-one__feature__icon">
                        <i className="fa fa-bed"></i>  {/* Correct Font Awesome Icon */}
                      </div>
                      <h4 className="about-one__feature__title">
                        <a href="room-details-2.html">Best Room Selection</a>
                      </h4>
                    </div>
                    <p className="about-one__feature__text">Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                </div>
                <a href="about.html" className="about-one__btn solinom-btn solinom-btn--base">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FunFact Section */}
      <section className="funfact-one">
        <div className="container">
          <ul className="list-unstyled funfact-one__list">
            <li className="funfact-one__item count-box">
              <div className="funfact-one__icon">
              <i className="fa fa-couch"></i> {/* New Font Awesome Icon for Services */}
              </div>
              <div className="funfact-one__content">
                <h3 className="funfact-one__count">
                  <span className="funfact-one__count__item count-text" data-stop="420" data-speed="1500"></span>
                  <span>35</span>
                </h3>
                <p className="funfact-one__text">Luxury Rooms</p>
              </div>
            </li>
            <li className="funfact-one__item count-box">
              <div className="funfact-one__icon">
              <i className="fa fa-plane"></i> {/* New Font Awesome Icon for Ship */}
              </div>
              <div className="funfact-one__content">
                <h3 className="funfact-one__count">
                  <span className="funfact-one__count__item count-text" data-stop="860" data-speed="1500"></span>
                  <span>550</span>
                </h3>
                <p className="funfact-one__text">Guests Visits</p>
              </div>
            </li>
            <li className="funfact-one__item count-box">
              <div className="funfact-one__icon">
              <i className="fa fa-star"></i>  {/* New Font Awesome Icon for Animal-related Service */}
              </div>
              <div className="funfact-one__content">
                <h3 className="funfact-one__count">
                  <span className="funfact-one__count__item count-text" data-stop="390" data-speed="1500"></span>
                  <span>Rates</span>
                </h3>
                <p className="funfact-one__text">Five Star Ratings</p>
              </div>
            </li>
            <li className="funfact-one__item count-box">
              <div className="funfact-one__icon">
              <i className="fa fa-clock"></i>  {/* Represents Time/Hours */}
              </div>
              <div className="funfact-one__content">
                <h3 className="funfact-one__count">
                  <span className="funfact-one__count__item count-text" data-stop="6.30" data-speed="1500"></span>
                  <span>12.5</span>
                </h3>
                <p className="funfact-one__text">Year of Service</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="advantages-one ">
  <div className="advantages-one__bg " style={{ backgroundImage: `url(${advantageBg1})` }}></div>
  <div className="container ">
    <div className="row justify-content-center"> 
        .col-lg{/* Center content in the row */}
      <div className="col-lg-6 text-center"> {/* Make the section title centered */}
        <div className="sec-title text-start">
          <img src={secTitleImg} alt="OUR Advantages" className="sec-title__img" />
          <h6 className="sec-title__tagline bw-split-in-right">OUR Advantages</h6>
          <h3 className="sec-title__title bw-split-in-up">Hotel Amenities & Features</h3>
        </div>
      </div>
    </div>

    {/* Row for Advantages Items */}
    <div className="row gutter-y-20 gutter-x-20 ">
      <div className="col-md-6 col-lg-3">
        <div className="advantages-one__item">
          <div className="advantages-one__item__top">
            <div className="advantages-one__item__icon">
              <i className="icon-spa-1"></i>
            </div>
            <h4 className="advantages-one__item__title"><a href="room-details-2.html">Spa & <br /> Wellness</a></h4>
          </div>
          <p className="advantages-one__item__text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <div className="advantages-one__item__element">
            <img src={advantageCardShape} alt="Card shape" />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="advantages-one__item">
          <div className="advantages-one__item__top">
            <div className="advantages-one__item__icon">
              <i className="icon-fast-food-1"></i>
            </div>
            <h4 className="advantages-one__item__title"><a href="deluxe-room-details.html">Food & <br /> Beverages</a></h4>
          </div>
          <p className="advantages-one__item__text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <div className="advantages-one__item__element">
            <img src={advantageCardShape} alt="Card shape" />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="advantages-one__item">
          <div className="advantages-one__item__top">
            <div className="advantages-one__item__icon">
              <i className="icon-sun-umbrella-1"></i>
            </div>
            <h4 className="advantages-one__item__title"><a href="room-details-3.html">Beach <br /> Location</a></h4>
          </div>
          <p className="advantages-one__item__text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <div className="advantages-one__item__element">
            <img src={advantageCardShape} alt="Card shape" />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="advantages-one__item">
          <div className="advantages-one__item__top">
            <div className="advantages-one__item__icon">
              <i className="icon-wedding-1"></i>
            </div>
            <h4 className="advantages-one__item__title"><a href="room-details-3.html">Destination <br /> Wedding</a></h4>
          </div>
          <p className="advantages-one__item__text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <div className="advantages-one__item__element">
            <img src={advantageCardShape} alt="Card shape" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="advantages-one__element">
    <img src={advantageShape} alt="Shape element" />
  </div>
  <div className="advantages-one__man">
    <img src={aboutMan} alt="About man" />
  </div>
</section>


<div className="cta-one cta-one--one wow fadeInUp custom-cta-margin" data-wow-duration="1500ms" data-wow-delay="500ms">
<div className="container">
        <div className="cta-one__inner">
          <div className="cta-one__funfact">
            <div className="cta-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/cta-bg.jpg)' }}></div>
            <div className="cta-one__funfact__content count-box">
              <h3 className="cta-one__funfact__count">
                <span className="cta-one__funfact__count__item count-text">
                  <CountUp start={0} end={50} duration={1.5} />
                </span>
                <span>%</span>
              </h3>
              <p className="cta-one__funfact__text">Off</p>
            </div>
          </div>
          <div className="cta-one__content">
            <h4 className="cta-one__content__title">Check Our Exclusive Hotel Offer</h4>
            <div className="cta-one__content__btn">
              <a href="contact.html" className="solinom-btn solinom-btn--base">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>








    </>
  );
};

export default AboutUs;
