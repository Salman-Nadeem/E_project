import React from "react";
import { Link } from "react-router-dom";

// Import images
import headerBgImage from "../assets/images/backgrounds/header-bg.jpg";
import pageHeaderShape from "../assets/images/shapes/page-header-s-1.png";
import secTitleImg from "../assets/images/shapes/sec-title-s-1.png";
import featureBg1 from "../assets/images/room/feature-1-1.jpg";
import room1 from "../assets/images/room/room-1-1.jpg";
import room2 from "../assets/images/room/room-1-2.jpg";
import room3 from "../assets/images/room/room-1-3.jpg";
import frame1 from "../assets/images/shapes/frame-1-1.png";
import frame2 from "../assets/images/shapes/frame-1-2.png";
import frame3 from "../assets/images/shapes/frame-1-3.png";
import frame4 from "../assets/images/shapes/frame-1-4.png";
import room1_1 from '../assets/images/room/room-1-1.jpg';
import room1_2 from '../assets/images/room/room-1-2.jpg';
import room1_3 from '../assets/images/room/room-1-3.jpg';
import roomL_1_1 from '../assets/images/room/room-l-1-1.jpg';
import roomL_1_2 from '../assets/images/room/room-l-1-2.jpg';
import roomL_1_3 from '../assets/images/room/room-l-1-3.jpg';
import roomShape from '../assets/images/shapes/room-1-1.png';
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome

