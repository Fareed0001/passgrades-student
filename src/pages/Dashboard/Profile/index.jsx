import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import {
  BsFillCameraFill,
  BsFillEnvelopeAtFill,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import Router from "next/router";

//Card Component
const CourseCard = ({ image, title, description, price }) => {
  const [showDescription, setShowDescription] = useState(false);

  const { status } = useSession();
  const handleToggleDescription = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };
  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/auth/Signin");
    }
  }, [status]);

  return (
    <div className="col">
      <div className="courses-card">
        <img
          src={image}
          className="card-img-top courses-card-img"
          alt={title}
        />
        <div className="courses-card-body">
          <p className="courses-card-title">{title}</p>
          <p
            className={`courses-card-text ${
              showDescription ? "" : "course-card-text-hide"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="courses-card-footer">
          <small
            className="courses-details-text"
            onClick={handleToggleDescription}
          >
            Details
          </small>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const imageref = useRef();
  const { data } = useSession();
  const role = data?.user?.data?.role;
  const firstname = data?.user?.data?.firstname;
  const lastname = data?.user?.data?.lastname;
  const phone = data?.user?.data?.phone;
  const email = data?.user?.data?.email;
  const token = data?.user?.token;

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("photo", imageref.current.files[0]);

    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
      const response = await fetch(`${baseurl}/student/update/picture`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });

      if (response.ok) {
        console.log("Image uploaded successfully");
      } else {
        console.error("Error uploading image");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };

  return (
    <div class="container-fluid body-content">
      {/* <!-- CONTENT START  --> */}
      <div class="user-profile-image-div">
        <img
          class="user-profile-image"
          src="../images/landing-page-images/black.jpg"
          alt="user image"
        />
        <label for="profilePicInput" class="user-camera-icon-label">
          <BsFillCameraFill className="user-camera-icon" />
        </label>
        <input
          class="profilePicInput"
          id="profilePicInput"
          type="file"
          ref={imageref}
          onChange={handleImageUpload}
        />
      </div>

      <div class="user-details-div">
        <div class="user-header-div">
          <p class="user-name"> {`${firstname} ${lastname}`}</p>
          <p class="user-role">
            {role}
            <span>
              <BsFillEnvelopeAtFill
                class="user-email-link"
                href={`mailto:${email}`}
              />
              {email}
              <BsPhoneVibrateFill
                class="user-phone-number-link"
                href={`tel:${phone}`}
              />
              {phone}
            </span>
          </p>
        </div>
      </div>

      <div class="user-courses-div">
        <div class="user-courses-header">Registered courses</div>
        <div class="user-courses">
          {/* <!-- COURSES START  --> */}
          <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
            <CourseCard
              image="/images/dashboard-images/sat.png"
              title="SAT"
              description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            />
            <CourseCard
              image="/images/dashboard-images/sat.png"
              title="SAT"
              description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            />
          </div>
        </div>
      </div>

      {/* <!-- CONTENT END  --> */}
    </div>
  );
};
const url = process.env.NEXT_PUBLIC_BASE_URL;

// export const getStaticProps = async () => {
//   const res = await fetch(`${url}/student/mycourses`);
//   const repo = await res.json();
//   return { props: { repo } };
// };

export default Index;
