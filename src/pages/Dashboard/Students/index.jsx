import Image from "next/image";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

const index = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/auth/Signin");
    }
  }, [status]);

  const content = (
    <section>
      <div className="agent-dashboard-div">
        <div className="row pc-header-sidebar">
          <div className="">
            {/* <!-- SECTION START  --> */}
            <section>

              <div className="container-fluid agent-body-content">
                {/* <!-- MY STUDENT START --> */}
                <div className="agent-row row">
                  <div className="col-6">
                    <p className="agent-student-header">My students</p>
                  </div>
                  <div className="col-6">
                    <a href="sign-up.html">
                      <button
                        type="button"
                        className="btn btn-primary agent-dashboard-button w-40 mb-3"
                      >
                        Add new student
                      </button>
                    </a>
                  </div>
                </div>

                <div className="agent-student-div">
                  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">

                    <div className="col">
                      <div className="agent-student-card card">
                        <Image
                          height={400}
                          width={300}
                          src="/images/landing-page-images/black.jpg"
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
                {/* <!-- MY STUDENT END --> */}

              </div>
            </section>
            {/* <!-- SECTION END  --> */}
          </div>
        </div>
      </div>
    </section>
  );
  if (status === "authenticated") return <>{content}</>;
};

export default index;