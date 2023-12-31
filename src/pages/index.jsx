import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { BsFillCheckCircleFill, BsFillSignIntersectionFill } from "react-icons/bs";
import { BiSolidLogInCircle } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".second-div-card");
    
    cards.forEach(function (card, index) {
      card.addEventListener("click", function () {
        const modalId = "myModal" + (index + 1);
        const modal = document.getElementById(modalId);
        
        if (modal) {
          modal.style.display = "block";
        }
      });
    });
    
    // Close modal when the close button is clicked
    const closeButtons = document.querySelectorAll(".modal .btn-close");
    
    closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const modal = button.closest(".modal");
        
        if (modal) {
          modal.style.display = "none";
        }
      });
    });
  }, []);

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
            content="Prepare for SAT, IELTS, PTE, GMAT, GRE, OET, and SELT exams with Passgrade - Your Global E-Learning Partner. Get comprehensive study materials, expert instructors, and personalized learning for success in international tests. Ielts online class
Ielts registration, 
Ielts tutor,
Ielts material,
Ielts cost,
Ielts classes,
ielts classes,
Ielt ukvi online class,
Ielts ukvi registration, 
Ielts ukvi tutor,
Ielts ukvi material,
Ielts ukvi cost,
Ielts ukvi classes,
Ielts ukvi classes,
PTE online class,
PTE registration, 
PTE tutor,
PTE material,
PTE cost,
PTE classes,
PTE classes,
PTE UKVI online class,
PTE UKVI registration, 
PTE UKVI tutor,
PTE UKVI material,
PTE UKVI cost,
PTE UKVI classes,
PTE UKVI classes,
SAT online class,
SAT registration, 
SAT tutor,
SAT material,
SAT cost,
SAT classes,
SAT classes,
GRE online class,
GRE registration, 
GRE tutor,
GRE material,
GRE cost,
GRE classes,
GRE classes,
GMAT online class,
GMAT registration,
GMAT tutor,
GMAT material,
GMAT cost,
GMAT classes,
GMAT classes,
OET online class,
OET registration, 
OET tutor,
OET material,
OET cost,
OET classes,
OET classes,
ielts cost,
ielts material,
ielts tutor,
ielts registration,
ielts online class,
ielts courses,
ielts coaching near me,
ielts online learning,
ielts classes near me,
ielts preparation course,
ielts coaching,
ielts coaching centre near me,
ielts test booking,
ielts booking,
ielts training near me,
ielts exam booking,
ielts course near me,
ielts exam registration,
british council ielts registration,
ielts english course,
ielts online coaching,
ielts online course,
british council ielts test booking,
ielts date booking,
ielts ukvi registration,
ielts ukvi classes,
ielts ukvi cost,
ukvi ielts booking,
register ielts ukvi,
ukvi ielts fees,
ukvi registration,
ielts ukvi test booking,
register for ukvi ielts,
ukvi ielts exam booking,
ielts ukvi exam booking,
register for ielts ukvi,
ielts ukvi general test booking,
ielts ukvi general booking,
ielts ukvi general registration,
ielts ukvi academic registration,
ielts ukvi exam fees,
ielts ukvi price,
book ielts ukvi academic,
ukvi academic ielts exam booking,
book ielts ukvi exam,
book ielts ukvi test,
book ukvi ielts test,
ielts ukvi academic booking,
ielts ukvi book test,
pte registration,
pte classes,
pte cost,
pte material,
pte tutor,
pte online class,
prepare for pte,
pte classes near me,
pte practice test,
pte coaching near me,
pte practice test free,
pte exam fee,
pte online coaching,
pte courses,
pte academic practice test,
pte practice material,
pte online course,
pte practice test online,
pte training near me,
pte course near me,
pte online learning,
pte study material,
pte preparation material,
best pte coaching near me,
pte online coaching free,
pte ukvi cost,
pte ukvi test fee,
pte ukvi exam fees,
pte academic ukvi price,
pearson pte academic ukvi price,
ukvi pte test fees,
pte academic ukvi cost,
pte academic ukvi fees,
pte ukvi fees,
ukvi pte exam fees,
ukvi pte fees,
gre classes,
gre cost,
gre material,
gre tutor,
gre registration,
gre online class,
gre prep course,
gre tutors near me,
gre exam fee,
gre classes near me,
best gre prep course,
gre prep classes,
gre online coaching,
gre prep course near me,
gre prep course online,
gre study materials,
gre prep classes near me,
gre study course,
gre test prep courses,
gre courses near me,
gre test prep classes,
in person gre prep course,
gre online course,
gre preparation course,
best gre tutors,
gmat classes,
gmat cost,
gmat material,
gmat tutor,
gmat registration,
gmat online class,
gmat prep course,
gmat coaching,
gmat tutors near me,
best gmat prep courses,
gmat study guide,
gmat classes near me,
gmat online coaching
gmat study material,
gmat courses online,
gmat coaching near me,
best gmat courses,
gmat preparation course,
register for gmat,
gmat study course,
gmat exam fees,
gmat private tutor,
gmat prep classes,
best gmat tutors,
best gmat coaching,
oet classes,
oet cost,
oet material,
oet tutor,
oet registration,
oet online class,
oet sample test,
oet exam fees,
oet classes near me,
oet preparation course,
oet reading materials,
oet online course,
oet online coaching,
oet practice test,
oet reading sample,
oet classes online,
oet online course for nurses,
oet course near me,
oet online classes for nurses,
oet training near me,
oet course for nurses,
oet preparation course near me,
oet tutor near me,
oet study material,
oet preparation course online,
scholastic aptitude test,
scholastic aptitude test registration,
scholastic aptitude test math,
scholastic assessment test,
sat scholastic aptitude test,
scholastic aptitude test reading,
aptitude scholastic test,
aptitude test sat,
sat scholastic,
sat scholastic assessment test,
scholastic ability test,
scholastic aptitude,
scholastic aptitude test 2021,
scholastic aptitude test 2022,
scholastic aptitude test official website,
scholastic aptitude test questions,
scholastic aptitude test scores,
scholastic aptitude test website,
scholastic assessment,
scholastic sats tests,
scholastic test,
standardised aptitude test,
test scholastic,
the scholastic aptitude test,
scholarship,
scholarships for college,
scholarship websites,
scholarship programs,
online scholarships,
find scholarships,
new scholarship,
scholarship site,
scholarships for,
scholarship official website,
a scholarship,
the scholarship,
How can I get international scholarships?,
Which countries offer 100 scholarship?,
Which country offer free scholarship?,
How to find Canadian scholarships?,
international scholarships for undergraduates,
International scholarships for international students,
international scholarships fully funded,
international scholarships uk,
international scholarships for masters,
international scholarships 2023,
international scholarships for high school students,
government of canada international scholarships program,
How can I get full scholarship in Germany?,
Which scholarship is easy in Germany?,
How much CGPA is required for scholarship in Germany?,
How can I study Germany for free?,
German scholarships for international students,
fully funded scholarships in germany for international students 2023,
German scholarships for international students 2023,
fully funded scholarship in germany for undergraduate,
erasmus scholarship programs in germany,
german scholarships for undergraduate,
germany scholarships for african students,
daad scholarship,
Can international students get scholarships in Europe?,
How to get scholarship in European University?,
Which country gives the most scholarships to international students?,
Can international student get full scholarship?,
fully funded scholarships in europe for international students 2023, European scholarships for international students in europe, European scholarships for international student 2023, fully funded scholarships in europe for international students 2023-2024, fully funded scholarship in europe for international students, undergraduate scholarships for international students in europe, fully funded undergraduate scholarships for international students in europe, scholarships in europe for african students
"
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
                      <Link href="/auth/Signin">
                        <button
                          type="button"
                          className="nav-button nav-sign-in"
                        >
                          Sign in
                        </button>
                      </Link>
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
                  <Image
                    className="first-div-gif"
                    src="/images/landing-page-images/e-learning.gif"
                    alt="e-learning gif" width={600} // Adjust the width to the desired size
                    height={600} // Adjust the height to the desired size
                    priority
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

                  <section className="">
                    <Link href="/auth/Signin">
                      <button
                        type="button"
                        className="nav-button try-now-button signup-link"
                      >
                        <BiSolidLogInCircle className="animate-pulse play-video-icon0" />{" "}
                        Sign in
                      </button>
                    </Link>
                    <Link href="/auth/signup">
                      <button
                        type="button"
                        className="nav-button play-video-button signup-link"
                      >
                        <BsFillSignIntersectionFill className="animate-pulse play-video-icon" />{" "}
                        Sign up
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
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/business-vector.png"
                    alt="business-icon"
                  />

                  <p className="second-div-text">IELTS</p>
                </div>
                <div
                  className="modal fade"
                  id="firstmodal"
                  tabIndex="-1"
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
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/design-vector.png"
                    alt="design-icon"
                  />

                  <p className="second-div-text">GMAT</p>
                </div>
                <div
                  className="modal fade"
                  id="secondmodal"
                  tabIndex="-1"
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
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/writing-vector.png"
                    alt="writing-icon"
                  />

                  <p className="second-div-text">IELTS UKVI</p>
                </div>
                <div
                  className="modal fade"
                  id="thirdmodal"
                  tabIndex="-1"
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
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/web-development-vector.png"
                    alt="web-dev-icon"
                  />

                  <p className="second-div-text">GRE</p>
                </div>
                <div
                  className="modal fade"
                  id="forthmodal"
                  tabIndex="-1"
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
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/storage-vector.png"
                    alt="cloud-storage-icon"
                  />

                  <p className="second-div-text">PTE</p>
                </div>
                <div
                  className="modal fade"
                  id="fifthmodal"
                  tabIndex="-1"
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
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/book-vector.png"
                    alt="book-icon"
                  />

                  <p className="second-div-text">OET</p>
                </section>
                <div
                  className="modal fade"
                  id="sixthmodal"
                  tabIndex="-1"
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
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/acorn-vector.png"
                    alt="acorn-vector"
                  />

                  <p className="second-div-text">SAT</p>
                </div>
                <div
                  className="modal fade"
                  id="seventhmodal"
                  tabIndex="-1"
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
                  data-bs-target="#eightmodal"
                >
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/language-vector.png"
                    alt="language-icon"
                  />

                  <p className="second-div-text">LANGUAGE</p>
                </div>
                <div
                  className="modal fade"
                  id="eightmodal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          LANGUAGE PROGRAMS
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
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
                  data-bs-target="#ninthmodal"
                >
                  <Image
                    height={100}
                    width={100}
                    className="second-div-icon"
                    src="/images/landing-page-images/eng-vector.png"
                    alt="english-icon"
                  />

                  <p className="second-div-text">PTE UKVI</p>
                </div>
                <div
                  className="modal fade"
                  id="ninthmodal"
                  tabIndex="-1"
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
                  <Image
                    className="third-div-img"
                    src="/images/landing-page-images/scale-up.png"
                    alt="scale-up.jpg"
                    width={600} // Adjust the width to the desired size
                    height={600} // Adjust the height to the desired size
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
                  <Link href="/auth/signup" className="signup-link">
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
                <span className="forth-div-header-colored"> Tutors</span>
              </p>
              <div className="forth-div-card-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="forth-div-card card">
                      <Image
                        src="/images/landing-page-images/instructor1.jpg"
                        className="forth-div-card-img card-img-top"
                        alt="landing page image"
                        width={600} // Adjust the width to the desired size
                        height={600} // Adjust the height to the desired size
                      />
                      <div className="forth-div-card-body">
                        <p className="forth-div-card-header">
                          Kafayat Asus
                          <span className="forth-div-card-icon">
                            <i className="fa-brands fa-figma"></i>
                          </span>
                        </p>
                        <p className="forth-div-card-sub-header">
                          IELTS Instructor
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="forth-div-card card">
                      <Image
                        src="/images/landing-page-images/instructor.jpg"
                        className="forth-div-card-img card-img-top"
                        alt="landing page image"
                        width={600} // Adjust the width to the desired size
                        height={600} // Adjust the height to the desired size
                      />

                      <div className="forth-div-card-body">
                        <p className="forth-div-card-header">
                          Isiah Vincent
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
                      <Image
                        src="/images/landing-page-images/instructor6.jpg"
                        className="forth-div-card-img card-img-top"
                        alt="landing page image"
                        width={600} // Adjust the width to the desired size
                        height={600} // Adjust the height to the desired size
                      />

                      <div className="forth-div-card-body">
                        <p className="forth-div-card-header">
                          Farid Ibrahim
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
                      <Image
                        src="/images/landing-page-images/instructor3.jpg"
                        className="forth-div-card-img card-img-top"
                        alt="landing page image"
                        width={600} // Adjust the width to the desired size
                        height={600} // Adjust the height to the desired size
                      />

                      <div className="forth-div-card-body">
                        <p className="forth-div-card-header">
                          Arjun Rasheed
                          <span className="forth-div-card-icon">
                            <i className="fa-solid fa-user-tie"></i>
                          </span>
                        </p>
                        <p className="forth-div-card-sub-header">
                          PTE Instructor
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
                  <Image
                    className="fifth-div-img"
                    src="/images/landing-page-images/track-learning.gif"
                    alt="scale-up.jpg"
                    width={600} // Adjust the width to the desired size
                    height={600} // Adjust the height to the desired size
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
                  <Link href="/auth/signup" className="signup-link">
                    <button type="button" className="nav-button try-now-button">
                      <IoMdAdd className="mr-3  third-div-icon" />
                      <span> Enroll now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- FIFTH DIV END  -->

    <!-- SEVENTH DIV START  --> */}
            <div className="seventh-div container">
              <div className="seventh-div-header-div">
                <p className="seventh-div-header">
                  Register today and get credible information, latest news,
                  courses, resources and alot more what
                  <span className="seventh-div-span">
                    <BsFillCheckCircleFill className="seventh-check-icon" />
                    PassGrades has to offer.
                  </span>
                </p>
              </div>
              <div className="row">
                <div className="seventh-div-col0 col-md">
                  <Image
                    className="seventh-div-img"
                    src="/images/landing-page-images/register-gif.gif"
                    alt="register-gif"
                    width={100} // Adjust the width to the desired size
                    height={100} // Adjust the height to the desired size
                  />
                </div>
                <div className="seventh-div-col1 col-md">
                  <Link href="/auth/signup" className="signup-link">
                    <button
                      type="button"
                      className="nav-button seventh-div-button"
                    >
                      Register now
                    </button>
                  </Link>
                  <Link href="http://admin.passgrades.com/" className="signup-link">
                    <button
                      type="button"
                      className="nav-button seventh-div-button"
                    >
                      I am an admin
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
