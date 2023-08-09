import Link from "next/link";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import {
  BiBookAdd,
  BiChalkboard,
  BiClipboard,
  BiCommentAdd,
  BiLogIn,
  BiMessage,
  BiUser,
} from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

// STUDENT SIDE BAR START 
const data = [
  {
    id: 1,
    icon: <BiBookAdd className="mobile-side-bar-icon" />,
    title: "Dashboard",
    link: "/Dashboard",
  },
  {
    id: 2,
    icon: <BiChalkboard className="mobile-side-bar-icon" />,
    title: "My Class",
    link: "/Dashboard/Class",
  },
  {
    id: 3,
    icon: <BiClipboard className="mobile-side-bar-icon" />,
    title: "Instructors",
    link: "/Dashboard/Instructors",
  },
  {
    id: 4,
    icon: <BiCommentAdd className="mobile-side-bar-icon" />,
    title: "Courses",
    link: "/Dashboard/Courses",
  },
  {
    id: 5,
    icon: <BiMessage className="mobile-side-bar-icon" />,
    title: "Message",
    link: "/Dashboard/Messages",
  },
  {
    id: 6,
    icon: <CgProfile className="mobile-side-bar-icon" />,
    title: "profile",
    link: "/Dashboard/Profile",
  },
  {
    id: 7,
    icon: <FiSettings className="mobile-side-bar-icon" />,
    title: "settings",
    link: "/Dashboard/Settings",
  },
  {
    id: 8,
    icon: <BiLogIn className="mobile-side-bar-icon" />,
    title: "Logout",
    link: "/",
  },
];
// STUDENT SIDEBAR END




// AGENT SIDEBAR START 
// const data = [
//   {
//     id: 1,
//     icon: <BiBookAdd className="mobile-side-bar-icon" />,
//     title: "Dashboard",
//     link: "/Dashboard",
//   },
//   {
//     id: 2,
//     icon: <BiUser className="mobile-side-bar-icon" />,
//     title: "My Students",
//     link: "/Dashboard/Students",
//   },
//   {
//     id: 3,
//     icon: <BiChalkboard className="mobile-side-bar-icon" />,
//     title: "My Class",
//     link: "/Dashboard/Class",
//   },
//   {
//     id: 4,
//     icon: <BiCommentAdd className="mobile-side-bar-icon" />,
//     title: "Courses",
//     link: "/Dashboard/Courses",
//   },
//   {
//     id: 5,
//     icon: <BiMessage className="mobile-side-bar-icon" />,
//     title: "Message",
//     link: "/Dashboard/Messages",
//   },
//   {
//     id: 6,
//     icon: <CgProfile className="mobile-side-bar-icon" />,
//     title: "profile",
//     link: "/Dashboard/Profile",
//   },
//   {
//     id: 7,
//     icon: <FiSettings className="mobile-side-bar-icon" />,
//     title: "settings",
//     link: "/Dashboard/Settings",
//   },
//   {
//     id: 8,
//     icon: <BiLogIn className="mobile-side-bar-icon" />,
//     title: "Logout",
//     link: "/",
//   },
// ];
// AGENT SIDEBAR END 




// TUTOR SIDEBAR START 
// const data = [
//   {
//     id: 1,
//     icon: <BiBookAdd className="mobile-side-bar-icon" />,
//     title: "Dashboard",
//     link: "/Dashboard",
//   },
//   {
//     id: 2,
//     icon: <BiChalkboard className="mobile-side-bar-icon" />,
//     title: "Start Class",
//     link: "/Dashboard/OnlineClass",
//   },
//   {
//     id: 3,
//     icon: <BiMessage className="mobile-side-bar-icon" />,
//     title: "Message",
//     link: "/Dashboard/Messages",
//   },
//   {
//     id: 4,
//     icon: <CgProfile className="mobile-side-bar-icon" />,
//     title: "profile",
//     link: "/Dashboard/Profile",
//   },
//   {
//     id: 5,
//     icon: <FiSettings className="mobile-side-bar-icon" />,
//     title: "settings",
//     link: "/Dashboard/Settings",
//   },
//   {
//     id: 6,
//     icon: <BiLogIn className="mobile-side-bar-icon" />,
//     title: "Logout",
//     link: "/",
//   },
// ];
// TUTOR SIDEBAR END 





const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",

    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};
const MobileNavigation = ({ modalctrl, Open }) => {
  return (
    <>
      <motion.div
        className="h-screen w-2/3 fixed bg-white top-0 left-0 flex flex-col gap-y-10 z-50"
        variants={sidebarVariants}
        initial="closed"
        animate={Open ? "open" : "closed"}
        exit="closed"
      >
        <LiaTimesSolid onClick={modalctrl} className="close-sidebar-icon" />
        <div className="side-bar-component-div">
          {data.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="no-underline"
              onClick={modalctrl}
            >
              <div className="side-bar-content">
                <span>{link.icon}</span>
                {link.title}
              </div>
            </Link>
          ))}
        </div>
        <img
          className="sidebar-img"
          src="/images/dashboard-images/sidebar-img.jpg"
          alt=""
        />
      </motion.div>
    </>
  );
};

export default MobileNavigation;
