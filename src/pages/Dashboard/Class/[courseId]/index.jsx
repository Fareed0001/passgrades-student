import React from "react";

const index = () => {
  return (
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
    </div>
  );
};

// export async function getStaticPaths() {
//   const response = await fetch("");
// }
// export async function getStaticProps(context) {
//   const { params } = context;
//   const courseid = params.courseId;
//   const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
//   try {
//     const response = await fetch(`${baseurl}/student/mycourse`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response.ok) {
//       console.log("course gotten successfully");
//       console.log(response);
//     } else {
//       console.error("Error in enrolement");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
//   return {
//     props: {
//       course: response,
//     },
//   };
// }
export default index;
