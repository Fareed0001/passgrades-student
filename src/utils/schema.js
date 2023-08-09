import { Fragment } from "react";
import * as Yup from "yup";

export default function SchemaPage() {
  return <Fragment />;
}

export const LoginSchema = Yup.object().shape({
  role: Yup.string().required("role is required"),
  email: Yup.string()
    .email("please be sure to enter a correct email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Invalid Email Format"
    ),
  password: Yup.string().required("Password is required"),
  termsAndConditions: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

export const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Invalid Email Format"
    ),
});

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  newpassword: Yup.string()
    .required("New Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must be at least 8 characters long, contain at least one uppercase letter, and one number"
    ),
  retypepassword: Yup.string()
    .oneOf(
      [Yup.ref("newpassword"), null],
      "re-typed password must match the New Password"
    )
    .required("Re-typing is a must"),
});

export const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  role: Yup.string().required("role is required"),
  lastname: Yup.string().required("Lastname is required"),
  phonenumber: Yup.string().required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must be at least 8 characters long, contain at least one uppercase letter, and one number"
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  termsAndConditions: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

export const RegisterStudentSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must be at least 8 characters long, contain at least one uppercase letter, and one number"
    ),
});
