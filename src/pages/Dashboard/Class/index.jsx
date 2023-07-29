import React from "react";

const DashboardClass = () => {
  return (
    <>
      <div className="container-fluid body-content">
        <div className="row">
          <div className="class-div col-md-9">
            <p className="class-course-title">Course title</p>
            <video
              className="class-video"
              controls
              controlsList="nodownload"
            >
              <source
                src="images\dashboard-images\video.mp4"
                type="video/mp4"
              />
            </video>
            <p className="class-title">Introduction to the course</p>
            <p className="class-resources">
              Class resource:  {/* course resource */}
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

      

        </div>
      </div>
    </>
  );
};

export default DashboardClass;
