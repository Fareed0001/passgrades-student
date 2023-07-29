import React from "react";

const Navbar = () => {
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
            <div className="row">
              <div className="col-auto header-user-text-col">
                <p className="header-user-text">
                   <span>{/* firstname */}</span> <br /> <span>{/* lastname */}</span> 
                </p>
              </div>
              <div className="col-auto header-user-img-col">
                <img
                  className="header-user-img"
                  src="{/* photo */}"
                  alt="user-profile-pic"
                />
              </div>
            </div>
          </div>
          {/* <!-- USER IMAGE END --> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
