import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/utils/schema";

const index = () => {
  const session = useSession();
  const form = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(data);

    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: "/Dashboard",
      });

      // toast({
      //   title: "Sucessful login",
      //   description: `You have sucessfully logged in`,
      // });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: `${error.message}`,
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="h-full fixed overflow-auto bg-[#ebeefd] w-full">
      <div className="container-fluid signin-container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-6 sign-in-first-col">
            <img
              className="sign-in-img"
              src="/images/register-images/sign-in.gif"
              alt="sign-in.gif"
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
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.email?.message}
                  </p>
                </div>

                <div className="col-md-12">
                  <label
                    htmlFor="inputPassword"
                    className="form-label signin-form-label"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control mb-0"
                    id="inputPassword"
                    required
                  />
                  <p className="text-red-500 text-[0.7rem] font-bold mt-2">
                    {errors.password?.message}
                  </p>
                </div>

                <div className="check-boxes-div">
                  <div className="col-12">
                    <a className="forgot-password" href="">
                      forgot password?
                    </a>
                  </div>

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
                    className="btn btn-primary create-account-button"
                    type="submit"
                  >
                    Sign in
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
