import React from "react";
import { Link } from "react-router-dom";
import headerBgImage from "../assets/images/backgrounds/header-bg.jpg";
import pageHeaderShape from "../assets/images/shapes/page-header-s-1.png";

const Checkout = () => {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${headerBgImage})` }}
        ></div>
        <div className="container text-center">
          <img src={pageHeaderShape} alt="Checkout" className="page-header__shape" />
          <h2 className="page-header__title">Checkout</h2>
          <ul className="solinom-breadcrumb list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2">
              <span>Products</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="checkout-page py-5">
        <div className="container">
          <div className="alert alert-info text-center">
            Have a Coupon?{" "}
            <Link to="/login" className="text-primary">
              Click Here to Enter Your Code
            </Link>
          </div>
          <div className="row">
            {/* Billing Address */}
            <div className="col-lg-6 mb-4">
              <div className="border rounded p-4">
                <h2 className="text-center mb-4">Billing Details</h2>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company (optional)"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartment, Unit, etc (optional)"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip Code"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="col-lg-6 mb-4">
              <div className="border rounded p-4">
                <h2 className="text-center mb-4">Additional Information</h2>
                <form>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Write a Message"
                      rows="5"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border rounded p-4 mt-4">
            <h2 className="text-center mb-4">Your Order</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th className="text-end">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product Name</td>
                  <td className="text-end">$10.33</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td className="text-end">$10.33</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td className="text-end">$0.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="text-end">$20.00</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sameAsBilling"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="sameAsBilling">
                    Same as Billing Details
                  </label>
                </div>
              </div>
              <Link to="/order" className="btn btn-primary">
                Place Your Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
