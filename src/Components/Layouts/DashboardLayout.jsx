import React, { children, useState } from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";
import MobileNavigation from "../MobileNavigation";

const DashboardLayout = ({ children }) => {
  const [Open, setOpen] = useState(false);

  const mobilesidebarHandler = () => {
    setOpen(!Open);
  };
  return (
    <div className="dashboard-div">
      <BiMenu
        className="open-sidebar-icon"
        onClick={mobilesidebarHandler}
      />

      <AnimatePresence>
        {Open && (
          <MobileNavigation modalctrl={mobilesidebarHandler} Open={Open} />
        )}
      </AnimatePresence>
      <div className="">
        <div className="row pc-header-sidebar">
          <div className="col-sm-3">
            {/* <!-- ASIDE START  --> */}
            <aside className="pc-sidebar">
              <div className="container">
                {/* <!-- LOGO DIV START  --> */}
                <div className="logo-div">
                  <p className="logo-text">
                    <BsFillCheckCircleFill className="dashboard-check-icon" />
                    <span className="logo-span">passgrades</span>
                  </p>
                </div>
                <SideBar />
              </div>
            </aside>
          </div>

          <div className="col-sm-9">
            <section>
              <Navbar />
            </section>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
