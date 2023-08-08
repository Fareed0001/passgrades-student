import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const StudentCard = () => {
  const router = useRouter();
  return (
    <div className="agent-student-div">
      <div className="">
        <div className="col">
          <div className="agent-student-card card">
            <Image
              height={400}
              width={300}
              src="/images/landing-page-images/face0.jpg"
              className="card-img-top student-image"
              alt="student image"
            />
            <div className="card-body">
              <p className="student-name">Isiah Sylvester</p>
              <div className="d-grid">
                <a
                  href="dashboard.html"
                  className="btn btn-primary agent-dashboard"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
