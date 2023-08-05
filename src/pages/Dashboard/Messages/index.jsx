import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Router from "next/router";

const index = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/auth/Signin");
    }
  }, [status]);

  return (
    <div className="container-fluid dashboard-messages-body-content">
      <p className="dashboard-messages-header">Messages</p>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* ONLINE CLASS CARD START  */}
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Class title</h6>
              <p className="card-text">
                Copy (class title) meeting password: (the password)
              </p>
              <a href="#" className="btn btn-primary">
                Join live class
              </a>
            </div>
          </div>
        </div>
        {/* ONLINE CLASS MESSAGES CARD END  */}

        {/* NORMAL MESSAGES HERE  */}
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h6 class="card-title">Message title</h6>
              <p class="card-text details-card-text">
                the message enters here the message enters here
              </p>
            </div>

            <div className="courses-card-footer">
              <small>Details</small>
            </div>
          </div>
        </div>
        {/* NORMAL MESSAGES HERE  */}


      </div>
    </div>
  );
};

export default index;
