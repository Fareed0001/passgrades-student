import { changePasswordSchema, emailSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../Components/ui/dialog";

const index = () => {
  const { toast } = useToast();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showpasswordChangeConfirmation, setshowpasswordChangeConfirmation] =
    useState(false);
  const { data } = useSession();
  const email = data?.user?.data?.email;
  const token = data?.user?.token;

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
    trigger,
  } = useForm({
    defaultValues: {
      email: email || " ",
    },
    resolver: yupResolver(emailSchema),
  });

  const {
    register: registerPasswordForm,
    handleSubmit: handleSubmitPasswordForm,
    formState: {
      errors: passwordFormErrors,
      isSubmitSuccessful: isPasswordSubmitSuccessful,
    },
    reset: resetPasswordForm,
    trigger: registerpasswordtrigger,
  } = useForm({
    defaultValues: {
      email: email || "",
    },
    resolver: yupResolver(changePasswordSchema),
  });

  const ChangePasswordsubmitHandler = async (data) => {
    const { newpassword } = data;

    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
      const response = await fetch(`${baseurl}/student/update/password`, {
        method: "POST",
        body: JSON.stringify({ password: newpassword }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("email uploaded successfully");
        toast({
          title: "PassWord Change✨",
          description: `Password change was sucessful`,
        });
      } else {
        console.error("Error updating password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const submitHandler = async (data) => {
    const { email } = data;

    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
      const response = await fetch(`${baseurl}/student/update/email`, {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("email uploaded successfully");
        toast({
          title: "Sucessful change✨",
          description: `Your new email is ${email}`,
        });
      } else {
        console.error("Error updating email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  useEffect(() => {
    if (isPasswordSubmitSuccessful) {
      resetPasswordForm();
    }
  }, [resetPasswordForm, isPasswordSubmitSuccessful]);

  const handleChangeClick = async () => {
    const isValid = await trigger();
    if (isValid) {
      setShowDeleteConfirmation(true);
    } else {
      setShowDeleteConfirmation(false);
      console.log(errors);
    }
  };
  const handleCancelChange = () => {
    setShowDeleteConfirmation(false);
  };
  const handleConfirmChange = async () => {
    const formData = await handleSubmit(submitHandler)();
    setShowDeleteConfirmation(false);
  };

  const handlePasswordConfirmChange = async () => {
    const formData = await handleSubmitPasswordForm(
      ChangePasswordsubmitHandler
    )();
    setshowpasswordChangeConfirmation(false);
  };
  const handlePasswordCancelChange = () => {
    setshowpasswordChangeConfirmation(false);
  };
  const handlePasswordChangeClick = async () => {
    const isValid = await registerpasswordtrigger();
    if (isValid) {
      setshowpasswordChangeConfirmation(true);
    } else {
      setshowpasswordChangeConfirmation(false);
      console.log(errors);
    }
  };
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
        <form className="settings-email-div">
          <label
            for="settingsEmail1"
            className="form-label dashboard-settings-form-label"
          >
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="settingsEmail0"
            placeholder={email}
            disabled
          />
          <input
            type="email"
            className="form-control mb-0"
            id="settingsEmail1"
            placeholder="enter new email"
            {...register("email")}
          />
          <p className="text-red-600 text-sm font-bold mt-0">
            {errors.email?.message}
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-white bg-black "
                onClick={handleChangeClick}
              >
                save
              </Button>
            </DialogTrigger>
            {showDeleteConfirmation && (
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Email change</DialogTitle>
                  <DialogDescription>
                    {showDeleteConfirmation &&
                      "Are you sure you want to change your mail?"}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  {showDeleteConfirmation && (
                    <>
                      <Button variant="outline" onClick={handleCancelChange}>
                        Cancel
                      </Button>
                      <Button onClick={handleConfirmChange}>
                        Confirm change
                      </Button>
                    </>
                  )}
                </DialogFooter>
              </DialogContent>
            )}
          </Dialog>
        </form>

        <form className="settings-password-div">
          <label for="settingsPassword0" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="settingsPassword0"
            className="form-control mb-0"
            placeholder="enter current password"
            {...registerPasswordForm("password")}
          />
          <p className="text-red-500 text-sm font-semibold mt-0">
            {passwordFormErrors.password?.message}
          </p>

          <input
            type="password"
            id="settingsPassword1"
            className="form-control mb-0"
            placeholder="new password"
            {...registerPasswordForm("newpassword")}
          />
          <p className="text-red-500 text-sm font-semibold mt-0">
            {passwordFormErrors.newpassword?.message}
          </p>
          <input
            type="password"
            id="settingsPassword2"
            className="form-control mb-0"
            placeholder="re-type new password"
            {...registerPasswordForm("retypepassword")}
          />

          <p className="text-red-500 text-sm font-semibold mt-0">
            {passwordFormErrors.retypepassword?.message}
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-white bg-black "
                onClick={handlePasswordChangeClick}
              >
                Change password
              </Button>
            </DialogTrigger>
            {showpasswordChangeConfirmation && (
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Password change</DialogTitle>
                  <DialogDescription>
                    {showpasswordChangeConfirmation &&
                      "Are you sure you want to change your Password?"}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  {showpasswordChangeConfirmation && (
                    <>
                      <Button
                        variant="outline"
                        onClick={handlePasswordCancelChange}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handlePasswordConfirmChange}>
                        Confirm change
                      </Button>
                    </>
                  )}
                </DialogFooter>
              </DialogContent>
            )}
          </Dialog>
        </form>

        <div className="settings-delete-div">
          <p className="delete-account-header">Close account</p>
          <p className="delete-account-sub-header">
            <span className="delete-account-span">Warning:</span> If you close
            your account, you will be unsubscribed from all your courses, and
            will lose access forever.
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
index.auth = true;
export default index;
