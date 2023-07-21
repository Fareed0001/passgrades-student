import React from "react";

const index = () => {
  return (
    <section className="signinPage">
      <div className="container-fluid signin-container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-6 sign-in-first-col">
            <img
              className="sign-in-img"
              src="images\register-images\sign-in.gif"
              alt="sign-in.gif"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-6 sign-in-second-col">
            <div className="container">
              {/* <!-- FORM  --> */}
              <form
                action=""
                method="post"
                className="row g-2 needs-validation form signin-form"
                validate=""
              >
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label signin-form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="inputPassword" className="form-label signin-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                  />
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
                      htmlFor="flexCheckDefault"
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
                      <label
                        className="form-check-label"
                        htmlFor="invalidCheck"
                      >
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

                {/* <!-- BOTTON  --> */}
                <div className="col-md-6 d-grid">
                  <button
                    className="btn btn-primary create-account-button"
                    type="submit"
                  >
                    <i className="fa-solid fa-user button-icons"></i>
                    Sign in
                  </button>
                </div>
                <div className="col-md-6 d-grid">
                  <button className="btn btn-dark google-button" type="submit">
                    <i className="fa-brands fa-google button-icons"></i>
                    Sign in with google
                  </button>
                </div>
                {/* <!-- BUTTON  --> */}

                <p className="account">
                  I don't have an account?{" "}
                  <a className="account-link" href="Signup">
                    Sign up
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

export default index;