const Room = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: `url(${headerBgImage})` }}></div>
        <div className="container">
          <img src={pageHeaderShape} alt="Room Grid" className="page-header__shape" />
          <h2 className="page-header__title">Room Grid</h2>
          <ul className="solinom-breadcrumb list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li><span>Room</span></li>
          </ul>
        </div>
      </section>
      <section className="feature-two">
        <div className="container">
          <div className="sec-title text-center">
            <img src={secTitleImg} alt="Discover our All" className="sec-title__img" />
            <h6 className="sec-title__tagline bw-split-in-right">Discover our All</h6>
            <h3 className="sec-title__title bw-split-in-up">Featured Amenities</h3>
          </div>
          <div className="row gutter-y-30">
            {/* Feature 1 */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="feature-two__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="feature-two__item__bg" style={{ backgroundImage: `url(${featureBg1})` }}></div>
                <div className="feature-two__item__icon">
                  <i className="fa fa-car"></i> {/* FontAwesome Car Icon */}
                </div>
                <div className="feature-two__item__content">
                  <h3 className="feature-two__item__title">Free Parking</h3>
                  <p className="feature-two__item__text">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                  </p>
                  <Link to="room-details-2.html" className="solinom-btn solinom-btn--base">
                    Read More
                  </Link>
                </div>
                <div className="feature-two__item__element">
                  <img src={frame1} alt="" />
                </div>
                <div className="feature-two__item__element-two">
                  <img src={frame2} alt="" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div className="feature-two__item feature-two__item--two">
                <div className="feature-two__item__bg" style={{ backgroundImage: `url(${room1})` }}></div>
                <div className="feature-two__item__content">
                  <h3 className="feature-two__item__title">Wifi Internet</h3>
                  <p className="feature-two__item__text">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                  </p>
                  <Link to="room-details-3.html" className="solinom-btn solinom-btn--base">
                    Read More
                  </Link>
                </div>
                <div className="feature-two__item__icon">
                  <i className="fa fa-wifi"></i> {/* FontAwesome Wifi Icon */}
                </div>
                <div className="feature-two__item__element-three">
                  <img src={frame3} alt="" />
                </div>
                <div className="feature-two__item__element-fore">
                  <img src={frame4} alt="" />
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div className="feature-two__item">
                <div className="feature-two__item__bg" style={{ backgroundImage: `url(${room2})` }}></div>
                <div className="feature-two__item__icon">
                  <i className="fa fa-headphones"></i> {/* FontAwesome Headphones Icon */}
                </div>
                <div className="feature-two__item__content">
                  <h3 className="feature-two__item__title">24/7 Support</h3>
                  <p className="feature-two__item__text">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                  </p>
                  <Link to="room-details-2.html" className="solinom-btn solinom-btn--base">
                    Read More
                  </Link>
                </div>
                <div className="feature-two__item__element">
                  <img src={frame1} alt="" />
                </div>
                <div className="feature-two__item__element-two">
                  <img src={frame2} alt="" />
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div className="feature-two__item feature-two__item--two">
                <div className="feature-two__item__bg" style={{ backgroundImage: `url(${room3})` }}></div>
                <div className="feature-two__item__content">
                  <h3 className="feature-two__item__title">Daily Breakfast</h3>
                  <p className="feature-two__item__text">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                  </p>
                  <Link to="room-details-3.html" className="solinom-btn solinom-btn--base">
                    Read More
                  </Link>
                </div>
                <div className="feature-two__item__icon">
                  <i className="fa fa-coffee"></i> {/* FontAwesome Coffee Icon */}
                </div>
                <div className="feature-two__item__element-three">
                  <img src={frame3} alt="" />
                </div>
                <div className="feature-two__item__element-fore">
                  <img src={frame4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="room-two-page">
      <div className="container">
        <div className="row gutter-y-30">
          {/* Room 1 */}
          <div className="col-md-4 col-sm-6">
            <div className="room-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="room-card__thumb">
                <img src={room1_1} alt="Deluxe Room" />
                <p className="room-card__feature">Featured</p>
                <div className="room-card__love">
                  <i className="icon-Heart"></i>
                </div>
              </div>
              <div className="room-card__top">
                <div className="room-card__top__inner">
                  <div className="room-card__top__popup">
                    <a href="https://www.youtube.com/watch?v=4jnzf1yj48M" className="room-card__top__popup__item video-popup">
                      <i className="icon-video-camera-1-1"></i>
                    </a>
                    <a className="room-card__top__popup__item room-list-card-popup" href="#" data-gallery-options='{
                      "items": [
                          {"src": roomL_1_1},
                          {"src": roomL_1_2},
                          {"src": roomL_1_3}
                      ],
                      "gallery": { "enabled": true },
                      "type": "image"
                    }'>
                      <span className="icon-photo-camera-1"></span>
                    </a>
                  </div>
                  <div className="room-card__top__price">
                    <span className="room-card__top__price__content">$120</span>
                    <p className="room-card__top__price__text">Night</p>
                  </div>
                </div>
              </div>
              <div className="room-card__content">
                <h4 className="room-card__content__title"><a href="room-details-3.html">Deluxe Room</a></h4>
                <p className="room-card__content__text">There are many variations of passages of Lorem Ipsum available</p>
                <div className="room-card__content__star">
                  <div className="room-card__content__star__item">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <p className="room-card__content__star__parson">Person: <strong>08</strong></p>
                </div>
                <a href="blog-details-left.html" className="room-card__content__btn solinom-btn">Book Now</a>
                <div className="room-card__content__element">
                  <img src={roomShape} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Room 2 */}
          <div className="col-md-4 col-sm-6">
            <div className="room-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="room-card__thumb">
                <img src={room1_2} alt="Triple Room" />
                <p className="room-card__feature">Featured</p>
                <div className="room-card__love">
                  <i className="icon-Heart"></i>
                </div>
              </div>
              <div className="room-card__top">
                <div className="room-card__top__inner">
                  <div className="room-card__top__popup">
                    <a href="https://www.youtube.com/watch?v=4jnzf1yj48M" className="room-card__top__popup__item video-popup">
                      <i className="icon-video-camera-1-1"></i>
                    </a>
                    <a className="room-card__top__popup__item room-list-card-popup" href="#" data-gallery-options='{
                      "items": [
                          {"src": roomL_1_1},
                          {"src": roomL_1_2},
                          {"src": roomL_1_3}
                      ],
                      "gallery": { "enabled": true },
                      "type": "image"
                    }'>
                      <span className="icon-photo-camera-1"></span>
                    </a>
                  </div>
                  <div className="room-card__top__price">
                    <span className="room-card__top__price__content">$130</span>
                    <p className="room-card__top__price__text">Night</p>
                  </div>
                </div>
              </div>
              <div className="room-card__content">
                <h4 className="room-card__content__title"><a href="room-details-3.html">Triple Room</a></h4>
                <p className="room-card__content__text">There are many variations of passages of Lorem Ipsum available</p>
                <div className="room-card__content__star">
                  <div className="room-card__content__star__item">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <p className="room-card__content__star__parson">Person: <strong>08</strong></p>
                </div>
                <a href="blog-details-left.html" className="room-card__content__btn solinom-btn">Book Now</a>
                <div className="room-card__content__element">
                  <img src={roomShape} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Room 3 */}
          <div className="col-md-4 col-sm-6">
            <div className="room-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <div className="room-card__thumb">
                <img src={room1_3} alt="Master Suite Room" />
                <p className="room-card__feature">Featured</p>
                <div className="room-card__love">
                  <i className="icon-Heart"></i>
                </div>
              </div>
              <div className="room-card__top">
                <div className="room-card__top__inner">
                  <div className="room-card__top__popup">
                    <a href="https://www.youtube.com/watch?v=4jnzf1yj48M" className="room-card__top__popup__item video-popup">
                      <i className="icon-video-camera-1-1"></i>
                    </a>
                    <a className="room-card__top__popup__item room-list-card-popup" href="#" data-gallery-options='{
                      "items": [
                          {"src": roomL_1_1},
                          {"src": roomL_1_2},
                          {"src": roomL_1_3}
                      ],
                      "gallery": { "enabled": true },
                      "type": "image"
                    }'>
                      <span className="icon-photo-camera-1"></span>
                    </a>
                  </div>
                  <div className="room-card__top__price">
                    <span className="room-card__top__price__content">$140</span>
                    <p className="room-card__top__price__text">Night</p>
                  </div>
                </div>
              </div>
              <div className="room-card__content">
                <h4 className="room-card__content__title"><a href="room-details-3.html">Master Suite Room</a></h4>
                <p className="room-card__content__text">There are many variations of passages of Lorem Ipsum available</p>
                <div className="room-card__content__star">
                  <div className="room-card__content__star__item">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <p className="room-card__content__star__parson">Person: <strong>10</strong></p>
                </div>
                <a href="blog-details-left.html" className="room-card__content__btn solinom-btn">Book Now</a>
                <div className="room-card__content__element">
                  <img src={roomShape} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    



    </div>
  );
};

export default Room;
