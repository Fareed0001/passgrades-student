import React from "react";
import Image from 'next/image';

const index = () => {
  return (
    <div className="container-fluid dashboard-instructor-body-content">

      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="forth-div-card card">
            <Image
              src="/images/landing-page-images/instructor1.jpg"
              className="forth-div-card-img card-img-top"
              alt="..."
              width={100} // Adjust the width as needed
              height={100} // Adjust the height as needed
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
            <Image
              src="/images/landing-page-images/instructor.jpg"
              className="forth-div-card-img card-img-top"
              alt="..."
              width={100} // Adjust the width as needed
              height={100} // Adjust the height as needed
            />

            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Isiah Vincent
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
            <Image
              src="/images/landing-page-images/instructor6.jpg"
              className="forth-div-card-img card-img-top"
              alt="landing page image"
              width={100} // Adjust the width as needed
              height={100} // Adjust the height as needed
            />

            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Farid Ibrahim
                <span className="forth-div-card-icon">
                  <i className="fa-solid fa-marker"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">
                SAT Instructor
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="forth-div-card card">
            <Image
              src="/images/landing-page-images/instructor3.jpg"
              className="forth-div-card-img card-img-top"
              alt="landing page image"
              width={100} // Adjust the width as needed
              height={100} // Adjust the height as needed
            />

            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Arjun Rasheed
                <span className="forth-div-card-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">
                Business Instructor
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default index;
