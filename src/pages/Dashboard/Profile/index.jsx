import React, { useState } from "react";
import {
  BsFillCameraFill,
  BsFillEnvelopeAtFill,
  BsPhoneVibrateFill,
} from "react-icons/bs";

//Card Component
const CourseCard = ({ image, title, description, price }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };

  return (
    <div className="col">
      <div className="courses-card">
        <img
          src={image}
          className="card-img-top courses-card-img"
          alt={title}
        />
        <div className="courses-card-body">
          <p className="courses-card-title">{title}</p>
          <p
            className={`courses-card-text ${
              showDescription ? "" : "course-card-text-hide"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="courses-card-footer">
          <small
            className="courses-details-text"
            onClick={handleToggleDescription}
          >
            Details
          </small>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div class="container-fluid body-content">
      {/* <!-- CONTENT START  --> */}

      <div class="user-profile-image-div">
        <img
          class="user-profile-image"
          src="../images/landing-page-images/black.jpg"
          alt="user image"
        />
        <label for="profilePicInput" class="user-camera-icon-label">
          <BsFillCameraFill className="user-camera-icon" />
        </label>
        <input class="profilePicInput" id="profilePicInput" type="file" />
      </div>

      <div class="user-details-div">
        <div class="user-header-div">
          <p class="user-name"> {/* {firstname} {lastname} */}</p>
          <p class="user-role">
            {/* {role} */}
            <span>
              <BsFillEnvelopeAtFill
                class="user-email-link"
                href=" mailto:user-email@example.com"
              />
              <BsPhoneVibrateFill
                class="user-phone-number-link"
                href="tel:+2349052927094"
              />
            </span>
          </p>
        </div>
      </div>

      <div class="user-courses-div">
        <div class="user-courses-header">Registered courses</div>
        <div class="user-courses">
          {/* <!-- COURSES START  --> */}
          <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
            <CourseCard
              image="/images/dashboard-images/sat.png"
              title="SAT"
              description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            />
            <CourseCard
              image="/images/dashboard-images/sat.png"
              title="SAT"
              description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            />
          </div>
        </div>
      </div>

      {/* <!-- CONTENT END  --> */}
    </div>
  );
};

export default Index;
