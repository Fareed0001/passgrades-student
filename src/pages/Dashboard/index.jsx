import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

const Dashboard = () => {
  const { status, data } = useSession();
  const firstname = data?.user?.data?.firstname;
  const lastname = data?.user?.data?.lastname;

  const content = (
    <div className="container-fluid body-content">
      <p className="dashboard-greetings">
        Good day {lastname} {firstname}{" "}
      </p>
      <div className="dashboard-content-board-div">
        <img
          className="dashboard-content-board-img"
          src="images\dashboard-images\dashboard.jpg"
          alt="dashboard-animation"
        />
      </div>
    </div>
  );

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/auth/Signin");
    }
  }, [status]);

  if (status === "authenticated") return <>{content}</>;
};

export default Dashboard;
