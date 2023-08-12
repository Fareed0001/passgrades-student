import { Button } from "@/Components/ui/button";
import axios from "@/utils/axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false, // Disable server-side rendering for this component
});

const index = () => {
  const { data } = useSession();
  const [Class, setClass] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const courseid = router.query.courseId;
  const role = data?.user?.data?.role;
  const currentItem = Class?.classes?.[currentIndex];

  useEffect(() => {
    setLoading(true);
    async function getcourses() {
      try {
        const authToken = data?.user?.token;
        if (!authToken) {
          return null;
        }
        const endpoint =
          role === "student" ? "/student/mycourse/" : "/agent/mycourse/";
        const response = await axios.get(`${endpoint}${courseid}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response?.data;

        setClass(responseData?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
    getcourses();
  }, [data]);

  const handleNext = () => {
    if (currentIndex < Class?.classes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className="row">
      <div className="class-div col-12">
        <p className="class-course-title">{currentItem?.course?.title}</p>
        <div className="h-[500px] ">
          <ReactPlayer
            url={
              currentItem?.video
                ? currentItem?.video
                : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            }
            controls
            width="100%"
            height="100%"
          />
        </div>

        <p className="class-title">{currentItem?.title}</p>

        <a href={currentItem?.resource} target="_blank">
          <Button className="class-resources mt-3">
            download class resource
          </Button>
        </a>

        <div className="class-description text-gray-500 font-bold mt-3">
          {currentItem?.description}
        </div>
      </div>

      <div className="second-class-div col-12 flex justify-between">
        <div className="d-grid">
          <button
            type="button"
            className="btn btn-primary w-40 class-button"
            onClick={handlePrev}
          >
            prev class
          </button>
        </div>
        <div className="d-grid">
          <button
            type="button"
            className="btn btn-primary w-40 class-button"
            onClick={handleNext}
          >
            Next class
          </button>
        </div>
      </div>
    </div>
  );
};

// export async function getStaticPaths() {
//   // Fetch the list of course IDs from your API
//   const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
//   try {
//     const response = await fetch(
//       `https:/api.passgrades.com/api/v1/student/mycourses`
//     );
//     const courses = await response.json();

//     // Generate an array of paths based on the fetched course IDs
//     const paths = courses.map((course) => ({
//       params: { courseId: course._id },
//     }));

//     return { paths, fallback: false };
//   } catch (error) {
//     console.error("Error:", error);
//     return { paths: [], fallback: false };
//   }
// }
// export async function getStaticProps(context) {
//   const { params } = context;
//   const { courseid } = params.courseId;
//   const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
//   console.log(courseid);
//   try {
//     const response = await fetch(`${baseurl}/student/mycourse/${courseid}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const course = await response.json();
//     if (response.ok) {
//       console.log("course gotten successfully");
//     } else {
//       console.error("Error in fetching course");
//     }

//     return {
//       props: {
//         course,
//       },
//     };
//   } catch (error) {
//     console.error("Error:", error);
//     return {
//       props: {
//         course: {}, // Empty course object
//       },
//     };
//   }
// }
export default index;
// http://passmark.eu-north-1.elasticbeanstalk.com/api/v1/agent/student/enroll?amt=4000&tuid=4523499&cid=64d157d65f0edc16daaea31b&sid=64d2b4d55f0edc16daaea3e4
