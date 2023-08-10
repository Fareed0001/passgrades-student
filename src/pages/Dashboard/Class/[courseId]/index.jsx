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
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const courseid = router.query.courseId;

  const classdetails = Class?.classes?.[0];

  const role = data?.user?.data?.role;

  useEffect(() => {
    setLoading(true);
    async function getcourses() {
      try {
        const authToken = data?.user?.token;
        if (!authToken) {
          return null;
        }

        const response = await axios.get(`/student/mycourse/${courseid}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response?.data;
        console.log(responseData.data.classes[0]);
        setClass(responseData?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
    getcourses();
  }, [data]);
  return (
    <div className="row">
      <div className="class-div col-12">
        <p className="class-course-title">{Class?.course?.title}</p>
        <ReactPlayer
          url={classdetails?.video} // You can use the same video URL for ReactPlayer
          controls
          width="100%"
          height="auto"
        />
        <p className="class-title">{classdetails?.title}</p>

        <a href={classdetails?.resource} target="_blank">
          <Button className="class-resources">download class resource</Button>
        </a>

        <div className="class-description">{classdetails?.description}</div>
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
