import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const { data: sessionData, status } = useSession();
  const firstname = sessionData?.user?.data?.firstname;
  const lastname = sessionData?.user?.data?.lastname;
  const role = sessionData?.user?.data?.role;

  console.log("Role:", role); // Added console log for role

  // Display loading or error state if needed
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error loading session data.</p>;
  }

  let roleDisplayName = "";
  if (role === "agent") {
    roleDisplayName = "Agent";
  } else if (role === "student") {
    roleDisplayName = "Student";
  } else {
    roleDisplayName = "instructor";
  }  console.log(roleDisplayName); // Added console log for role


  return (
    <header className="pc-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* <!-- SEARCH BAR START --> */}
          <div className="p-1 bg-light header-search-div rounded rounded-pill mb-4">
            <div className="input-group">
              <input
                type="search"
                id="header-search-input"
                placeholder="Enter search"
                aria-describedby="nav-search-button"
                className="form-control rounded-pill nav-search-box border-0 bg-light"
              />
              <div className="input-group-append">
                <button
                  id="nav-search-button"
                  type="submit"
                  className="btn btn-link text-primary"
                >
                  <i className="fa fa-search header-search-icon"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- SEARCH BAR END --> */}

          {/* <!-- USER IMAGE START --> */}
          <div className="header-user-div">
            <Link href="/Dashboard/Profile" className="dashboard-profile">
              <div className="row">
                <div className="col-auto header-user-text-col">
                  <span className="capitalize">{roleDisplayName}</span>
                  <p className="header-user-text ">
                    <span>{firstname}</span> <br /> <span>{lastname}</span>
                  </p>
                </div>
                <div className="col-auto header-user-img-col">
                  <img
                    className="header-user-img"
                    src="../images/landing-page-images/black.jpg"
                    alt="user-profile-pic"
                  />
                </div>
              </div>
            </Link>
          </div>
          {/* <!-- USER IMAGE END --> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
