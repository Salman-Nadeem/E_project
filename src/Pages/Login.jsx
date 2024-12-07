import React from 'react';
import '../assets/css/solinom.css';
import '../assets/css/solinom-custom-rtl.css';
import '../assets/css/solinom-rtl.css';
import headerBg from '../assets/images/backgrounds/header-bg.jpg'; // Image import
import pageHeaderShape from '../assets/images/shapes/page-header-s-1.png'; // Image import

const LoginPage = () => {
  return (
    <div className="custom-cursor">
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <div className="page-wrapper">
        {/* Top Bar Three */}
        <section className="page-header">
          <div className="page-header__bg" style={{ backgroundImage: `url(${headerBg})` }}></div>
          <div className="container">
            <img src={pageHeaderShape} alt="Login" className="page-header__shape" />
            <h2 className="page-header__title">Login</h2>
            <ul className="solinom-breadcrumb list-unstyled">
              <li><a href="index.html">Home</a></li>
              <li><span>Login</span></li>
            </ul>
          </div>
        </section>

        {/* Login and Register Section */}
        <section className="login-page">
          <div className="container">
            <div className="login-page__info wow fadeInUp" data-wow-delay="500ms">
              <p className="login-page__info__item">
                We Have a Demo Account Setup. <span>Username:</span> <a href="login.html">Demo</a> and <span> Password:</span> <a href="login.html">Demo</a>
              </p>
            </div> {/* login-info */}

            <div className="login-page__inner">
              <div className="row gutter-x-94">
                {/* Login Form */}
                <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="300ms">
                  <div className="login-page__wrap">
                    <h3 className="login-page__wrap__title">Login</h3>
                    <form className="login-page__form">
                      <div className="login-page__form-input-box">
                        <input type="email" placeholder="User Name or Email Address*" />
                      </div>
                      <div className="login-page__form-input-box">
                        <input type="password" placeholder="Password*" />
                      </div>
                      <div className="login-page__checked-box">
                        <div className="login-page__checked-inner">
                          <input type="checkbox" name="save-data" id="save-data" />
                          <label htmlFor="save-data"><span></span>Remember Me?</label>
                        </div>
                        <div className="login-page__form-forgot-password">
                          <a href="login.html" className="login-page__form-forgot-password__item">Forget Password?</a>
                        </div>
                      </div>
                      <div className="login-page__form-btn-box">
                        <button type="submit" className="solinom-btn solinom-btn--base">Login</button>
                      </div>
                    </form>

                    <div className="form__border"></div>
                  </div> {/* login-form */}
                </div>

                {/* Register Form */}
                <div className="col-lg-6 wow fadeInUp animated" data-wow-delay="400ms">
                  <div className="login-page__wrap register-page__wrap">
                    <h3 className="login-page__wrap__title">Register</h3>
                    <form className="login-page__form">
                      {/* Name Field */}
                      <div className="login-page__form-input-box">
                        <input type="text" placeholder="Full Name*" className="form-input" />
                      </div>
                      {/* Email Field */}
                      <div className="login-page__form-input-box">
                        <input type="email" placeholder="Email Address*" />
                      </div>

                      {/* Password Field */}
                      <div className="login-page__form-input-box">
                        <input type="password" placeholder="Password*" />
                      </div>

                      {/* Roles Field */}
                      <div className="login-page__form-input-box">
                        <select>
                          <option value="" >Select Role</option>
                          <option value="admin">Admin</option>
                          <option value="user">User</option>
                          <option value="moderator">Moderator</option>
                        </select>
                      </div>

                      {/* Accept Privacy Policy */}
                      <div className="login-page__checked-box">
                        <input type="checkbox" name="accept-policy" id="accept-policy" />
                        <label htmlFor="accept-policy"><span></span>I Accept Company Privacy Policy.</label>
                      </div>

                      {/* Submit Button */}
                      <div className="login-page__form-btn-box">
                        <button type="submit" className="solinom-btn solinom-btn--base">Register</button>
                      </div>
                    </form>
                  </div> {/* register-form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
