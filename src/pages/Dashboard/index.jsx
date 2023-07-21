import React from "react";
import { BiLogIn } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid body-content">
        <p className="dashboard-greetings">Good morning Mohammed Gadafi</p>
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
