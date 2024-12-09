import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import images correctly
import headerBgImage from "../assets/images/backgrounds/header-bg.jpg";
import productImage1 from "../assets/images/products/cart-1-1.jpg";
import productImage2 from "../assets/images/products/cart-1-2.jpg";
import pageHeaderShape from "../assets/images/shapes/page-header-s-1.png";

 // If needed

const Cart = () => {
  // State for item quantity
  const [quantities, setQuantities] = useState([1, 1]);
  const handleQuantityChange = (index, type) => {
    const newQuantities = [...quantities];
    if (type === "increase") {
      newQuantities[index] += 1;
    } else if (type === "decrease" && newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  const products = [
    { name: "Office Chair", price: 10.99, imgSrc: productImage1 },
    { name: "Round Chair", price: 10.99, imgSrc: productImage2 }
  ];

  // Calculate subtotal, shipping, and total
  const subtotal = products.reduce((acc, product, index) => acc + product.price * quantities[index], 0);
  const shipping = 0; // Static value, modify as needed
  const total = subtotal + shipping;

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
  <div className="page-header__bg" style={{ backgroundImage: `url(${headerBgImage})`, width: '100%' }}></div>
  <div className="container" style={{ width: '100%' }}>
    <img src={pageHeaderShape} alt="Room Grid" className="page-header__shape" />
    <h2 className="page-header__title">Room Grid</h2>
    <ul className="solinom-breadcrumb list-unstyled">
      <li><Link to="/">Home</Link></li>
      <li><span>Room</span></li>
    </ul>
  </div>
</section>


      {/* Cart Section */}
      <section className="cart-page">
        <div className="container">
          <div className="table-responsive">
            <table className="table cart-page__table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <div className="cart-page__table__meta">
                        <div className="cart-page__table__meta-img">
                          <img src={product.imgSrc} alt={product.name} />
                        </div>
                        <h3 className="cart-page__table__meta-title">
                          <Link to="product-details.html">{product.name}</Link>
                        </h3>
                      </div>
                    </td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      <div className="product-details__quantity">
                        <div className="quantity-box">
                          <button type="button" className="sub" onClick={() => handleQuantityChange(index, "decrease")}>
                            <i className="fa fa-minus"></i>
                          </button>
                          <input type="text" value={quantities[index]} readOnly />
                          <button type="button" className="add" onClick={() => handleQuantityChange(index, "increase")}>
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>${(product.price * quantities[index]).toFixed(2)}</td>
                    <td>
                      <Link to="cart.html" className="table cart-page__table__remove">
                        <span className="fa fa-times"></span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Coupon Form */}
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <form action="#" className="cart-page__coupone-form">
                <input type="text" placeholder="Enter coupon code" className="cart-cupon__input" />
                <button type="submit" className="solinom-btn solinom-btn--base">Apply Coupon</button>
              </form>
            </div>

            {/* Cart Total */}
            <div className="col-xl-4 col-lg-5">
              <ul className="cart-page__cart-total list-unstyled">
                <li><span>Subtotal</span><span className="cart-page__cart-total-amount">${subtotal.toFixed(2)}</span></li>
                <li><span>Shipping</span><span className="cart-page__cart-total-amount">${shipping.toFixed(2)}</span></li>
                <li><span>Total</span><span className="cart-page__cart-total-amount">${total.toFixed(2)}</span></li>
              </ul>
              <div className="cart-page__buttons">
                <Link to="cart.html" className="solinom-btn">Update</Link>
                <Link to="checkout.html" className="solinom-btn solinom-btn--base">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      


      


    </div>
  );
};

export default Cart;
