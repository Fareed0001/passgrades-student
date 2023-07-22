import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  BsFillPlayFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="landingPageDiv">
        <Head>
          <title>passgrades</title>
          <meta name="description" content="passgrades, e-learning, online learning now in your finger tips" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="images/logo/favicon.ico" />
        </Head>
        <main className={`${styles.main} ${inter.className} ]`}>
          <section className="landingPage">
            <header>
              <nav>
                <nav className="navbar navbar-expand-lg ">
                  <div className="container">
                    <div className="nav-div-0">
                      <p>
                        <span>
                          <a className="nav-0-link nav-1-link0" href="#courses">
                            Courses
                          </a>
                        </span>
                        <span>
                          <a
                            className="nav-0-link nav-1-link1"
                            href="#instructors"
                          >
                            Teachers
                          </a>
                        </span>
                        {/* <span>
                        <a
                          className="nav-0-link nav-1-link2"
                          href="#testimonies"
                        >
                          Comments
                        </a>
                      </span> */}
                      </p>
                    </div>
                    <div className="nav-div-1">
                      <p className="index-logo-text">
                        <BsFillCheckCircleFill className="index-check-icon"/>
                        <span className="index-logo-span0">Pass</span>
                        <span className="index-logo-span0">Grades</span>
                      </p>
                    </div>
                    <div className="nav-div-2">
                      <Link href="/Signin">
                        <button type="button" className="nav-button nav-sign-in">
                          Sign in
                        </button>
                      </Link>
                      <Link href="/Signup">
                        <button type="button" className="nav-button nav-sign-up">
                          Sign up
                        </button>
                      </Link>
                    </div>
                  </div>
                </nav>
              </nav>
            </header>

            {/* <!-- First DIV START --> */}
            <div className="first-div container">
              <div className="row">
                <div className="first-div-col1 col-md order-md-2">
                  <img
                    className="first-div-gif"
                    src="images\landing-page-images\e-learning.gif"
                    alt="e-learning gif"
                  />
                </div>
                <div className="first-div-col0 col-md order-md-1">
                  <p className="first-div-title-text">your e-learning partner</p>
                  <p className="first-div-header">
                    Online Learning Now In Your Finger Tips
                  </p>
                  <p className="first-div-sub-header">
                    Passgrades is an online learning platform that offers various
                    premium courses for your skill development.
                  </p>
                  <div className="first-div-buttons">
                    <Link href="Signup">
                      <button type="button" className="nav-button try-now-button">
                        Try now
                      </button>
                    </Link>
                    <Link href="Signup">
                      <button
                        type="button"
                        className="nav-button play-video-button"
                      >
                        <BsFillPlayFill className="h-6 w-6 animate-pulse play-video-icon" /> Play video
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- FIRST DIV END  --> */}

            {/* <!-- SECOND DIV START --> */}
            <div className="second-div container" id="courses">
              <p className="section-header second-div-header">
                Our Popular Courses
              </p>
              <div className="second-div-card-div row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
                <div className="second-div-card col-md-2">
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\business-vector.png"
                    alt="business-icon"
                  />
                  <p className="second-div-text">
                    IELTS general
                  </p>
                </div>
                <div className="second-div-card  col-md-2">
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\design-vector.png"
                    alt="design-icon"
                  />
                  <p className="second-div-text">
                    IELTS academia
                  </p>
                </div>
                <div className="second-div-card  col-md-2">
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\writing-vector.png"
                    alt="writing-icon"
                  />
                  <p className="second-div-text">
                    Selt Academia
                  </p>
                </div>
                <div className="second-div-card  col-md-2">
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\web-development-vector.png"
                    alt="web-dev-icon"
                  />
                  <p className="second-div-text">
                    Gre Academia
                  </p>
                </div>
                <div className="second-div-card  col-md-2">
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\storage-vector.png"
                    alt="cloud-storage-icon"
                  />
                  <p className="second-div-text">
                    PTE general
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- SECOND DIV END -->

    <!-- THIRD DIV START --> */}
            <div className="third-div container">
              <div className="row">
                <div className="col-12 col-lg-6 third-div-col0">
                  <img
                    className="third-div-img"
                    src="images\landing-page-images\scale-up.png"
                    alt="scale-up.jpg"
                  />
                </div>
                <div className="col-12 col-lg-6 third-div-col1">
                  <p className="section-header third-div-header">
                    Various types of courses to upscale your skill
                  </p>
                  <p className="section-text third-div-text">
                    Online learning allows the student and teacher to set their
                    own learning pace, and there's the added flexibility of
                    setting a schedule tat fits everyone.
                  </p>
                  <Link href="/Signup">
                    <button type="button" className="nav-button try-now-button">
                      <IoMdAdd className="mr-3 third-div-icon" />
                      <span> Enroll now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!--THIRD DIV END  -->

    <!-- FORTH DIV START  --> */}
            <div className="forth-div container" id="instructors">
              <p className="section-header forth-div-header">
                Our Expert
                <span className="forth-div-header-colored">Instructor</span>
              </p>
              <div className="forth-div-card-div">

                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="forth-div-card card">
                      <img
                        src="images\landing-page-images\design-instructor.jpg"
                        className="forth-div-card-img card-img-top"
                        alt="..."
                      />
                      <div className="forth-div-card-body">
                        <p className="forth-div-card-header">
                          Kafayat Asus
                          <span className="forth-div-card-icon">
                            <i className="fa-brands fa-figma"></i>
                          </span>
                        </p>
                        <p className="forth-div-card-sub-header">
                          TOEFL Instructor
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="forth-div-card card">
                      <img
                        src="images\landing-page-images\developer-instructor.jpg"
                        className="forth-div-card-img card-img-top"
                        alt="..."
                      />
                      <div className="forth-div-card-body">
                        <p className="forth-div-card-header">
                          Farid Ibrahim
                          <span className="forth-div-card-icon">
                            <i className="fa-solid fa-code"></i>
                          </span>
                        </p>
                        <p className="forth-div-card-sub-header">
                          GMAT Instructor
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="forth-div-card card">
                      <img
                        src="images\landing-page-images\writing-instructor.jpg"
                        className="forth-div-card-img card-img-top"
                        alt="landing page image"
                      />
                      <div className="forth-div-card-body">
                        <p className="forth-div-card-header">
                          Isiah Vincent
                          <span className="forth-div-card-icon">
                            <i className="fa-solid fa-marker"></i>
                          </span>
                        </p>
                        <p className="forth-div-card-sub-header">SAT Instructor</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="forth-div-card card">
                      <img
                        src="images\landing-page-images\business-instructure.jpg"
                        className="forth-div-card-img card-img-top"
                        alt="..."
                      />
                      <div className="forth-div-card-body">
                        <p className="forth-div-card-header">
                          Aaron Abraham
                          <span className="forth-div-card-icon">
                            <i className="fa-solid fa-user-tie"></i>
                          </span>
                        </p>
                        <p className="forth-div-card-sub-header">Business Instructor</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- FORTH DIV END  -->

    <!-- FIFTH DIV START  --> */}
            <div className="fifth-div container">
              <div className="row">
                <div className="col-md-12 col-lg-6 fifth-div-col0">
                  <img
                    className="fifth-div-img"
                    src="images\landing-page-images\track-learning.gif"
                    alt="scale-up.jpg"
                  />
                </div>
                <div className="col-md-12 col-lg-6 fifth-div-col1">
                  <p className="section-header fifth-div-header">
                    Track your learning and impove yourself more
                  </p>
                  <p className="section-text fifth-div-text">
                    Online learning allows the student and teacher to set their
                    own learning pace, and there's the added flexibility of
                    setting a schedule tat fits everyone.
                  </p>
                  <Link href="/Signup">
                    <button type="button" className="nav-button try-now-button">
                      <IoMdAdd className="mr-3  third-div-icon" />
                      <span> Enroll now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- FIFTH DIV END  -->

    <!-- SIXTH DIV START  --> */}
            {/* <div className="sixth-div container" id="testimonies">
            <p className="section-header sixth-div-header">
              What <span className="sixth-div-header-span">People</span> Say
            </p> */}

            {/* <!-- carousel  --> */}
            {/* <section className="services">
              <div className="circle--slider">
                <div className="rotate--circle">
                  <ul className="circle--rotate" id="circle--rotate">
                    <li className="block">
                      <div className="sixth-div-img-div">
                        <img
                          className="six-div-img"
                          src="images\landing-page-images\face0.jpg"
                          alt=""
                        />
                        <span></span>
                      </div>
                    </li>
                    <li className="block">
                      <div className="sixth-div-img-div">
                        <img
                          className="six-div-img"
                          src="images\landing-page-images\face1.jpg"
                          alt=""
                        />
                        <span></span>
                      </div>
                    </li>
                    <li className="block">
                      <div className="sixth-div-img-div">
                        <img
                          className="six-div-img"
                          src="images\landing-page-images\face2.jpg"
                          alt=""
                        />
                        <span></span>
                      </div>
                    </li>
                    <li className="block">
                      <div className="sixth-div-img-div">
                        <img
                          className="six-div-img"
                          src="images\landing-page-images\face3.jpg"
                          alt=""
                        />
                        <span></span>
                      </div>
                    </li>
                    <li className="block">
                      <div className="sixth-div-img-div">
                        <img
                          className="six-div-img"
                          src="images\landing-page-images\face4.jpg"
                          alt=""
                        />
                        <span></span>
                      </div>
                    </li>
                  </ul>
                  <div className="animate-wrapper">
                    <div className="animate">
                      <div className="animate-img">
                        <div className="animate-img__in">
                          <div className="animate-more">
                            <div className="animate-title">
                              <p className="carousel-text">
                                This is the best place I have gotten an online
                                education from
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="animate">
                      <div className="animate-img">
                        <div
                          className="animate-img__in"
                          data-image="&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                        >
                          <div className="animate-more">
                            <div className="animate-title">
                              <p className="carousel-text">
                                This web portal is too soft for real. The web
                                developer should be paid more
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="animate">
                      <div className="animate-img">
                        <div
                          className="animate-img__in"
                          data-image="&amp;auto=format&amp;fit=crop&amp;w=614&amp;q=80"
                        >
                          <div className="animate-more">
                            <div className="animate-title">
                              <p className="carousel-text">
                                At this point, I believe Fareed is not only
                                good. He is the best
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="animate">
                      <div className="animate-img">
                        <div
                          className="animate-img__in"
                          data-image="&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                        >
                          <div className="animate-more">
                            <div className="animate-title">
                              <p className="carousel-text">
                                In need of quality education to study abroad.
                                Use this web portal
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="animate">
                      <div className="animate-img">
                        <div
                          className="animate-img__in"
                          data-image="&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                        >
                          <div className="animate-more">
                            <div className="animate-title">
                              <p className="carousel-text">
                                Finally, a good place to gain international
                                level standard knowledge
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div> */}
            {/* <!-- carousel  -->
    <!-- SIXTH DIV END  -->

    <!-- SEVENTH DIV START  --> */}
            <div className="seventh-div container">
              <div className="seventh-div-header-div">
                <p className="seventh-div-header">
                  Register today and get credible information, latest news,
                  courses, resources and alot more what 
                  <BsFillCheckCircleFill className="seventh-check-icon"/>
                  PassGrades has to offer.
                </p>
              </div>
              <div className="row">
                <div className="seventh-div-col0 col-md">
                  <img
                    className="seventh-div-img"
                    src="images\landing-page-images\register-gif.gif"
                    alt="register-gif"
                  />
                </div>
                <div className="seventh-div-col1 col-md">
                  <Link href="/Signup">
                    <button
                      type="button"
                      className="nav-button seventh-div-button"
                    >
                      Register now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- SEVENTH DIV END  --> */}
          </section>
        </main>
      </div>
    </>
  );
}
