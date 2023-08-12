import React from "react";

const OnlineClassCard = ({
  courseTitle,
  courseDescription,
  date,
  link,
  messageType,
  classinstructor,
  classTime,
  description,
  password,
  classTitle,
}) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <p>{courseTitle}</p>
          <h6 className="card-title ml-3">
            {classTitle} at {classTime}
          </h6>
          {/* <p className="card-text ml-3">
            Copy {classTitle} meeting password: {password}
          </p>

          <div className="card-body">
            <h6 className="card-title ml-0">
              {messageType} by {classinstructor}
            </h6>
            <p className="card-text details-card-text ">{description}</p>
          </div> */}
          <a href={link} target="_blank" className="btn btn-primary ml-3">
            Join live class
          </a>
          {/* <div className="courses-card-footer">
            <small>Details</small>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OnlineClassCard;
