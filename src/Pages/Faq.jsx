import React from 'react';
import headerBg from '../assets/images/backgrounds/header-bg.jpg';
import shapeImg from '../assets/images/shapes/page-header-s-1.png';
import sectionImg from '../assets/images/shapes/sec-title-s-1.png';
import faqImg from '../assets/images/resources/faqs-1-1.jpg';
import elementImg from '../assets/images/shapes/element.png';

const FAQPage = () => {
  return (
    <div className="page-wrapper">
      {/* Top Bar Three */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${headerBg})` }}
        ></div>
        <div className="container">
          <img
            src={shapeImg}
            alt="FAQS"
            className="page-header__shape"
          />
          <h2 className="page-header__title">FAQS</h2>
          <ul className="solinom-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>faqs</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-page">
        <div className="container">
          <div className="row gutter-y-40">
            <div className="col-lg-6">
              <div className="sec-title text-start">
                <img
                  src={sectionImg}
                  alt="Frequently Question"
                  className="sec-title__img"
                />
                <h6 className="sec-title__tagline bw-split-in-right">
                  Frequently Question
                </h6>
                <h3 className="sec-title__title bw-split-in-up">
                  Have Questions in <br /> Your Mind? Get the <br /> Answers Now
                </h3>
              </div>
              <div
                className="faq-page__accordion solinom-accrodion"
                data-grp-name="solinom-accrodion"
              >
                <Accordion
                  title="How to experience the magic of internet?"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered lisealteradution in some form by injected humour, or randomised piese words which don't look even slightly believable. If you are going There are many variations"
                />
                <Accordion
                  title="How to soft launch your business?"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered lisealteradution in some form by injected humour, or randomised piese words which don't look even slightly believable. If you are going There are many variations"
                  isActive
                />
                <Accordion
                  title="How to connect your phone with wifi?"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered lisealteradution in some form by injected humour, or randomised piese words which don't look even slightly believable. If you are going There are many variations"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-page__thumb">
                <div className="faq-page__thumb__item">
                  <img src={faqImg} alt="solinom image" />
                </div>
                <div className="faq-page__thumb__funfact">
                  <div className="faq-page__thumb__funfact__image">
                    <img src={elementImg} alt="fun fact" />
                  </div>
                  <div className="faq-page__thumb__funfact__item count-box">
                    <h2 className="faq-page__thumb__funfact__item__count">
                      <span className="count-text" data-stop="500" data-speed="1500"></span>
                      <span>K</span>
                      <span>+</span>
                    </h2>
                    <p className="faq-page__thumb__funfact__item__text">Satisfied User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <div className="faq-contact">
        <div className="container">
          <div className="faq-contact__inner">
            <ContactItem
              iconClass="icon-envelope"
              subtitle="Ask the Help Community Write Now!"
              contactText="needhelp@company.com"
              href="mailto:needhelp@company.com"
            />
            <ContactItem
              iconClass="icon-telephone"
              subtitle="Still have Questions? Call Now!"
              contactText="+92 3800 8060"
              href="tel:+92-3800-8060"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, content, isActive }) => (
  <div className={`accrodion ${isActive ? 'active' : ''}`}>
    <div className="accrodion-title">
      <h4 className="accrodion-title__text">
        {title}
        <span className="accrodion-title__icon"></span>
      </h4>
    </div>
    <div className="accrodion-content">
      <div className="inner">
        <p className="inner__text">{content}</p>
      </div>
    </div>
  </div>
);

const ContactItem = ({ iconClass, subtitle, contactText, href }) => (
  <div className="faq-contact__inner__item">
    <div className="faq-contact__inner__item__icon">
      <i className={iconClass}></i>
    </div>
    <div className="faq-contact__inner__item__content">
      <span className="faq-contact__inner__item__subtitle">{subtitle}</span>
      <div className="faq-contact__inner__item__contact">
        <a href={href}>{contactText}</a>
      </div>
    </div>
  </div>
);

export default FAQPage;
