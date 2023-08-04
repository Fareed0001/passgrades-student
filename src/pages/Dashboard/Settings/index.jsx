import React from "react";

const index = () => {
  return (
    <div className="container-fluid dashboard-settings-body-content">
      {/* <!-- CONTENT START  --> */}

      <div className="settings-div">
        <div className="settings-heading-div">
          <p className="settings-header">Account settings</p>
          <p className="settings-sub-header">
            Edit your account settings and change your password here
          </p>
        </div>
        <div className="settings-email-div">
          <label for="settingsEmail1" className="form-label dashboard-settings-form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="settingsEmail0"
            placeholder="oldmail@example.com"
            disabled
          />
          <input
            type="email"
            className="form-control"
            id="settingsEmail1"
            placeholder="enter new email"
          />
          <button type="submit" className="btn btn-dark settings-button">
            Save
          </button>
        </div>

        <div className="settings-password-div">
          <label for="settingsPassword0" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="settingsPassword0"
            className="form-control"
            placeholder="enter current password"
          />
          <input
            type="password"
            id="settingsPassword1"
            className="form-control"
            placeholder="new password"
          />
          <input
            type="password"
            id="settingsPassword2"
            className="form-control"
            placeholder="re-type new password"
          />
          <button type="submit" className="btn btn-dark settings-button">
            Change password
          </button>
        </div>

        <div className="settings-delete-div">
          <p className="delete-account-header">Close account</p>
          <p className="delete-account-sub-header">
            <span className="delete-account-span">Warning:</span> If you close your
            account, you will be unsubscribed from all your courses, and will
            lose access forever.
          </p>
          <button
            type="submit"
            className="btn btn-dark settings-button settings-delete-button"
          >
            Delete account <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      {/* <!-- CONTENT END  --> */}
    </div>
  );
};

export default index;
