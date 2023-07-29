import Link from "next/link";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import {
  BiBookAdd,
  BiChalkboard,
  BiClipboard,
  BiCommentAdd,
  BiCross,
  BiLogIn,
  BiMessage,
  BiPen,
  BiSolidContact,
  BiTime,
} from "react-icons/bi";
const data = [
  {
    id: 1,
    icon: <BiBookAdd />,
    title: "Dashboard",
    link: "/Dashboard/Agent",
  },
  {
    id: 2,
    icon: <BiChalkboard />,
    title: "My Class",
    link: "/Dashboard/Class",
  },
  {
    id: 3,
    icon: <BiClipboard />,
    title: "Instructors",
    link: "/Dashboard/Instructors",
  },
  {
    id: 4,
    icon: <BiCommentAdd />,
    title: "Courses",
    link: "/Dashboard/Courses",
  },
  {
    id: 5,
    icon: <BiMessage />,
    title: "Message",
    link: "/Dashboard/Profile",
  },
  {
    id: 6,
    icon: <CgProfile />,
    title: "profile",
    link: "/Dashboard/Profile",
  },
  {
    id: 8,
    icon: <BiLogIn />,
    title: "settings",
    link: "/Dashboard/Settings",
  },
];
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
        <LiaTimesSolid
          onClick={modalctrl}
          className="mt-10 ml-4 text-4xl text-blue-800"
        />

        <div className="flex justify-center flex-col gap-y-5 items-start  text-xl text-blue-900 ml-10">
          {data.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="no-underline"
              onClick={modalctrl}
            >
              <div className="flex items-center justify-start gap-x-4 font-semibold">
                <span>{link.icon}</span>
                {link.title}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default MobileNavigation;
