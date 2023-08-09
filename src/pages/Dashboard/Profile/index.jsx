import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillCameraFill,
  BsFillEnvelopeAtFill,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import Router from "next/router";
import Image from "next/image";

//Card Component
const CourseCard = ({ image, title, description, price }) => {
  const [showDescription, setShowDescription] = useState(false);

  const { status } = useSession();
  const handleToggleDescription = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };

  return (
    <div className="col">
      <div className="courses-card">
        <Image
          src={image}
          className="card-img-top courses-card-img"
          alt={title}
          width={100} // Adjust the width
          height={100} // Adjust the height
          layout="fixed" // Set the layout mode
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
    <div className="container-fluid body-content">
      {/* <!-- CONTENT START  --> */}

      <div className="user-profile-image-div">
        <Image
          className="user-profile-image"
          src="/images/landing-page-images/black.jpg"
          alt="user image"
          width={100} // Adjust the width
          height={100} // Adjust the height
          layout="fixed" // Set the layout mode
        />
        <label for="profilePicInput" className="user-camera-icon-label">
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
                className="user-email-link"
                class="user-email-link"
                href={`mailto:${email}`}
              />
              {email}
              <BsPhoneVibrateFill
                className="user-phone-number-link"
                class="user-phone-number-link"
                href={`tel:${phone}`}
              />
              {phone}
            </span>
          </p>
        </div>
      </div>

      <div className="user-courses-div">
        <div className="user-courses-header">Registered courses</div>
        <div className="user-courses">
          {/* <!-- COURSES START  --> */}
          <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
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

// const url = process.env.NEXT_PUBLIC_BASE_URL;

// export const getStaticProps = async () => {
//   const res = await fetch(`${url}/student/mycourses`);
//   const repo = await res.json();
//   return { props: { repo } };
// };

// Index.auth = true;
export default Index;
