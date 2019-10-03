import React from 'react';

const ShoppingContainer = () => (
  <section className="shopping-container">
    <div className="shopping-container__carousel">
      <h2 className="carousel-title">Featured Items</h2>
      <section className="shopping-container__carousel-items">
        <div className="item-box">
          <img
            className="item-box__img"
            src="/images/single-capsicum.jpeg"
            alt="Organic Gala Apples"
          />
          <div className="item-box-div">
            <div className="item-box__price-weight-box">
              <div className="item-box__price">
                <span className="item-box__price-currency-symbol">$</span>
                <span className="item-box__price-whole-units">4</span>
                <span className="item-box__price-decimal-units">76</span>
              </div>
              <div className="item-box__weight">($1.59/LB)</div>
            </div>
            <div className="item-box__short-desc">
              Organic Gala Apples, 3 lb bag
            </div>
            <div className="item-box__btn-box">
              <img
                className="item-box__btn-img"
                src="/images/cart.png"
                alt="Add To Cart"
              />
              <button className="btn item-box__btn">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="item-box">
          <img
            className="item-box__img"
            src="/images/single-capsicum.jpeg"
            alt="Organic Gala Apples"
          />
          <div className="item-box-div">
            <div className="item-box__price-weight-box">
              <div className="item-box__price">
                <span className="item-box__price-currency-symbol">$</span>
                <span className="item-box__price-whole-units">4</span>
                <span className="item-box__price-decimal-units">76</span>
              </div>
              <div className="item-box__weight">($1.59/LB)</div>
            </div>
            <div className="item-box__short-desc">
              Organic Gala Apples, 3 lb bag
            </div>
            <div className="item-box__btn-box">
              <img
                className="item-box__btn-img"
                src="/images/cart.png"
                alt="Add To Cart"
              />
              <button className="btn item-box__btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="shopping-container__cart">Shopping Items Cart</div>
  </section>
);
export default ShoppingContainer;
