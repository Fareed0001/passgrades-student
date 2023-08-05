import Image from "next/image";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

const index = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/auth/Signin");
    }
  }, [status]);

  const content = (
    <section>
      <div className="tutor-dashboard-div">
   
      <section className="tutor-div">
      <div className="container new-course-container">
        <p className="tutor-header-text">Start online className</p>
        <form action="">
          <div className="row container">
            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="meetingIdNumber" className="form-label tutor-form-label">
                Meeting id number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter meeting id number"
                id="meetingIdNumber"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="meetingPassword" className="form-label tutor-form-label">
                Meeting password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter meeting password"
                id="meetingPassword"
              />
            </div>

            <div className="input-field-div col-lg-12">
              <label className="form-label tutor-form-label" htmlFor="">
                Select course
              </label>
              <select className="form-select">
                <option selected>Select class course</option>
                <option value="1">Course One</option>
                <option value="2">Course Two</option>
                <option value="3">Course Three</option>
              </select>
            </div>
          </div>
          <button
            className="btn btn-primary add-new-course-button"
            type="submit"
          >
            Start online class
          </button>
        </form>
      </div>
    </section>
   
      </div>
    </section>
  );
  if (status === "authenticated") return <>{content}</>;
};

export default index;
