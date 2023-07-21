import React from "react";

const index = () => {
  return (
    <div class="container-fluid body-content">
      {/* <!-- CONTENT START  --> */}

      <div class="settings-div">
        <div class="settings-heading-div">
          <p class="settings-header">Account settings</p>
          <p class="settings-sub-header">
            Edit your account settings and change your password here
          </p>
        </div>
        <div class="settings-email-div">
          <label for="settingsEmail1" class="form-label dashboard-settings-form-label">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="settingsEmail0"
            placeholder="oldmail@example.com"
            disabled
          />
          <input
            type="email"
            class="form-control"
            id="settingsEmail1"
            placeholder="enter new email"
          />
          <button type="submit" class="btn btn-dark settings-button">
            Save
          </button>
        </div>

        <div class="settings-password-div">
          <label for="settingsPassword0" class="form-label">
            Password:
          </label>
          <input
            type="password"
            id="settingsPassword0"
            class="form-control"
            placeholder="enter current password"
          />
          <input
            type="password"
            id="settingsPassword1"
            class="form-control"
            placeholder="new password"
          />
          <input
            type="password"
            id="settingsPassword2"
            class="form-control"
            placeholder="re-type new password"
          />
          <button type="submit" class="btn btn-dark settings-button">
            Change password
          </button>
        </div>

        <div class="settings-delete-div">
          <p class="delete-account-header">Close account</p>
          <p class="delete-account-sub-header">
            <span class="delete-account-span">Warning:</span> If you close your
            account, you will be unsubscribed from all your courses, and will
            lose access forever.
          </p>
          <button
            type="submit"
            class="btn btn-dark settings-button settings-delete-button"
          >
            Delete account <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      {/* <!-- CONTENT END  --> */}
    </div>
  );
};

export default index;
