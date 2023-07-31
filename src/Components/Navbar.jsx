import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const { status, data } = useSession();
  const firstname = data?.user?.data?.firstname;
  const lastname = data?.user?.data?.lastname;

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
            <Link href="/Dashboard/Profile">
              <div className="row">
                <div className="col-auto header-user-text-col">
                  <p className="header-user-text">
                    <span>{ firstname }</span> <br /> <span>{ lastname }</span>
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
