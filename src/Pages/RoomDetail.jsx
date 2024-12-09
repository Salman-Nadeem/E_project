import React from "react";
import roomHeaderBg from '../assets/images/backgrounds/header-bg.jpg'; // Background image
import pageHeaderShape from '../assets/images/shapes/page-header-s-1.png'; // Shape image
import room1_1 from '../assets/images/resources/room-slider-1-1.jpg'; // Room slider image 1
import room1_2 from '../assets/images/resources/room-slider-1-2.jpg'; // Room slider image 2
import roomImage1 from '../assets/images/room/room-1-1.jpg'; // Room 1 image
import roomImage2 from '../assets/images/room/room-1-2.jpg'; // Room 2 image
import roomImage3 from '../assets/images/room/room-1-3.jpg'; // Room 3 imageimport roomImg1 from "assets/images/room/room-s-2-1.jpg";
import roomImg1 from "../assets/images/room/room-s-2-1.jpg";
import roomImg2 from "../assets/images/room/room-s-2-2.jpg";

const RoomDetails = () => {
  return (
    <div>
      {/* Page Header Section */}
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: `url(${roomHeaderBg})` }}></div>
        <div className="container">
          <img src={pageHeaderShape} alt="Room Details" className="page-header__shape" />
          <h2 className="page-header__title">Room Details</h2>
          <ul className="solinom-breadcrumb list-unstyled">
            <li><a href="index.html">Home</a></li>
            <li><span>Room</span></li>
          </ul>
        </div>
      </section>

      {/* Room Details Section */}
      <section className="room-details-three wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='300ms'>
        <div className="container">
          <div className="row align-items-center gutter-y-30">
            <div className="col-lg-8">
              <h3 className="room-details-three__title"><a href="deluxe-room-details.html">Deluxe Room</a></h3>
              <div className="room-details-three__left">
                <div className="room-details-three__inner">
                  <div className="room-details-three__item">
                    <div className="room-details-three__icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="room-details-three__content">
                      <h5 className="room-details-three__content__title">8 Person</h5>
                      <span className="room-details-three__content__subtitle">Guests</span>
                    </div>
                  </div>
                  <div className="room-details-three__item">
                    <div className="room-details-three__icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="room-details-three__content">
                      <h5 className="room-details-three__content__title">3 days</h5>
                      <span className="room-details-three__content__subtitle">Duration</span>
                    </div>
                  </div>
                  <div className="room-details-three__item">
                    <div className="room-details-three__icon">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                    <div className="room-details-three__content">
                      <h5 className="room-details-three__content__title">460</h5>
                      <span className="room-details-three__content__subtitle">Guests</span>
                    </div>
                  </div>
                </div>
                <div className="room-details-three__social">
                  <a href="javascript:void(0)" className="room-details-three__social__item"><i className="fas fa-heart"></i></a>
                  <a href="javascript:void(0)" className="room-details-three__social__item"><i className="fas fa-share-alt"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="room-details-three__right">
                <div className="room-details-three__top">
                  <span className="night">Per Night</span>
                  <p className="room-details-three__top__number">$129.00</p>
                </div>
                <div className="room-details-three__bottom">
                  <span className="reviews">3 Reviews</span>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Thumbnail Images Section */}
      <div className="room-details-thumb">
        <div className="container">
          <div className="room-details-thumb__inner">
            <div className="room-details-thumb__item">
              <img src={room1_1} alt="Room 1" />
            </div>
            <div className="room-details-thumb__item">
              <img src={room1_2} alt="Room 2" />
            </div>
          </div>
        </div>
      </div>

      <div className="room-details">
        <div className="container">
          <div className="row gutter-y-30">
            {/* Room Overview */}
            <div className="col-lg-8">
              <div className="room-details__item">
                <div className="room-details__info">
                  <h3 className="room-details__title">Overview</h3>
                  <p className="room-details__text">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humor, or randomised words which don't look even slightly believable.
                  </p>
                </div>
              </div>
              {/* Advanced Facilities and Challenges Section */}
              <div className="room-details__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="room-details__feature-one">
                  <div className="row gutter-x-50 gutter-y-30">
                    <div className="col-md-6">
                      <h3 className="room-details__title">Advanced Facilities</h3>
                      <p className="room-details__text">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h3 className="room-details__title">Challenge</h3>
                      <p className="room-details__text">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Amenities Section */}
              <div className="room-details__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="room-details__amenities">
                  <h3 className="room-details__title">Amenities</h3>
                  <ul className="room-details__amenities__list list-unstyled">
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Conditioning</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Lawn</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> TV Cable</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Barbeque</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Microwave</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Washer</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Dryer</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Refrigerator</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> WiFi</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Gym</li>
                    <li className="room-details__amenities__item"><i className="fas fa-times-circle"></i> Sauna</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Window Coverings</li>
                    <li className="room-details__amenities__item"><i className="fas fa-times-circle"></i> Laundry Room</li>
                    <li className="room-details__amenities__item"><i className="fas fa-check-circle"></i> Smoke Detector</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Room Image Slider */}
            <div className="col-lg-4">
              <div className="room-details__image-slider">
                <div className="room-details__image-slider__inner">
                  <div className="room-details__image-slider__item">
                    <img src={roomImage1} alt="Room Image 1" />
                  </div>
                  <div className="room-details__image-slider__item">
                    <img src={roomImage2} alt="Room Image 2" />
                  </div>
                  <div className="room-details__image-slider__item">
                    <img src={roomImage3} alt="Room Image 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    <div className="room-details">
      {/* Review Section */}
      <div className="room-details__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
        <div className="room-details__review">
          <h3 className="room-details__title">Review Score</h3>
          <div className="room-details__review__star">
            {["Service", "Locations", "Amenities", "Prices", "Food"].map((item, index) => (
              <div className="room-details__review__item" key={index}>
                <span>{item}</span>
                <div className="room-details__review__star solinom-ratings">
                  {[...Array(5)].map((_, i) => (
                    <i className="far fa-star" data-value={i + 1} key={i}></i>
                  ))}
                  <input type="hidden" className="rating" />
                </div>
              </div>
            ))}
          </div>
          <form
            className="room-details__review__form contact-form-validated form-one wow fadeInUp"
            data-wow-duration="1500ms"
            action="https://pixydrops.com/solinom-html/inc/sendemail.php"
          >
            <div className="form-one__group">
              <div className="form-one__control">
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="form-one__control">
                <input type="email" name="email" placeholder="Email Address" />
              </div>
              <div className="form-one__control form-one__control--full">
                <textarea name="message" placeholder="Write a Message"></textarea>
              </div>
              <div className="form-one__control">
                <button type="submit" className="solinom-btn solinom-btn--base">
                  Submit Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="col-lg-4">
        <div className="room-details__sidebar">
          {/* Booking Form */}
          <div
            className="room-details__sidebar__item room-details__sidebar__item--three wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div className="room-details__sidebar__form">
              <div className="room-details__sidebar__top">
                <div className="room-details__sidebar__top__item">
                  <h4 className="room-details__sidebar__top__title">Book Room</h4>
                </div>
              </div>
              <div className="room-details__sidebar__content">
                <form
                  className="room-details__sidebar__form__inner contact-form-validated"
                  action="https://pixydrops.com/solinom-html/inc/sendemail.php"
                  noValidate
                >
                  <div className="room-details__sidebar__control">
                    <label htmlFor="checkin">From:</label>
                    <input className="solinom-datepicker" id="checkin" type="text" name="checkin" />
                    <i className="icon-calendar-6"></i>
                  </div>
                  <div className="room-details__sidebar__control">
                    <label htmlFor="checkout">To:</label>
                    <input className="solinom-datepicker" id="checkout" type="text" name="checkout" />
                    <i className="icon-calendar-6"></i>
                  </div>
                  <div className="room-details__sidebar__control">
                    <label htmlFor="guests">Guests</label>
                    <select name="guests" className="selectpicker" id="guests">
                      {[...Array(6)].map((_, i) => (
                        <option value={i} key={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="room-details__sidebar__control">
                    <label htmlFor="extras">Add Extra</label>
                    <ul className="room-details__sidebar__checkbox list-unstyled">
                      <li>
                        <input type="checkbox" name="select01" id="select01" />
                        <label htmlFor="select01">
                          Add service per booking<span>$30.00</span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name="select02" id="select02" />
                        <label htmlFor="select02">
                          Add service per person<span>$30.00</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="room-details__sidebar__total">Total:<span>$160.00</span></div>
                  <button type="submit" className="solinom-btn solinom-btn--base">
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>




    </div>
  );
};

export default RoomDetails;
