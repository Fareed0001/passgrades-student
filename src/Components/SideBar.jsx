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

const SideBar = () => {
  return (
    <div className="sidebar-components">
      <Link className="sidebar-link-tag" href="/Dashboard">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiClipboard className="sidebar-icons " />
            Dashboard
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Class">
        <div className="nav-item className-nav-item">
          <p className="nav-link-text">
            <BiChalkboard className="sidebar-icons " />
            My class
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Instructors">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiPen className="sidebar-icons " />
            Instructors
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Courses">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiBookAdd className="sidebar-icons" />
            Courses
          </p>
        </div>
      </Link>
      <a className="sidebar-link-tag" href="">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiMessage className="sidebar-icons " />
            Message
          </p>
        </div>
      </a>
      <Link className="sidebar-link-tag" href="/Dashboard/Profile">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiSolidContact className="sidebar-icons " />
            Profile
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Settings">
        <div className="nav-item">
          <p className="nav-link-text">
            <FiSettings className="sidebar-icons " />
            Settings
          </p>
        </div>
      </Link>

      <img
        className="sidebar-img"
        src="images\dashboard-images\sidebar-img.jpg"
        alt=""
      />

      <a className="sidebar-link-tag" href="">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiLogIn className="sidebar-icons " />
            Log out
          </p>
        </div>
      </a>
    </div>
  );
};

export default SideBar;
