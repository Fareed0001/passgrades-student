import React from "react";
import {
  BiBookAdd,
  BiChalkboard,
  BiClipboard,
  BiLogIn,
  BiMessage,
  BiPen,
  BiSolidContact,
  BiSolidVideo,
  BiUser,
} from "react-icons/bi";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const SideBar = () => {
  const { data } = useSession();
  const role = data?.user?.data?.role;

  return (
    <div className="sidebar-components">
      <Link className="sidebar-link-tag" href="/Dashboard">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiClipboard className="sidebar-icons" />
            <span>Dashboard</span>
          </p>
        </div>
      </Link>
      {role !== undefined && (
        <Link className="sidebar-link-tag" href="/Dashboard/Class">
          <div className="nav-item className-nav-item">
            <p className="nav-link-text">
              <BiChalkboard className="sidebar-icons" />
              My class
            </p>
          </div>
        </Link>
      )}
      {role === "student" && (
        <Link className="sidebar-link-tag" href="/Dashboard/Instructors">
          <div className="nav-item">
            <p className="nav-link-text">
              <BiPen className="sidebar-icons" />
              Instructors
            </p>
          </div>
        </Link>
      )}
      {role !== undefined && (
        <Link className="sidebar-link-tag" href="/Dashboard/Courses">
          <div className="nav-item">
            <p className="nav-link-text">
              <BiBookAdd className="sidebar-icons" />
              Courses
            </p>
          </div>
        </Link>
      )}
      {role === "agent" && (
        <Link className="sidebar-link-tag" href="/Dashboard/Agent">
          <div className="nav-item">
            <p className="nav-link-text">
              <BiUser className="sidebar-icons" />
              My Students
            </p>
          </div>
        </Link>
      )}
      {role === undefined && (
        <Link className="sidebar-link-tag" href="/Dashboard/Tutor">
          <div className="nav-item">
            <p className="nav-link-text">
              <BiSolidVideo className="sidebar-icons" />
              Online Class
            </p>
          </div>
        </Link>
      )}
      <Link className="sidebar-link-tag" href="/Dashboard/Messages">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiMessage className="sidebar-icons" />
            Message
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Profile">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiSolidContact className="sidebar-icons" />
            Profile
          </p>
        </div>
      </Link>
      <Link className="sidebar-link-tag" href="/Dashboard/Settings">
        <div className="nav-item">
          <p className="nav-link-text">
            <FiSettings className="sidebar-icons" />
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

      <Link className="sidebar-link-tag" href="/" onClick={() => signOut()}>
        <div className="nav-item">
          <p className="nav-link-text">
            <BiLogIn className="sidebar-icons" />
            Logout
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;