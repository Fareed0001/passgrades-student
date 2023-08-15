import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillCameraFill,
  BsFillEnvelopeAtFill,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import Image from "next/image";
import axios from "@/utils/axios";
import { CourseCard } from "@/Components/CourseCard";

const Index = () => {
  const { data } = useSession();
  const role = data?.user?.data?.role;
  const firstname = data?.user?.data?.firstname;
  const lastname = data?.user?.data?.lastname;
  const phone = data?.user?.data?.phone;
  const email = data?.user?.data?.email;
  const token = data?.user?.token;

  const [EnrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    async function fetchEnrolledCourses() {
      try {
        const authToken = data?.user?.token;
        if (!authToken) {
          return null;
        }

        const endpoint =
          role === "student" ? "/student/mycourses" : "/agent/mycourses";

        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response?.data;

        setEnrolledCourses(responseData?.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchEnrolledCourses();
  }, [data, role]);

  const imageref = useRef();

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
      <div className="user-profile-image-div">
        <Image
          className="user-profile-image"
          src="/images/landing-page-images/black.jpg"
          alt="user image"
          width={800} // Adjust the width to the desired size
          height={600} // Adjust the height to the desired size
          layout="responsive" // Set layout to responsive
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
          <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
            {EnrolledCourses.map((course) => (
              <CourseCard
                key={course._id}
                image={course.cover_image}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
