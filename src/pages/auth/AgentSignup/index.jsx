import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "../../../components/ui/use-toast";
import { useRouter } from "next/navigation";
import { RegisterSchema } from "@/utils/schema";

const Index = () => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(RegisterSchema),
  });
  const password = watch("password");
  const confirmpassword = watch("confirmpassword");

  const submitHandler = async (data) => {
    const { firstname, lastname, phonenumber: phone, email, password } = data;
    const formattedData = {
      firstname,
      lastname,
      phone,
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://api.passgrades.com/api/v1/student/register",
        {
          method: "POST",
          body: JSON.stringify(formattedData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log();

      toast({
        title: "Account Created",
        description: `Sucessfully Created an Account`,
      });
      router.push("/Signin");
    } catch (error) {
      toast({
        title: "Error",
        description: `Student Already Exists`,
      });
      console.error(error);
    }
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <section className="signupPage h-full fixed overflow-auto bg-[#ebeefd] w-full">
      <div className="container-fluid sign-up-container">
        <div className="row">
          <div className="col-lg-5 sign-up-first-col">
            <img
              className="sign-up-img"
              src="/images/register-images/sign-up.gif"
              alt="sign-up.gif"
            />
          </div>
          <div className="col-lg-7 sign-up-second-col">
            <div className="container">
              <p className="sign-up-header agent-sign-up">
                <i className="fa-solid fa-user-secret sign-up-header-icon"></i>
                Agent sign up
                <a className="toggle-link" href="Signup">
                  I am a Student
                </a>
              </p>

              {/* <!-- FORM  --> */}
              <form
                onSubmit={handleSubmit(submitHandler)}
                method="post"
                className="row g-2 needs-validation form signup-form"
                noValidate
              >
                <div className="col-md-6 mb-0">
                  <label
                    htmlForfor="fname"
                    className="form-label signup-form-label"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-0"
                    id="fname"
                    {...register("firstname")}
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.firstname?.message}
                  </p>
                </div>
                <div className="col-md-6">
                  <label
                    htmlForfor="lname"
                    className="form-label signup-form-label"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    {...register("lastname")}
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.lastname?.message}
                  </p>
                </div>
                <div className="col-md-6">
                  <label
                    htmlForfor="email"
                    className="form-label signup-form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email")}
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="col-md-6">
                  <label
                    className="form-label signup-form-label"
                    htmlForfor="phone"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    {...register("phonenumber")}
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.phonenumber?.message}
                  </p>
                </div>
                <div className="col-md-6">
                  <label
                    htmlForfor="inputPassword"
                    className="form-label signup-form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    {...register("password")}
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.password?.message}
                  </p>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label signup-form-label"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmassword"
                    {...register("confirmPassword")}
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.confirmPassword?.message}
                  </p>
                </div>
                <div className="col-md-12 company-name-div">
                  <label
                    htmlForfor="company"
                    className="form-label signup-form-label"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyname"
                  />
                </div>
                <div className="check-boxes-div">
                  {/* <div className="col-12">
                    <a className="forgot-password" href="">
                      forgot password?
                    </a>
                  </div> */}

                  <div className="col-12">
                    <div className="">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="termsAndConditions"
                        {...register("termsAndConditions")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="termsAndConditions"
                      >
                        I agree to the
                        <a className="terms-link mx-2" href="">
                          terms
                        </a>
                        and
                        <a className="terms-link ml-2" href="">
                          conditions
                        </a>
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- BOTTON  --> */}
                <section className="col-md-6 d-grid">
                  <button
                    className="btn btn-primary create-account-button"
                    type="submit"
                  >
                    Create account
                  </button>
                </section>
                {/* <div className="col-md-6 d-grid">
                  <button className="btn btn-dark google-button" type="submit">
                    <i className="fa-brands fa-google button-icons"></i>
                    Sign-in with google
                  </button>
                </div> */}
                <p className="account">
                  I have an account
                  <a className="account-link" href="Signin">
                    Sign in
                  </a>
                </p>
              </form>
              {/* <!-- FORM  --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
