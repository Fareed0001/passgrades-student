import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "@/utils/axios";
import OnlineClassCard from "@/Components/OnlineClassCard";

const Index = () => {
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
        console.log(responseData?.data);

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

      {Messages.length === 0 ? (
        <p className="text-xl font-bold text-gray-400 capitalize ">
          you have no messages
        </p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {Messages.map((message) => (
            <OnlineClassCard
              courseTitle={message?.course?.title}
              classTitle={message.title}
              classTime={message.time}
              link={message.link}
              classinstructor={message.instructor}
              messageType={message.messsage_type}
              description={message.description}
              password={message.password}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
