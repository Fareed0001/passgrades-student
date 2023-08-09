import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/utils/schema";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { BsEyeSlash } from "react-icons/bs";
import { EyeIcon } from "lucide-react";

const index = () => {
  const session = useSession();
  const [Loading, setLoading] = useState(false);
  const form = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const [PasswordSeen, setPasswordSeen] = useState(false);
  const { register, handleSubmit, formState, reset, control } = form;
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = async (data) => {
    const { email, password, role } = data;

    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        role: role,
        redirect: true,
        callbackUrl: "/Dashboard",
      });
      setLoading(false);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: `${error.message}`,
      });
    }
  };
  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [isSubmitSuccessful, reset]);

  return (
    <section className="h-full fixed overflow-auto bg-[#ebeefd] w-full">
      <div className="container-fluid signin-container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-6 sign-in-first-col">
            <Image
              className="sign-in-img"
              src="/images/register-images/sign-in.gif"
              alt="sign-in.gif"
              width={200} // Set the width
              height={200} // Set the height
            />
          </div>
          <div className="col-12 col-md-8 col-lg-6 sign-in-second-col">
            <div className="container">
              {/* <!-- FORM  --> */}
              <form
                className="row g-2 needs-validation form signin-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="col-md-12">
                  <label
                    htmlFor="email"
                    className="form-label signin-form-label"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control mb-0"
                    id="email"
                    required
                    placeholder="Enter email.."
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.email?.message}
                  </p>
                </div>

                <div className="col-md-12 relative">
                  <label
                    htmlFor="inputPassword"
                    className="form-label signin-form-label"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type={PasswordSeen ? "text" : "password"}
                    className="form-control mb-0"
                    id="inputPassword"
                    required
                    placeholder="Enter password"
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.password?.message}
                  </p>
                  {PasswordSeen ? (
                    <EyeIcon
                      className="absolute top-1/2 right-4 text-gray-400 cursor-pointer"
                      onClick={() => {
                        setPasswordSeen(!PasswordSeen);
                      }}
                    />
                  ) : (
                    <BsEyeSlash
                      className="absolute top-1/2 text-2xl right-4 text-gray-400 cursor-pointer"
                      onClick={() => {
                        setPasswordSeen(!PasswordSeen);
                      }}
                    />
                  )}
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

                <div className="check-boxes-div">
                  {/* <div className="col-12">
                    <a className="forgot-password" href="">
                      forgot password?
                    </a>
                  </div> */}

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="termsAndConditions"
                        {...register("termsAndConditions")}
                      />

                      <label
                        className="form-check-label flex gap-x-1"
                        htmlFor="termsAndConditions"
                      >
                        I agree to the
                        <a className="terms-link" href="">
                          terms
                        </a>
                        and
                        <a className="terms-link" href="">
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
                    disabled={Loading}
                    className="btn btn-primary create-account-button flex items-center justify-center"
                    type="submit"
                  >
                    {Loading ? (
                      <Loader2Icon className="text-2xl animate-spin w-full" />
                    ) : (
                      "sign in"
                    )}
                  </button>
                </section>

                {/* <!-- BUTTON  --> */}

                <p className="account">
                  I don't have an account?{" "}
                  <Link className="account-link" href="/auth/signup">
                    Sign up
                  </Link>
                </p>
              </form>

              {/* <section className="w-full">
                <button className="btn btn-dark google-button" type="submit">
                  <i className="fa-brands fa-google button-icons"></i>
                  Sign in with google
                </button>
              </section> */}

              {/* <!-- FORM  --> */}
              {/* <DevTool control={control} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
// }
export default index;
