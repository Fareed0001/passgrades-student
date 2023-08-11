import React from "react";

const MessageCard = () => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">Message title</h6>
          <p className="card-text details-card-text">
            the message enters here the message enters here
          </p>
        </div>

        <div className="courses-card-footer">
          <small>Details</small>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
