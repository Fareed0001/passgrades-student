import React from "react";

const index = () => {
  return (
    <section className="checkoutPage">
        <div className="checkout-div">
          <div className="row">
            <div className="col-lg-6 checkout-first-col">
              <img
                className="checkout-side-image"
                src="images\register-images\checkout0.jpg"
                alt="checkout image"
              />
            </div>
            <div className="col-lg-6 checkout-bank-details">
              <div className="checkout-header-div">
                <p className="checkout-header">Checkout</p>
              </div>
              <div className="checkout-input-div">
                <form className="row needs-validation" novalidate>
                  <div className="col-12 checkout-form-col">
                    <label htmlFor="cardOwnerName" className="form-label checkout-form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control form-input-field card-name-input"
                      id="cardOwnerName"
                      placeholder="Cardholder's name"
                      required
                    />
                  </div>
                  <div className="col-12 checkout-form-col">
                    <label htmlFor="cardNumber" className="form-label checkout-form-label">
                      card number
                    </label>
                  </div>
                  <div className="input-group has-validation card-number-input">
                    <input
                      type="text"
                      className="form-control form-input-field"
                      id="cardNumber"
                      aria-describedby="inputGroupPrepend"
                      placeholder="0000 0000 0000 0000"
                      maxlength="16"
                      required
                    />
                    <span className="input-group-text" id="inputGroupPrepend">
                      <img
                        className="card-animation"
                        src="images\register-images\credit-card-animation.gif"
                        alt="credit card animation"
                      />
                    </span>
                  </div>
                  <div className="col-6 col-lg-6 checkout-form-col">
                    <label htmlFor="expiringDate" className="form-label checkout-form-label">
                      Expiring date
                    </label>
                    <input
                      type="text"
                      className="form-control form-input-field card-expiring-date-input"
                      id="expiringDate"
                      placeholder="MM/YYYY"
                      required
                    />
                  </div>
                  <div className="col-6 col-lg-6 checkout-form-col">
                    <label htmlFor="cvvCode" className="form-label checkout-form-label">
                      CVV/CVC
                    </label>
                    <input
                      type="text"
                      className="form-control form-input-field card-cvv-input"
                      id="cvvCode"
                      placeholder="000"
                      maxlength="3"
                      required
                    />
                  </div>
                  <div className="col-12 checkout-form-col form-check-div">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label form-label checkout-form-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember this card for later
                    </label>
                  </div>
                  <div className="col-12 checkout-form-col">
                    <label htmlFor="paymentSummary" className="form-label checkout-form-label">
                      SAT
                    </label>
                    <input
                      type="text"
                      className="form-control form-input-field payment-summary-input"
                      id="paymentSummary"
                      placeholder="Total payment: ₦5,000"
                      readonly
                    />
                  </div>
                  <div className="col-12 checkout-form-col d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-large checkout-form-btn"
                    >
                      Buy Course
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default index;
