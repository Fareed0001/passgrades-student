import React, { useEffect, useState } from "react";
import { CourseCard } from "@/Components/CourseCard";
import { useSession } from "next-auth/react";
import axios from "@/utils/axios";
import { Loader2Icon } from "lucide-react";
import App from "@/Components/App";

//Card Component

const DashboardClass = () => {
  const { data } = useSession();
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
  return (
    <>
      <div className="container-fluid body-content">
        <div className="row">
          <div className="class-div col-12">
            <p className="class-course-title">Course title</p>
            <video className="class-video" controls controlsList="nodownload">
              {/* <App /> */}
            </video>
            <p className="class-title">Introduction to the course</p>
            <p className="class-resources">
              Class resource: {/* course resource: it downloads on click */}
            </p>
            <div className="class-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>

          <div className="second-class-div col-12">
            <div className="d-grid">
              <button type="button" className="btn btn-primary class-button">
                Next class name{/* class title */}
              </button>
              <button type="button" className="btn btn-primary class-button">
                Next class name
              </button>
              <button type="button" className="btn btn-primary class-button">
                Next class name
              </button>
            </div>
          </div>

          <div className="third-class-div col-12">
            <p className="third-class-div-header">Enrolled courses</p>

            <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
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
