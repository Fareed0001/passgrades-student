import React from "react";

const index = () => {
  return (
    <div className="container-fluid body-content">

      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="forth-div-card card">
            <img
              src="..\images\landing-page-images\design-instructor.jpg"
              className="forth-div-card-img card-img-top"
              alt="Instructors image"
            />
            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Kafayat Asus
                <span className="forth-div-card-icon">
                  <i className="fa-brands fa-figma"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">
                TOEFL Instructor
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="forth-div-card card">
            <img
              src="..\images\landing-page-images\developer-instructor.jpg"
              className="forth-div-card-img card-img-top"
              alt="Instructors image"
            />
            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Farid Ibrahim
                <span className="forth-div-card-icon">
                  <i className="fa-solid fa-code"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">
                GMAT Instructor
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="forth-div-card card">
            <img
              src="..\images\landing-page-images\writing-instructor.jpg"
              className="forth-div-card-img card-img-top"
              alt="Instructors image"
            />
            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Isiah Vincent
                <span className="forth-div-card-icon">
                  <i className="fa-solid fa-marker"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">SAT Instructor</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="forth-div-card card">
            <img
              src="..\images\landing-page-images\business-instructure.jpg"
              className="forth-div-card-img card-img-top"
              alt="Instructors image"
            />
            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Aaron Abraham
                <span className="forth-div-card-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">Business Instructor</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default index;
