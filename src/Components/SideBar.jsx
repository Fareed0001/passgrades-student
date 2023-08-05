import React from "react";
import {
  BiBookAdd,
  BiChalkboard,
  BiClipboard,
  BiLogIn,
  BiMessage,
  BiPen,
  BiSolidContact,
  BiUser,
} from "react-icons/bi";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";
import { signOut } from "next-auth/react";

// STUDENT SIDE BAR 

const SideBar = () => {
  return (
    <div className="sidebar-components">
      <Link className="sidebar-link-tag" href="/Dashboard">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiClipboard className="sidebar-icons " />
            <span>Dashboard</span>
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
      <Link className="sidebar-link-tag" href="/Dashboard/Messages">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiMessage className="sidebar-icons " />
            Message
          </p>
        </div>
      </Link>
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
            <BiLogIn className="sidebar-icons " />
            Logout
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;

// STUDENT SIDE BAR





// AGENT SIDE BAR 

// const SideBar = () => {
//   return (
//     <div className="sidebar-components">
//       <Link className="sidebar-link-tag" href="/Dashboard">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiClipboard className="sidebar-icons " />
//             <span>Dashboard</span>
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Students">
//         <div className="nav-item className-nav-item">
//           <p className="nav-link-text">
//             <BiUser className="sidebar-icons " />
//             My students
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Class">
//         <div className="nav-item className-nav-item">
//           <p className="nav-link-text">
//             <BiChalkboard className="sidebar-icons " />
//             My class
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Courses">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiBookAdd className="sidebar-icons" />
//             Courses
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Messages">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiMessage className="sidebar-icons " />
//             Message
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Profile">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiSolidContact className="sidebar-icons " />
//             Profile
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Settings">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <FiSettings className="sidebar-icons " />
//             Settings
//           </p>
//         </div>
//       </Link>

//       <Image
//         height={100}
//         width={100}
//         className="sidebar-img"
//         src="/images/dashboard-images/sidebar-img.jpg"
//         alt=""
//       />

//       <Link className="sidebar-link-tag" href="/" onClick={() => signOut()}>
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiLogIn className="sidebar-icons " />
//             Logout
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default SideBar;

// AEGENT SIDEBAR 





// TUTOR SIDEBAR 

// const SideBar = () => {
//   return (
//     <div className="sidebar-components">
//       <Link className="sidebar-link-tag" href="/Dashboard">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiClipboard className="sidebar-icons " />
//             <span>Dashboard</span>
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Class">
//         <div className="nav-item className-nav-item">
//           <p className="nav-link-text">
//             <BiChalkboard className="sidebar-icons " />
//             Start class
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Messages">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiMessage className="sidebar-icons " />
//             Message
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Profile">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiSolidContact className="sidebar-icons " />
//             Profile
//           </p>
//         </div>
//       </Link>
//       <Link className="sidebar-link-tag" href="/Dashboard/Settings">
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <FiSettings className="sidebar-icons " />
//             Settings
//           </p>
//         </div>
//       </Link>

//       <Image
//         height={100}
//         width={100}
//         className="sidebar-img"
//         src="/images/dashboard-images/sidebar-img.jpg"
//         alt=""
//       />

//       <Link className="sidebar-link-tag" href="/" onClick={() => signOut()}>
//         <div className="nav-item">
//           <p className="nav-link-text">
//             <BiLogIn className="sidebar-icons " />
//             Logout
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default SideBar;

// TUTOR SIDEBAR