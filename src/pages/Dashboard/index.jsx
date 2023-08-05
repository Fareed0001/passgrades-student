import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Router from "next/router";
import Image from 'next/image';

const Dashboard = () => {
  const { status, data } = useSession();
  const firstname = data?.user?.data?.firstname;
  const lastname = data?.user?.data?.lastname;

  const content = (
    <div className="container-fluid dashboard-body-content">
      <p className="dashboard-greetings">
        Good morning {lastname} {firstname}
      </p>
      <div className="dashboard-content-board-div">
        <Image
          className="dashboard-content-board-img"
          src="/images/dashboard-images/dashboard.jpg"
          alt="dashboard-animation"
          width={100} // Adjust the width
          height={100} // Adjust the height
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
