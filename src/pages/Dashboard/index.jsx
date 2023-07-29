import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid body-content">
        <p className="dashboard-greetings">Good {/* {timeOfDay} {firstname} {lastname} */}</p>
        <div className="dashboard-content-board-div">
          <img
            className="dashboard-content-board-img"
            src="images\dashboard-images\dashboard.jpg"
            alt="dashboard-animation"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
