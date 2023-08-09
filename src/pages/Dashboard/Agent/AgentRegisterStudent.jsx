import { EyeIcon } from "lucide-react";
import { Button } from "../../../Components/ui/button";
import { Input } from "../../../Components/ui/input";
import React, { useEffect, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { RegisterStudentSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "../../../components/ui/use-toast";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const AgentRegisterStudent = () => {
  const [passwordseen, setpasswordseen] = useState(false);
  const { toast } = useToast();
  const { data } = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(RegisterStudentSchema) });

  const authToken = data?.user?.token;
  async function SubmitHandler(data) {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const { firstname, lastname, phone, email, password } = data;

    try {
      let formattedData = {
        firstname,
        lastname,
        phone,
        email,
        password,
      };

      const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

      const response = await fetch(`${baseurl}/agent/student/register`, {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`${response.message}`);
      } else {
        toast({
          title: "student Registered ",
          description: `${response.message}`,
        });
      }
      const res = await response.json();
    } catch (error) {
      toast({
        title: "Error",
        description: `${error.message}`,
      });
      console.error(error);
    }
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="h-full w-full  flex flex-col items-center justify-center">
      <h1 className="capitalize font-bold text-xl  text-gray-500">
        Register a student
      </h1>
      <form
        className=" w-full md:w-6/12 flex flex-col"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <div className="">
          <label className="mb-2 capitalize" htmlFor="firstname">
            Student firstname
          </label>
          <Input
            id="firstname"
            type="text"
            placeholder="Enter your firstname"
            {...register("firstname")}
          />
          <p className="text-red-500 text-[0.7rem] font-bold">
            {errors.firstname?.message}
          </p>
        </div>
        <div className="">
          <label className="mb-2 capitalize" htmlFor="lastname">
            Student lastname
          </label>
          <Input
            id="lastname"
            type="text"
            placeholder="Enter your lastname"
            {...register("lastname")}
          />
          <p className="text-red-500 text-[0.7rem] font-bold">
            {errors.lastname?.message}
          </p>
        </div>
        <div className="">
          <label className="mb-2 capitalize" htmlFor="email">
            Student email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            {...register("email")}
          />
          <p className="text-red-500 text-[0.7rem] font-bold">
            {errors.email?.message}
          </p>
        </div>
        <div className="">
          <label className="mb-2 capitalize" htmlFor="phone">
            student phone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            {...register("phone")}
          />
          <p className="text-red-500 text-[0.7rem] font-bold">
            {errors.phone?.message}
          </p>
        </div>
        <div className="mb-2 relative">
          <label className="mb-2 capitalize" htmlFor="password">
            password
          </label>
          <div className="relative ">
            <Input
              id="password"
              type={passwordseen ? "text" : "password"}
              placeholder="Enter password"
              className=""
              {...register("password")}
            />
            {passwordseen ? (
              <EyeIcon
                className="absolute top-2 right-4 text-gray-400 cursor-pointer"
                onClick={() => {
                  setpasswordseen(!passwordseen);
                }}
              />
            ) : (
              <BsEyeSlash
                className="absolute top-2 text-2xl right-4 text-gray-400 cursor-pointer"
                onClick={() => {
                  setpasswordseen(!passwordseen);
                }}
              />
            )}
          </div>

          <p className="text-red-500 text-[0.7rem] font-bold">
            {errors.password?.message}
          </p>
        </div>
        <Button>submit</Button>
      </form>
    </div>
  );
};

export default AgentRegisterStudent;
