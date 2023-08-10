import React, { useEffect, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "@/utils/axios";
import { useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";
import black from "public/images/landing-page-images/black.jpg";
import Router, { useRouter } from "next/router";
import { useToast } from "@/Components/ui/use-toast";

//Card Component
const CourseCard = ({ image, title, description, price, id, studentId }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const { status, data } = useSession();
  const { email, phone, firstname, lastname } = data.user.data;
  const token = data?.user?.token;
  const role = data?.user?.data?.role;

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

  const endpoint = role === "student" ? "/student/course" : "/agent/course";
  const flutterwaveresp = async (response) => {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const transactionId = response.transaction_id;
    // const studentEnrollendpoint = `${baseurl}/agent/student/enroll`;
    if (response.status === "successful") {
      if (studentId) {
        try {
          const queryParams = new URLSearchParams({
            amt: price,
            tuid: transactionId,
            cid: id,
            sid: studentId,
          });

          const endpoint = `${baseurl}/agent/student/enroll?${queryParams}`;

          const fetchOptions = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          const responsedata = await fetch(endpoint, fetchOptions);

          if (responsedata.ok) {
            console.log("Course enrolled successfully");
            toast({
              title: "Cheers: you got a course",
              description: `You just got ${title} and enrolled for your student`,
            });
          } else {
            console.error("Error in enrollment");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        try {
          const response = await fetch(`${baseurl}${endpoint}/${id}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token} `,
            },
          });
          if (response.ok) {
            console.log("course enrolled  successfully");
            toast({
              title: "Cheers: you got a course",
              description: ` you just got ${title} & enrolled for yourself`,
            });
          } else {
            console.error("Error in enrolement");
          }
        } catch (error) {
          // Handle network or other errors
          console.error("Error:", error);
        }
      }
    }
    closePaymentModal();
  };

  return (
    <div className="col">
      <div className="courses-card">
        <img
          src={image}
          className="card-img-top courses-card-img h-[200px] w-[200px]"
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
        <p className="course-price">
          ₦{price}
          <button
            className="course-price-span"
            onClick={() =>
              handleFlutterPayment({
                callback: flutterwaveresp,
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
  const role = data?.user?.data?.role;
  const router = useRouter();
  const { studentId } = router.query;
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
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4 h-full relative">
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
              price={`${
                role === "student" ? course.student_price : course.agent_price
              }`}
              studentId={studentId}
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
