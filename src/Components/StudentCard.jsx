import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const StudentCard = ({
  firstname,
  lastname,
  phone,
  email,
  referalnumb,
  studentId,
}) => {
  const router = useRouter();

  const handleSelectStudent = () => {
    router.push(`/Dashboard/Courses?studentId=${studentId}`);
  };

  return (
    <div className="agent-student-div">
      <div className="">
        <div className="col">
          <div className="agent-student-card card">
            {/* <Image
              height={400}
              width={300}
              src="/images/landing-page-images/face0.jpg"
              className="card-img-top student-image"
              alt="student image"
            /> */}
            <div className="card-body flex flex-col gap-y-3">
              <p className="student-name">
                {firstname} {lastname}
              </p>
              <span>{email}</span>
              <span>{phone}</span>
              <div className="d-grid">
                <div
                  className="btn btn-primary agent-dashboard"
                  onClick={handleSelectStudent}
                >
                  Buy course for student
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
