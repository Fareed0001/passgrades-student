import React, { useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const index = () => {
  return (
    <div className="container-fluid dashboard-instructor-body-content">
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="forth-div-card card">
            <Image
              src="/images/landing-page-images/instructor1.jpg"
              className="forth-div-card-img card-img-top"
              alt="landing page image"
              width={800} // Adjust the width to the desired size
              height={600} // Adjust the height to the desired size
              layout="responsive" // Set layout to responsive
            />
            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Kafayat Asus
                <span className="forth-div-card-icon">
                  <i className="fa-brands fa-figma"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">IELTS Instructor</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="forth-div-card card">
            <Image
              src="/images/landing-page-images/instructor.jpg"
              className="forth-div-card-img card-img-top"
              alt="landing page image"
              width={800} // Adjust the width to the desired size
              height={600} // Adjust the height to the desired size
              layout="responsive" // Set layout to responsive
            />

            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Isiah Vincent
                <span className="forth-div-card-icon">
                  <i className="fa-solid fa-code"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">GMAT Instructor</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="forth-div-card card">
            <Image
              src="/images/landing-page-images/instructor6.jpg"
              className="forth-div-card-img card-img-top"
              alt="landing page image"
              width={800} // Adjust the width to the desired size
              height={600} // Adjust the height to the desired size
              layout="responsive" // Set layout to responsive
            />

            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Farid Ibrahim
                <span className="forth-div-card-icon">
                  <i className="fa-solid fa-marker"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">SAT Instructor</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="forth-div-card card">
            <Image
              src="/images/landing-page-images/instructor3.jpg"
              className="forth-div-card-img card-img-top"
              alt="landing page image"
              width={800} // Adjust the width to the desired size
              height={600} // Adjust the height to the desired size
              layout="responsive" // Set layout to responsive
            />

            <div className="forth-div-card-body">
              <p className="forth-div-card-header">
                Arjun Rasheed
                <span className="forth-div-card-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </span>
              </p>
              <p className="forth-div-card-sub-header">PTE Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// index.auth = true;
export default index;
