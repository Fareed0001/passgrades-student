import React, { useState } from "react";

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
            className={`courses-card-text ${showDescription ? "" : "course-card-text-hide"
              }`}
          >
            {description}
          </p>
        </div>
        <div className="courses-card-footer">
          <small className="courses-details-text" onClick={handleToggleDescription}>
            Details
          </small>
        </div>
      </div>
    </div>
  );
};







const DashboardClass = () => {
  return (
    <>
      <div className="container-fluid body-content">
        <div className="row">
          <div className="class-div col-12">
            <p className="class-course-title">Course title</p>
            <video
              className="class-video"
              controls
              controlsList="nodownload"
            >
              <source
                src=""
                type="video/mp4"
              />
            </video>
            <p className="class-title">Introduction to the course</p>
            <p className="class-resources">
              Class resource:  {/* course resource: it downloads on click */}
            </p>
            <div className="class-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>

          <div className="second-class-div col-12">
            <div className="d-grid">
              <button type="button" className="btn btn-primary class-button">Next class name{/* class title */}</button>
              <button type="button" className="btn btn-primary class-button">Next class name</button>
              <button type="button" className="btn btn-primary class-button">Next class name</button>
            </div>
          </div>

          <div className="third-class-div col-12">
            <p className="third-class-div-header">Enrolled courses</p>

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
      </div>
    </>
  );
};

export default DashboardClass;
