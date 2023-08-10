import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "@/utils/axios";

const index = () => {
  const { data } = useSession();
  const [Messages, setMessages] = useState([]);
  const [Loading, setLoading] = useState(false);
  const role = data?.user?.data?.role;

  useEffect(() => {
    setLoading(true);
    async function getMessages() {
      try {
        const authToken = data?.user?.token;
        if (!authToken) {
          return null;
        }
        const endpoint =
          role === "student" ? "/student/messages" : "/agent/messages";
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response?.data;
        setMessages(responseData?.data);
        console.log(responseData);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
    getMessages();
  }, [data]);
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
// index.auth = true;

export default index;
