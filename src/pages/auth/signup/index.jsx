import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { RegisterSchema } from "@/utils/schema";
import Link from "next/link";
import { useToast } from "@/Components/ui/use-toast";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    resolver: yupResolver(RegisterSchema),
  });
  const password = watch("password");
  const confirmpassword = watch("confirmPassword");

  const submitHandler = async (data) => {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const {
      firstname,
      lastname,
      phonenumber: phone,
      email,
      password,
      role,
    } = data;

    try {
      let formattedData = {
        firstname,
        lastname,
        phone,
        email,
        password,
      };

      if (role === "agent") {
        formattedData = {
          ...formattedData,
          company: "Passgrades",
        };
      }

      const endpoint =
        role === "student" ? "student/register" : "agent/register";

      const response = await fetch(`${baseurl}/${endpoint}`, {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`${role} already exists`);
      } else {
        toast({
          title: "Account Created",
          description: `Successfully Created an Account`,
        });
      }

      await response.json();

      // Redirect and show an alert message for agent role
      if (role === "agent") {
        router.push("/");
        alert("Your application is successful and under review. Try signing up later to know if your application is accepted or rejected.");
      } else {
        router.push("/auth/Signin");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `${error.message}`,
      });
      console.error(error);
      router.push("/auth/Signin");
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
    <section className="signinPage h-full fixed overflow-auto bg-[#ebeefd] w-full">
      <div className="container-fluid signin-container">
        <div className="row">
          <div className="col-lg-5 sign-up-first-col">
            <Image
              className="sign-up-img"
              src="/images/register-images/sign-up.gif"
              alt="sign-up.gif"
              width={200} // Set the width
              height={200} // Set the height
              priority
            />
          </div>
          <div className="col-lg-7 sign-up-second-col">
            <div className="container">
              <p className="sign-up-header student-sign-up">
                <i className="fa-solid fa-user sign-up-header-icon"></i>
                Sign up
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

                <div className="col-md-6 ">
                  <label
                    htmlFor="role"
                    className="form-label signup-form-label"
                  >
                    Role
                  </label>
                  <Controller
                    name="role"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <select {...field} id="role" className="form-control">
                        <option value="">Select a role</option>
                        <option value="student">Student</option>
                        <option value="agent">Agent</option>
                      </select>
                    )}
                  />
                  {errors.role && (
                    <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                      {errors.role.message}
                    </p>
                  )}
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

                <p className="account">
                  I have an account
                  <Link className="account-link" href="/auth/Signin">
                    Sign in
                  </Link>
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
