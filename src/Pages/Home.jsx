import React from 'react';
import '../assets/css/solinom.css';
import '../assets/css/solinom-custom-rtl.css';
import '../assets/css/solinom-rtl.css';

// Import images
import heroShape1 from '../assets/images/shapes/hero-shape-1-2.png';
import heroShape2 from '../assets/images/shapes/hero-shape-1-1.png';
import sliderImage1 from '../assets/images/backgrounds/slider-1-1.jpg';
import sliderImage2 from '../assets/images/backgrounds/slider-1-1.jpg';
import secTitleShape from '../assets/images/shapes/sec-title-s-1.png';
import shaperIcon from '../assets/images/shapes/shaper-2-1.png';
import frameF1 from '../assets/images/shapes/frame-f-1-2.png';
import frameF2 from '../assets/images/shapes/frame-f-1-1.png';
import featureShape from '../assets/images/shapes/feature-3-1.png';
import aboutThumb from '../assets/images/about/about-2-1.jpg';
import aboutSmallThumb from '../assets/images/about/about-s-2-1.jpg';
import aboutBg1 from '../assets/images/about/about-s-bg-1-1.jpg';
import aboutBg2 from '../assets/images/about/about-s-bg-1-2.jpg';
import room1Img from '../assets/images/room/room-1-1.jpg';
import room2Img from '../assets/images/room/room-1-2.jpg';
import room3Img from '../assets/images/room/room-1-6.jpg';
import secTitleImg from '../assets/images/shapes/sec-title-s-1.png';
import roomElementImg from '../assets/images/shapes/room-1-1.png';
import roomImageLarge1 from "../assets/images/room/room-l-1-1.jpg";
import roomImageLarge2 from "../assets/images/room/room-l-1-2.jpg";
import roomImageLarge3 from "../assets/images/room/room-l-1-3.jpg";
import ctaBgImage from '../assets/images/backgrounds/cta-bg-1-1.jpg';
import ctaShape1 from '../assets/images/shapes/cta-shape-1-3.png';
import ctaShape2 from '../assets/images/shapes/cta-shape-1-2.png';
import testimonialBg from '../assets/images/shapes/testimonials-2-1.png';
import testiImg1 from '../assets/images/resources/testi-1-1.jpg';
import testiImg2 from '../assets/images/resources/testi-1-2.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';





// Import OwlCarousel and its CSS
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import 'wowjs/css/libs/animate.css'; // Make sure to import the necessary CSS for WOW.js animations
import { WOW } from 'wowjs'; // Assuming you're using the wow.js library
const ClientCarouselItem = ({ imageSrc, hoverImageSrc }) => (
    <div className="client-carousel__one__item">
      <img className="client-carousel__one__image" src={imageSrc} alt="solinom" />
      <img className="client-carousel__one__hover-image" src={hoverImageSrc} alt="solinom" />
    </div>
  );
  
  // Component for the carousel
  const ClientCarousel = () => (
    <div className="client-carousel__two solinom-owl__carousel owl-theme owl-carousel" data-owl-options='{
      "items": 5,
      "margin": 55,
      "smartSpeed": 700,
      "loop": true,
      "autoplay": 6000,
      "nav": false,
      "dots": false,
      "responsive": {
        "0": {
          "items": 1,
          "margin": 0
        },
        "360": {
          "items": 2,
          "margin": 0
        },
        "575": {
          "items": 3,
          "margin": 30
        },
        "768": {
          "items": 3,
          "margin": 40
        },
        "992": {
          "items": 4,
          "margin": 40
        },
        "1200": {
          "items": 5
        }
      }
    }'>
      {Array.from({ length: 9 }).map((_, index) => (
        <ClientCarouselItem
          key={index}
          imageSrc="assets/images/brand/brand-2-1.png"
          hoverImageSrc="assets/images/brand/brand-hover-2-1.png"
        />
      ))}
    </div>
  );
