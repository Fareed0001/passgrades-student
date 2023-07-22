import React from "react";
import {
  BiBookAdd,
  BiChalkboard,
  BiClipboard,
  BiCommentAdd,
  BiLogIn,
  BiMessage,
  BiPen,
  BiSolidContact,
} from "react-icons/bi";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="sidebar-components flex items-center justify-center flex-col">
      <Link className="sidebar-link-tag" href="/Dashboard">
        <div className="nav-item">
          <p className="nav-link-text flex items-center">
            <BiClipboard className="sidebar-icons " />
            <span>Dashboard</span>
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Class">
        <div className="nav-item className-nav-item">
          <p className="nav-link-text flex items-center">
            <BiChalkboard className="sidebar-icons " />
            My class
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Instructors">
        <div className="nav-item">
          <p className="nav-link-text flex items-center">
            <BiPen className="sidebar-icons " />
            Instructors
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Courses">
        <div className="nav-item">
          <p className="nav-link-text flex items-center">
            <BiBookAdd className="sidebar-icons" />
            Courses
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/">
        <div className="nav-item">
          <p className="nav-link-text flex items-center">
            <BiMessage className="sidebar-icons " />
            Message
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Profile">
        <div className="nav-item">
          <p className="nav-link-text flex items-center">
            <BiSolidContact className="sidebar-icons " />
            Profile
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Settings">
        <div className="nav-item">
          <p className="nav-link-text flex items-center">
            <FiSettings className="sidebar-icons " />
            Settings
          </p>
        </div>
      </Link>

      <Image
        height={100}
        width={100}
        className="sidebar-img"
        src="/images/dashboard-images/sidebar-img.jpg"
        alt=""
      />

      <Link className="sidebar-link-tag" href="">
        <div className="nav-item">
          <p className="nav-link-text flex items-center">
            <BiLogIn className="sidebar-icons " />
            Log out
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
