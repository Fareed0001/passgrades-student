import React, { useState } from "react";

const Index = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCreateAccount = () => {
    setShowAlert(true);
  };

  return (
    <section className="signupPage">
      <div className="container-fluid sign-up-container">
        <div className="row">
          <div className="col-lg-5 sign-up-first-col">
            <img
              className="sign-up-img"
              src="images/register-images/sign-up.gif"
              alt="sign-up.gif"
            />
          </div>
          <div className="col-lg-7 sign-up-second-col">
            <div className="container">
              <p className="sign-up-header agent-sign-up">
                <i className="fa-solid fa-user-secret sign-up-header-icon"></i>
                Agent sign up
                <a className="toggle-link" href="Signup">
                  I am a Student
                </a>
              </p>

              {/* <!-- FORM  --> */}
              <form
                action=""
                method="post"
                className="row g-2 needs-validation form signup-form"
                validate=""
              >
                <div className="col-md-6">
                  <label htmlForfor="fname" className="form-label signup-form-label">
                    First name
                  </label>
                  <input type="text" className="form-control" id="fname" required />
                </div>
                <div className="col-md-6">
                  <label htmlForfor="lname" className="form-label signup-form-label">
                    Last name
                  </label>
                  <input type="text" className="form-control" id="lname" required />
                </div>
                <div className="col-md-6">
                  <label htmlForfor="email" className="form-label signup-form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label signup-form-label" htmlForfor="phone">
                    Phone number
                  </label>
                  <input type="text" id="phone" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlForfor="inputPassword" className="form-label signup-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlForfor="confirmPassword" className="form-label signup-form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    required
                  />
                </div>
                <div className="col-md-12 company-name-div">
                  <label htmlForfor="company" className="form-label signup-form-label">
                    Company name
                  </label>
                  <input type="text" className="form-control" id="companyname" />
                </div>

                <div className="check-boxes-div">
                  <div className="col-12">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlForfor="flexCheckDefault"
                    >
                      Remember Me
                    </label>
                    <a className="forgot-password" href="">
                      forgot password?
                    </a>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <label className="form-check-label" htmlForfor="invalidCheck">
                        I agree to the{" "}
                        <a className="terms-link" href="">
                          terms
                        </a>{" "}
                        and{" "}
                        <a className="terms-link" href="">
                          conditions
                        </a>
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>

                    </div>
                  </div>
                </div>

                {/* <!-- BUTTON  --> */}
                <div className="col-md-6 d-grid">
                 <a href="/Dashboard"> <button
                    className="btn btn-primary create-account-button"
                    type="button"
                    onClick={handleCreateAccount}
                  >
                    <i className="fa-solid fa-user button-icons"></i>
                    Create account
                  </button></a>
                </div>
                {/* <div className="col-md-6 d-grid">
                  <button className="btn btn-dark google-button" type="submit">
                    <i className="fa-brands fa-google button-icons"></i>
                    Sign-in with google
                  </button>
                </div> */}
                {/* <!-- BUTTON  --> */}

                <p className="account">
                  I have an account{" "}
                  <a className="account-link" href="Signin">
                    Sign in
                  </a>
                </p>
              </form>
              {/* <!-- FORM  --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
