import React, { children, useState } from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import MobileNavigation from "../MobileNavigation";
import { AnimatePresence } from "framer-motion";

const DashboardLayout = ({ children }) => {
  const [Open, setOpen] = useState(false);

  const mobilesidebarHandler = () => {
    setOpen(!Open);
  };
  return (
    <div className="dashboard-div">
      <BiMenu
        className=" block md:hidden mt-10 text-4xl z-40"
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
                  <p className="logo-text flex gap-x-1 capitalize items-center justify-center">
                    <span className="logo-span">pass</span>
                    <Image
                      src="/images/logo/favicon.ico"
                      height={30}
                      width={30}
                      className=" dashboard-logo-icon"
                    />
                    <span className="logo-span">grades</span>
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