const Home = ({ icon, count, text, imageSrc}) => {
  return (
    <>
    <section className="main-slider-two">
      {/* Main Slider Start */}
      <section className="main-slider-one">
        <div className="main-slider-one__element-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="700ms">
          <img src={heroShape1} alt="solinom element" />
        </div>
        <div className="main-slider-one__element-two wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="700ms">
          <img src={heroShape2} alt="solinom element" />
        </div>
        <div className="container">
          <OwlCarousel
            className="main-slider-one__carousel solinom-owl__carousel"
            items={1}
            loop
            autoplay
            autoplayTimeout={7000}
            smartSpeed={1000}
            nav={false}
            dots={false}
            margin={0}
            animateOut="fadeOut"
            animateIn="fadeIn"
          >
            {/* Slider Item 1 */}
            <div className="main-slider-one__item">
              <div className="main-slider-one__bg" style={{ backgroundImage: `url(${sliderImage1})` }}></div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="main-slider-one__content">
                    <h5 className="main-slider-one__sub-title">The best 5 star hotel</h5>
                    <div className="main-slider-one__box">
                      <h2 className="main-slider-one__title">
                        enjoy Luxury <br /> <span>experience</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider Item 2 */}
            <div className="main-slider-one__item">
              <div className="main-slider-one__bg" style={{ backgroundImage: `url(${sliderImage2})` }}></div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="main-slider-one__content">
                    <h5 className="main-slider-one__sub-title">The best 5 star hotel</h5>
                    <div className="main-slider-one__box">
                      <h2 className="main-slider-one__title">
                        enjoy Luxury <br /> <span>experience</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider Item 3 */}
            <div className="main-slider-one__item">
              <div className="main-slider-one__bg" style={{ backgroundImage: `url(${sliderImage1})` }}></div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="main-slider-one__content">
                    <h5 className="main-slider-one__sub-title">The best 5 star hotel</h5>
                    <div className="main-slider-one__box">
                      <h2 className="main-slider-one__title">
                        enjoy Luxury <br /> <span>experience</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* Main Slider End */}

      {/* Banner Form */}
      <div className="banner-form">
        <div className="banner-form__position wow fadeInUp" data-wow-delay="300ms">
          <div className="container">
            <form className="banner-form__wrapper" action="#">
              <div className="row align-items-center">
                {/* Rest of your form */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>


    
    <section className="feature-three">
      <div className="container">
        <div className="sec-title text-center sec-title--two">
          <img src={secTitleShape} alt="Discover our All" className="sec-title__img" />
          <h6 className="sec-title__tagline bw-split-in-right">Discover our All</h6>
          <h3 className="sec-title__title bw-split-in-up">Featured Amenities</h3>
        </div>
        <div className="row gutter-y-30">
          {/* Feature Item 1 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="feature-three__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div className="feature-three__item__icon">
                <i className="icon-car-1"></i>
                <div className="feature-three__item__icon__element">
                  <img src={shaperIcon} alt="Free Parking" />
                </div>
              </div>
              <h4 className="feature-three__item__title">
                <a href="room-details-2.html">Free parking</a>
              </h4>
              <p className="feature-three__item__text">It is a long established fact that a reader will be distracted by the readable.</p>
              <a href="deluxe-room-details.html" className="solinom-btn">Read More <i className="icon-right-arrow-long"></i></a>
              <div className="feature-three__item__element-top">
                <img src={frameF1} alt="frame" />
              </div>
              <div className="feature-three__item__element-bottom">
                <img src={frameF2} alt="frame" />
              </div>
              <div className="feature-three__item__element-hover">
                <img src={featureShape} alt="hover feature" />
              </div>
            </div>
          </div>

          {/* Feature Item 2 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="feature-three__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
              <div className="feature-three__item__icon">
                <i className="icon-wifi-1"></i> {/* Wifi icon */}
                <div className="feature-three__item__icon__element">
                  <img src={shaperIcon} alt="Wifi Internet" />
                </div>
              </div>
              <h4 className="feature-three__item__title">
                <a href="room-details-3.html">Wifi Internet</a>
              </h4>
              <p className="feature-three__item__text">Enjoy high-speed internet throughout the property.</p>
              <a href="deluxe-room-details.html" className="solinom-btn">Read More <i className="icon-right-arrow-long"></i></a>
              <div className="feature-three__item__element-top">
                <img src={frameF1} alt="frame" />
              </div>
              <div className="feature-three__item__element-bottom">
                <img src={frameF2} alt="frame" />
              </div>
              <div className="feature-three__item__element-hover">
                <img src={featureShape} alt="hover feature" />
              </div>
            </div>
          </div>
{/* Feature Item 3 */}
<div className="col-xl-3 col-lg-4 col-md-6">
  <div className="feature-three__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="700ms">
    <div className="feature-three__item__icon">
      {/* Customer Service Icon (Updated to Font Awesome) */}
      <i className="fas fa-headset"></i> {/* Font Awesome customer service icon */}
      <div className="feature-three__item__icon__element">
        <img src={shaperIcon} alt="24/7 Support" />
      </div>
    </div>
    <h4 className="feature-three__item__title">
      <a href="room-details-3.html">24/7 Support</a>
    </h4>
    <p className="feature-three__item__text">We are available round the clock for all your needs.</p>
    <a href="deluxe-room-details.html" className="solinom-btn">Read More <i className="icon-right-arrow-long"></i></a>
    <div className="feature-three__item__element-top">
      <img src={frameF1} alt="frame" />
    </div>
    <div className="feature-three__item__element-bottom">
      <img src={frameF2} alt="frame" />
    </div>
    <div className="feature-three__item__element-hover">
      <img src={featureShape} alt="hover feature" />
    </div>
  </div>
</div>


          {/* Feature Item 4 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="feature-three__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
              <div className="feature-three__item__icon">
                <i className="icon-butter-1"></i> {/* Breakfast icon */}
                <div className="feature-three__item__icon__element">
                  <img src={shaperIcon} alt="Daily Breakfast" />
                </div>
              </div>
              <h4 className="feature-three__item__title">
                <a href="room-details-3.html">Daily Breakfast</a>
              </h4>
              <p className="feature-three__item__text">Enjoy delicious breakfast every morning.</p>
              <a href="deluxe-room-details.html" className="solinom-btn">Read More <i className="icon-right-arrow-long"></i></a>
              <div className="feature-three__item__element-top">
                <img src={frameF1} alt="frame" />
              </div>
              <div className="feature-three__item__element-bottom">
                <img src={frameF2} alt="frame" />
              </div>
              <div className="feature-three__item__element-hover">
                <img src={featureShape} alt="hover feature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="about-two">
      <div className="about-two__bg" style={{ backgroundImage: `url(${aboutBg1})` }}></div>
      <div className="container">
        <div className="row align-items-center gutter-y-40">
          <div className="col-lg-6">
            <div className="about-two__thumb wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div className="about-two__thumb__item">
                <img src={aboutThumb} alt="solinom image" />
              </div>
              <div className="about-two__thumb__small">
                <img src={aboutSmallThumb} alt="solinom image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-two__content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div className="sec-title text-start sec-title--two">
                <img src={secTitleShape} alt="WELCOME TO HOTEL" className="sec-title__img" />
                <h6 className="sec-title__tagline bw-split-in-right">WELCOME TO HOTEL</h6>
                <h3 className="sec-title__title bw-split-in-up">Get to Know <br /> Our Luxury Hotels</h3>
              </div>
              <p className="about-two__top__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <div className="about-two__feature">
                <div className="row gutter-x-20 gutter-y-30">
                  <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12">
                    <div className="about-two__feature__item">
                      <div className="about-two__feature__bg" style={{ backgroundImage: `url(${aboutBg1})` }}></div>
                      <div className="about-two__feature__icon">
                        <i className="icon-door-lock-1"></i>
                      </div>
                      <h5 className="about-two__feature__title">Suite Smart Key</h5>
                      <p className="about-two__feature__text">It is a long established fact that a reader will be</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12">
                    <div className="about-two__feature__item">
                      <div className="about-two__feature__bg" style={{ backgroundImage: `url(${aboutBg2})` }}></div>
                      <div className="about-two__feature__icon">
                        <i className="icon-luggage-2"></i>
                      </div>
                      <h5 className="about-two__feature__title">Luggage Deposited</h5>
                      <p className="about-two__feature__text">It is a long established fact that a reader will be</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="about.html" className="solinom-btn solinom-btn--base">Discover More</a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div>
      {/* CTA Section */}
      <div className="cta-three">
        <div className="cta-three__bg" style={{ backgroundImage: `url(${ctaBgImage})` }}></div>
        <div className="container">
          <div className="cta-three__inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="700ms">
            <div className="cta-three__left">
              <h3 className="cta-three__title">Grave the Best Offer Now</h3>
              <a href="contact.html" className="solinom-btn">book now</a>
            </div>
            <div className="cta-three__right">
              <div className="cta-three__funfact count-box">
                <span className="cta-three__funfact__top">Up to</span>
                <h2 className="cta-three__funfact__text">
                  <span className="count-text" data-stop="50" data-speed="1500"></span>
                  <span>10%</span>
                </h2>
                <span className="cta-three__funfact__top">offer</span>
                <div className="cta-three__funfact__element">
                  <img src={ctaShape1} alt="CTA shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-three__shape">
          <img src={ctaShape2} alt="CTA shape" />
        </div>
      </div>

      <div className="testimonials-two">
      <div className="container">
        <div className="sec-title text-center sec-title--two">
          <img src={secTitleImg} alt="Testimonial" className="sec-title__img" />
          <h6 className="sec-title__tagline bw-split-in-right">Testimonial</h6>
          <h3 className="sec-title__title bw-split-in-up">What They're Saying</h3>
        </div>

        <OwlCarousel
          className="testimonials-two__carousel solinom-owl__carousel owl-carousel owl-theme solinom-owl__carousel--with-shadow"
          items={1}
          margin={0}
          loop
          smartSpeed={700}
          nav={false}
          dots={false}
          autoplay
          responsive={{
            0: { items: 1 },
            768: { items: 2, margin: 30 },
            992: { items: 2, center: false, margin: 30 },
            1199: { items: 2, margin: 30 }
          }}
        >
          {/* Testimonial 1 */}
          <div className="item">
            <div className="testimonials-two__item">
              <div className="testimonials-two__item__inner">
                <div className="testimonials-two__item__bg-item">
                  <div className="testimonials-two__item__bg" style={{ backgroundImage: `url(${testimonialBg})` }}></div>
                </div>
                <div className="testimonials-two__thumb">
                  <img src={testiImg1} alt="solinom image" />
                  <div className="testimonials-two__thumb__quite">
                    <i className="icon-comma"></i>
                  </div>
                </div>
                <div className="testimonials-two__item__star">
                  <i className="icon-star1"></i>
                  <i className="icon-star1"></i>
                  <i className="icon-star1"></i>
                  <i className="icon-star1"></i>
                  <i className="icon-star1"></i>
                </div>
                <p className="testimonials-two__item__text">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="testimonials-two__item__author">
                  <h5 className="testimonials-two__item__author__title">Robert Jhon</h5>
                  <span className="testimonials-two__item__author__text">Guest</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="item">
            <div className="testimonials-two__item">
              <div className="testimonials-two__item__inner">
                <div className="testimonials-two__item__bg-item">
                  <div className="testimonials-two__item__bg" style={{ backgroundImage: `url(${testimonialBg})` }}></div>
                </div>
                <div className="testimonials-two__thumb">
                  <img src={testiImg2} alt="solinom image" />
                  <div className="testimonials-two__thumb__quite">
                    <i className="icon-comma"></i>
                  </div>
                </div>
                <div className="testimonials-two__item__star">
                  <i className="icon-star1"></i>
                  <i className="icon-star1"></i>
                  <i className="icon-star1"></i>
                  <i className="icon-star1"></i>
                  <i className="icon-star1"></i>
                </div>
                <p className="testimonials-two__item__text">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="testimonials-two__item__author">
                  <h5 className="testimonials-two__item__author__title">Michal Smith</h5>
                  <span className="testimonials-two__item__author__text">Guest</span>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
    </div>










</>
  );
};

export default Home;
