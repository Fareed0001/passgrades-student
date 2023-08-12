import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import axios from "@/utils/axios";
import StudentCard from "@/Components/StudentCard";

const index = () => {
  const { status, data } = useSession();
  const role = data?.user?.data?.role;
  console.log(role);
  const router = useRouter();

  const [Students, setStudents] = useState([]);
  const [Loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (role !== "agent") {
  //     Router.push("/auth/Signin");
  //   }
  // }, [status]);
  useEffect(() => {
    setLoading(true);
    async function getStudents() {
      try {
        const authToken = data?.user?.token;
        if (!authToken) {
          return null;
        }

        const response = await axios.get("/agent/students", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response?.data;
        setStudents(responseData?.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
    getStudents();
  }, [data]);

  const content = (
    <section>
      <div className="agent-dashboard-div">
        <div className="row pc-header-sidebar">
          <div className="">
            <section>
              <div className="container-fluid agent-body-content">
                {/* <!-- MY STUDENT START --> */}
                <div className="agent-row row">
                  <div className="col-6">
                    <p className="agent-student-header">My students</p>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      onClick={() => {
                        router.push("Agent/AgentRegisterStudent");
                      }}
                      className="btn btn-primary agent-dashboard-button w-40 mb-3"
                    >
                      Add new student
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-3">
                  {Students.map((student) => (
                    <StudentCard
                      firstname={student.firstname}
                      lastname={student.lastname}
                      phone={student.phone}
                      email={student.email}
                      referalnumb={student.referred_by}
                      studentId={student._id}
                      key={student._id}
                    />
                  ))}
                </div>
                {/* <!-- MY STUDENT END --> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
  return <>{content}</>;
};

// index.auth = {
//   role: "agent",
//   loading: "loading...",
//   unauthorized: "/Signin",
// };
export default index;