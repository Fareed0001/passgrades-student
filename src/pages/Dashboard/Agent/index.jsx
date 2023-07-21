import React from "react";

const index = () => {
  return (
    <section>
      <div className="dashboard-div">
        <div className="row pc-header-sidebar">
          <div className="col-sm-3">
            {/* <!-- ASIDE START  --> */}
            <aside className="pc-sidebar">
              <div className="container">
                {/* <!-- LOGO DIV START  --> */}
                <div className="logo-div">
                  <p className="logo-text">
                    <span className="logo-span">Pass</span>
                    <i className="fa-solid fa-circle-check logo-icon"></i>
                    <span className="logo-span">mark</span>
                  </p>
                </div>
                {/* <!-- LOGO DIV END  -->

                        <!-- SIDE BAR COMPONENTS START --> */}
                <div className="sidebar-components">
                  <a className="sidebar-link-tag" href="agent-dashboard.html">
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-qrcode"></i>{" "}
                        Dashboard
                      </p>
                    </div>
                  </a>
                  <a
                    className="sidebar-link-tag"
                    href="dashboard-className.html"
                  >
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-chalkboard-user"></i>
                        My className
                      </p>
                    </div>
                  </a>
                  <a
                    className="sidebar-link-tag"
                    href="dashboard-instructor.html"
                  >
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-person-chalkboard"></i>
                        Instructors
                      </p>
                    </div>
                  </a>
                  <a className="sidebar-link-tag" href="dashboard-courses.html">
                    <div className="nav-item course-nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-book"></i>{" "}
                        Courses
                      </p>
                    </div>
                  </a>
                  <a className="sidebar-link-tag" href="">
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-comment fa-flip-horizontal"></i>
                        Message
                      </p>
                    </div>
                  </a>
                  <a className="sidebar-link-tag" href="dashboard-profile.html">
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-user"></i>{" "}
                        Profile
                      </p>
                    </div>
                  </a>
                  <a
                    className="sidebar-link-tag"
                    href="dashboard-settings.html"
                  >
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-gear"></i>{" "}
                        Settings
                      </p>
                    </div>
                  </a>

                  <img
                    className="sidebar-img"
                    src="images\dashboard-images\sidebar-img.jpg"
                    alt=""
                  />

                  <a className="sidebar-link-tag" href="">
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons sidebar-icons fa-right-from-bracket"></i>{" "}
                        Log out
                      </p>
                    </div>
                  </a>
                </div>
                {/* <!-- SIDE BAR COMPONENTS END --> */}
              </div>
            </aside>
            {/* <!-- ASIDE END  --> */}
          </div>

          <div className="col-sm-9">
            {/* <!-- SECTION START  --> */}
            <section>
              {/* <!-- PC HEADER START --> */}
              <header className="pc-header">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    {/* <!-- SEARCH BAR START --> */}
                    <div className="p-1 bg-light header-search-div rounded rounded-pill mb-4">
                      <div className="input-group">
                        <input
                          type="search"
                          placeholder="Enter search"
                          aria-describedby="nav-search-button"
                          className="form-control rounded-pill nav-search-box border-0 bg-light"
                        />
                        <div className="input-group-append">
                          <button
                            id="nav-search-button"
                            type="submit"
                            className="btn btn-link text-primary"
                          >
                            <i className="fa fa-search header-search-icon"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- SEARCH BAR END -->

                                <!-- HEADER NOTIFICATION ICONS START --> */}
                    <div className="header-icons-div">
                      <i className="fa-regular fa-bell header-notification-icon"></i>
                      <i className="fa-solid fa-gear header-notification-icon"></i>
                    </div>
                    {/* <!-- HEADER NOTIFICATION ICONS END -->

                                <!-- USER IMAGE START --> */}
                    <div className="header-user-div">
                      <div className="row">
                        <div className="col-auto header-user-text-col">
                          <p className="header-user-text">
                            <span>Mohammed</span> <br /> <span>Gadafi</span>
                          </p>
                        </div>
                        <div className="col-auto header-user-img-col">
                          <img
                            className="header-user-img"
                            src="images\landing-page-images\face3.jpg"
                            alt="user-profile-pic"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <!-- USER IMAGE END --> */}
                  </div>
                </nav>
              </header>
              {/* <!-- PC HEADER END -->


                    <!-- PHONE HEADER START --> */}
              <header className="phone-header">
                {/* <!-- PHONE START  --> */}

                <i className="fa-solid fa-bars fa-fade open-sidebar"></i>

                {/* <!-- LOGO DIV START  --> */}
                <div className="logo-div">
                  <p className="logo-text">
                    <span className="logo-span">Pass</span>
                    <i className="fa-solid fa-circle-check logo-icon"></i>
                    <span className="logo-span">mark</span>
                  </p>
                </div>
                {/* <!-- LOGO DIV END  --> */}

                <div className="phone-user-header-div">
                  {/* <!-- PHONE NOTIFICATION ICONS START --> */}
                  <div className="header-icons-div">
                    <i className="fa-regular fa-bell header-notification-icon"></i>
                    <i className="fa-solid fa-gear header-notification-icon"></i>
                  </div>
                  {/* <!-- PHONE NOTIFICATION ICONS END -->

                            <!-- USER IMAGE END  --> */}
                  <img
                    className="header-user-img"
                    src="images\landing-page-images\face3.jpg"
                    alt="user-profile-pic"
                  />
                  {/* <!-- USER IMAGE END  --> */}
                </div>

                {/* <!-- SIDE BAR COMPONENTS START --> */}
                <div className="sidebar-components">
                  <a className="sidebar-link-tag" href="agent-dashboard.html">
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-qrcode"></i>{" "}
                        Dashboard
                      </p>
                    </div>
                  </a>
                  <a
                    className="sidebar-link-tag"
                    href="dashboard-className.html"
                  >
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-chalkboard-user"></i>
                        My className
                      </p>
                    </div>
                  </a>
                  <a
                    className="sidebar-link-tag"
                    href="dashboard-instructor.html"
                  >
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-person-chalkboard"></i>
                        Instructors
                      </p>
                    </div>
                  </a>
                  <a className="sidebar-link-tag" href="dashboard-courses.html">
                    <div className="nav-item course-nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-book"></i>{" "}
                        Courses
                      </p>
                    </div>
                  </a>
                  <a className="sidebar-link-tag" href="">
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-comment fa-flip-horizontal"></i>
                        Message
                      </p>
                    </div>
                  </a>
                  <a className="sidebar-link-tag" href="dashboard-profile.html">
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-user"></i>{" "}
                        Profile
                      </p>
                    </div>
                  </a>
                  <a
                    className="sidebar-link-tag"
                    href="dashboard-settings.html"
                  >
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons fa-gear"></i>{" "}
                        Settings
                      </p>
                    </div>
                  </a>

                  <img
                    className="sidebar-img"
                    src="images\dashboard-images\sidebar-img.jpg"
                    alt=""
                  />

                  <a className="sidebar-link-tag" href="">
                    <div className="nav-item">
                      <p className="nav-link-text">
                        <i className="fa-solid sidebar-icons sidebar-icons fa-right-from-bracket"></i>{" "}
                        Log out
                      </p>
                    </div>
                  </a>
                </div>
                {/* <!-- SIDE BAR COMPONENTS END -->
                        <!-- PHONE END  --> */}
              </header>
              {/* <!-- PHONE HEADER END -->
                    <!-- HEADER END  --> */}

              <div className="container-fluid body-content">
                {/* <!-- MY STUDENT START --> */}
                <div className="agent-row row">
                  <div className="col-6">
                    <p className="agent-student-header">My students</p>
                  </div>
                  <div className="col-6">
                    <a href="sign-up.html">
                      <button
                        type="button"
                        className="btn btn-primary add-new-student-button"
                      >
                        Add new student
                      </button>
                    </a>
                  </div>
                </div>

                <div className="agent-student-div">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                      <div className="agent-student-card card">
                        <img
                          src="images\landing-page-images\face0.jpg"
                          className="card-img-top student-image"
                          alt="student image"
                        />
                        <div className="card-body">
                          <p className="student-name">Isiah Sylvester</p>
                          <a
                            href="dashboard.html"
                            className="btn btn-primary agent-student-card-link"
                          >
                            Login
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="agent-student-card card">
                        <img
                          src="images\landing-page-images\face0.jpg"
                          className="card-img-top student-image"
                          alt="student image"
                        />
                        <div className="card-body">
                          <p className="student-name">Isiah Sylvester</p>
                          <a
                            href="dashboard.html"
                            className="btn btn-primary agent-student-card-link"
                          >
                            Login
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="agent-student-card card">
                        <img
                          className="student-image card-img-top"
                          src="images\landing-page-images\face0.jpg"
                          alt="student image"
                        />
                        <div className="card-body">
                          <p className="student-name">Isiah Sylvester</p>
                          <a
                            href="dashboard.html"
                            className="btn btn-primary agent-student-card-link"
                          >
                            Login
                          </a>
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
};

export default index;
