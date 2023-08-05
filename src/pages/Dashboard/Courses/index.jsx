import React, { useEffect, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "@/utils/axios";
import { useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import black from "public/images/landing-page-images/black.jpg";
import Router from "next/router";

//Card Component
const CourseCard = ({ image, title, description, price, id }) => {
  const [showDescription, setShowDescription] = useState(false);

  const { status, data } = useSession();
  const { email, phone, firstname, lastname } = data.user.data;

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/auth/Signin");
    }
  }, [status]);

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY,
    tx_ref: Date.now(),
    amount: price,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: `${firstname} ${lastname} ${id}`,
    },
    customizations: {
      title: title,
      description: description,
      logo: image,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleToggleDescription = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };

  return (
    <div className="col">
      <div className="courses-card">
        <Image
          height={200}
          width={200}
          src={black}
          className="card-img-top courses-card-img h-[200px] w-[200px]"
          alt={title}
          width={200} // Set the width
          height={200} // Set the height
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
        <p className="course-price">
          ₦{price}
          <button
            className="course-price-span"
            onClick={() =>
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal();
                },
                onClose: () => {},
              })
            }
          >
            pay
          </button>
        </p>
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

const Index = (props) => {
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

        const response = await axios.get("/courses", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response?.data;
        setCourses(responseData?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
    getcourses();
  }, [data]);

  return (
    <>
      <div className="available-courses">Courses available</div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4 h-full relative">
        {Loading ? (
          <div className=" absolute flex items-center justify-center  text-xl font-bold animate-pulse  top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <Loader2Icon className="animate-spin" />
          </div>
        ) : Courses.length === 0 ? (
          <div className=""> No available courses</div>
        ) : (
          Courses.map((course) => (
            <CourseCard
              key={course._id}
              id={course._id}
              image={course.cover_image}
              title={course.title}
              description={course.description}
              price={course.student_price}
            />
          ))
        )}
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const response = await axios("student/mycourses", {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${Cookies.get("AuthToken")}`,
//     },
//   });

//   const courses = response.data;
//   console.log(courses);

//   return {
//     props: {
//       courses: courses,
//     },
//   };
// }
export default Index;

{
  /* <CourseCard
        image="/images/dashboard-images/sat.png"
        title="SAT"
        description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        price="₦5,000"
      /> */
}
{
  /* Add more CourseCard components for other courses */
}
