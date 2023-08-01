import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { BsFillPlayFill, BsFillCheckCircleFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="landingPageDiv">
        <Head>
          <title>
            Passgrades E-Learning: Prepare for Success in International Exams |
            SAT, IELTS, PTE, GMAT, GRE, OET, SELT
          </title>
          <meta
            name="description"
            content="Prepare for SAT, IELTS, PTE, GMAT, GRE, OET, and SELT exams with Passgrade - Your Global E-Learning Partner. Get comprehensive study materials, expert instructors, and personalized learning for success in international tests."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/logo/favicon.ico" />
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
                            Tutors
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="nav-div-1">
                      <p className="index-logo-text flex">
                        <BsFillCheckCircleFill className="index-check-icon" />
                        <span className="index-logo-span0">Pass</span>
                        <span className="index-logo-span0">Grades</span>
                      </p>
                    </div>
                    <section className="nav-div-2">
                      <button
                        type="button"
                        className="nav-button nav-sign-in"
                        onClick={() => signIn()}
                      >
                        Sign in
                      </button>
                      <Link href="/auth/signup">
                        <button
                          type="button"
                          className="nav-button nav-sign-up"
                        >
                          Sign up
                        </button>
                      </Link>
                    </section>
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
                  <h5 className="first-div-title-text">
                    your e-learning partner
                  </h5>
                  <h1 className="first-div-header">
                    Master Your Success in International Exams.
                  </h1>
                  <p className="first-div-sub-header">
                    PassGrades: Your Gateway to Success in international exams.
                    Expert exam prep. Excel in SAT, IELTS, PTE, GMAT, GRE, OET,
                    and more worldwide. Your journey starts here!
                  </p>

                  <section className="flex gap-x-2">
                    <Link href="Signup">
                      <button
                        type="button"
                        className="nav-button try-now-button text-"
                      >
                        Try now
                      </button>
                    </Link>
                    <Link href="Signup">
                      <button
                        type="button"
                        className="nav-button play-video-button flex "
                      >
                        <BsFillPlayFill className="h-6 w-6 animate-pulse play-video-icon" />{" "}
                        Play video
                      </button>
                    </Link>
                  </section>
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
                <div
                  className="second-div-card col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#firstmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\business-vector.png"
                    alt="business-icon"
                  />
                  <p className="second-div-text">IELTS</p>
                </div>
                <div
                  className="modal fade"
                  id="firstmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          IELTS
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        The International English Language Testing System
                        (IELTS) is a globally recognized English language
                        proficiency exam. It assesses candidates' language
                        skills in four modules: listening, reading, writing, and
                        speaking. Designed for individuals seeking educational
                        or employment opportunities in English-speaking
                        countries, IELTS certifies language competence at
                        various levels. Universities, immigration authorities,
                        and employers rely on IELTS scores to gauge applicants'
                        language abilities accurately. By providing a
                        comprehensive evaluation of English language
                        proficiency, IELTS opens doors to international
                        education, professional growth, and global mobility,
                        enabling individuals to embrace new cultures and excel
                        in diverse environments.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="second-div-card  col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#secondmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\design-vector.png"
                    alt="design-icon"
                  />
                  <p className="second-div-text">GMAT</p>
                </div>
                <div
                  className="modal fade"
                  id="secondmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          GMAT
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        The Graduate Management Admission Test (GMAT) is a
                        standardized exam specifically designed for business
                        school applicants. GMAT evaluates analytical writing,
                        integrated reasoning, quantitative, and verbal reasoning
                        skills, showcasing candidates' aptitude for advanced
                        management education. Recognized and respected by
                        business schools worldwide, GMAT assists in selecting
                        qualified candidates, equipping them with the skills
                        necessary for success in business and management
                        careers. By enabling aspiring professionals to
                        demonstrate their intellectual readiness and
                        problem-solving abilities, GMAT paves the way for
                        distinguished business education and influential
                        leadership roles.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="second-div-card col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#thirdmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\writing-vector.png"
                    alt="writing-icon"
                  />
                  <p className="second-div-text">IELTS UKVI</p>
                </div>
                <div
                  className="modal fade"
                  id="thirdmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          IELTS UKVI
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        IELTS UKVI (IELTS for UK Visas and Immigration) is a
                        variant of the International English Language Testing
                        System specifically designed for individuals applying
                        for UK visas and certain immigration-related purposes.
                        IELTS UKVI evaluates language proficiency in listening,
                        reading, writing, and speaking, adhering to the UK Home
                        Office's strict requirements. Recognized and accepted by
                        UK Visas and Immigration, IELTS UKVI certifies
                        applicants' English language abilities, ensuring they
                        possess the necessary communication skills to
                        successfully integrate into British society, work, or
                        study. By demonstrating their language competence
                        through IELTS UKVI, applicants can navigate the visa
                        application process with confidence, unlocking
                        opportunities to live, work, or study in the United
                        Kingdom.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="second-div-card  col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#forthmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\web-development-vector.png"
                    alt="web-dev-icon"
                  />
                  <p className="second-div-text">GRE</p>
                </div>
                <div
                  className="modal fade"
                  id="forthmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          GRE
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        The Graduate Record Examinations (GRE) is a widely
                        accepted standardized test for graduate school
                        admissions. GRE assesses critical thinking, analytical
                        writing, verbal reasoning, and quantitative reasoning
                        skills, providing graduate programs with valuable
                        insights into candidates' academic potential. By
                        showcasing candidates' abilities to tackle complex
                        problems and embrace academic challenges, GRE plays a
                        crucial role in shaping the future of graduate students
                        across various disciplines. With GRE scores, students
                        gain access to a multitude of graduate programs,
                        fostering intellectual growth and professional success
                        on a global scale.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="second-div-card  col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#fifthmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\storage-vector.png"
                    alt="cloud-storage-icon"
                  />
                  <p className="second-div-text">PTE</p>
                </div>
                <div
                  className="modal fade"
                  id="fifthmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          PTE
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Pearson Test of English (PTE) is an innovative
                        computer-based English language assessment widely
                        accepted by universities, governments, and employers
                        worldwide. PTE evaluates candidates' reading, writing,
                        listening, and speaking skills through interactive tasks
                        and real-life scenarios. With swift results and unbiased
                        evaluation, PTE offers an accessible and reliable
                        platform for individuals aiming to study, work, or
                        immigrate to English-speaking countries. As a modern,
                        efficient, and accurate language proficiency test, PTE
                        empowers learners to demonstrate their language
                        abilities effectively, unlocking abundant international
                        opportunities and enriching personal and professional
                        lives.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <section
                  className="second-div-card  col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#sixthmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\book-vector.png"
                    alt="book-icon"
                  />
                  <p className="second-div-text">OET</p>
                </section>
                <div
                  className="modal fade"
                  id="sixthmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          OET
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Occupational English Test (OET) is an English language
                        proficiency test designed for healthcare professionals
                        seeking to work or study in English-speaking countries.
                        Tailored to specific healthcare sectors, OET evaluates
                        language skills, focusing on medical terminology and
                        scenarios relevant to healthcare practice. Recognized by
                        regulatory bodies, hospitals, and universities, OET
                        ensures healthcare professionals' linguistic competence,
                        providing safe and effective communication with patients
                        and colleagues. With OET certification, healthcare
                        professionals embark on rewarding careers, making a
                        positive impact on patient care and contributing
                        significantly to the global healthcare industry.{" "}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="second-div-card col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#seventhmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\acorn-vector.png"
                    alt="acorn-vector"
                  />
                  <p className="second-div-text">SAT</p>
                </div>
                <div
                  className="modal fade"
                  id="seventhmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          SAT
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        The Scholastic Assessment Test (SAT) is a widely
                        recognized standardized exam designed to assess a
                        student's readiness for college. It evaluates critical
                        reading, writing, and math skills, enabling universities
                        to gauge applicants' academic abilities and potential.
                        The SAT provides a fair and objective measure of
                        students' knowledge, fostering educational opportunities
                        and guiding colleges in their admission decisions. As a
                        crucial component of the college application process, a
                        strong SAT score enhances prospects for admission to
                        reputable institutions worldwide, empowering students to
                        pursue their academic aspirations confidently.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="second-div-card col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#eightmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\language-vector.png"
                    alt="language-icon"
                  />
                  <p className="second-div-text">LANGUAGE</p>
                </div>
                <div
                  class="modal fade"
                  id="eightmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          LANGUAGE PROGRAMS
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        Language programs offer immersive and comprehensive
                        language learning experiences for individuals of all
                        proficiency levels. From beginners to advanced learners,
                        language programs focus on developing speaking,
                        listening, reading, and writing skills, fostering
                        cultural understanding and fluency. These programs cater
                        to diverse interests, including general language
                        learning, business communication, academic preparation,
                        and exam-focused courses like IELTS, TOEFL, or Cambridge
                        exams. By providing a supportive and interactive
                        learning environment, language programs empower learners
                        to overcome language barriers, embrace new cultures, and
                        thrive in today's interconnected world. Whether for
                        personal enrichment, academic pursuits, or professional
                        growth, language programs open doors to global
                        opportunities and enrich lives through effective
                        communication and cross-cultural appreciation.
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="second-div-card  col-md-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#ninthmodal"
                >
                  <img
                    className="second-div-icon"
                    src="images\landing-page-images\eng-vector.png"
                    alt="english-icon"
                  />
                  <p className="second-div-text">PTE UKVI</p>
                </div>
                <div
                  className="modal fade"
                  id="ninthmodal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          PTE UKVI
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        PTE UKVI (Pearson Test of English for UK Visas and
                        Immigration) is a specialized version of the Pearson
                        Test of English designed for individuals seeking to
                        apply for UK visas or British citizenship. PTE UKVI
                        assesses English language proficiency in listening,
                        reading, speaking, and writing, adhering to the UK Home
                        Office's specific requirements for immigration purposes.
                        Recognized and accepted by UK Visas and Immigration, PTE
                        UKVI provides a reliable measure of applicants' language
                        abilities, ensuring they possess the necessary
                        communication skills to adapt and thrive in
                        English-speaking environments in the UK. By obtaining a
                        satisfactory PTE UKVI score, applicants fulfill the
                        language proficiency criteria for their visa
                        application, enabling them to pursue their desired
                        endeavors in the United Kingdom confidently.{" "}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
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
                    Online learning allows the student and tutor to set their
                    own learning pace, and there's the added flexibility of
                    setting a schedule tat fits everyone.
                  </p>
                  <Link href="/auth/signup">
                    <button
                      type="button"
                      className="nav-button try-now-button flex items-center justify-center gap-x-2"
                    >
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
                <span className="forth-div-header-colored"> Tutors</span>
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
                        <p className="forth-div-card-sub-header">
                          SAT Instructor
                        </p>
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
                        <p className="forth-div-card-sub-header">
                          Business Instructor
                        </p>
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
                    Online learning allows the student and tutor to set their
                    own learning pace, and there's the added flexibility of
                    setting a schedule tat fits everyone.
                  </p>
                  <Link href="/auth/signup">
                    <button
                      type="button"
                      className="nav-button try-now-button flex items-center justify-center"
                    >
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
                  <BsFillCheckCircleFill className="seventh-check-icon" />
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
                  <Link href="/auth/signup">
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