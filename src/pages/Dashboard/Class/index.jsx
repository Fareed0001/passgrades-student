import React, { useEffect, useState } from "react";
import { CourseCard } from "@/Components/CourseCard";
import { useSession } from "next-auth/react";
import axios from "@/utils/axios";
import Router from "next/router";
import { Loader2Icon } from "lucide-react";

//Card Component

const DashboardClass = () => {
  const { status, data } = useSession();
  const [Courses, setCourses] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getcourses() {
      try {
        const authToken = data?.user?.token;
        if (!authToken) {
          return null;
        }

        const response = await axios.get("/student/mycourses", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response?.data;
        setCourses(responseData?.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    getcourses();
  }, [data]);

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/auth/Signin");
    }
  }, [status]);

  return (
    <>
      <div className="container-fluid body-content">
        <div className="row">
          <div className="third-class-div col-12">
            <p className="third-class-div-header">Enrolled courses</p>

            <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
              {Loading ? (
                <div className=" absolute mx-auto flex items-center justify-center  text-xl font-bold animate-pulse  top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <Loader2Icon className="animate-spin" />
                </div>
              ) : Courses.length === 0 ? (
                <div className=" mt-10 mx-auto font-semibold text-sm text-gray-500 ">
                  You Havent Enrolled to Any Course yet
                </div>
              ) : (
                Courses.map((course) => (
                  <CourseCard
                    image={course.cover_image}
                    title={course.title}
                    description={course.description}
                    price={course.student_price}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardClass;
