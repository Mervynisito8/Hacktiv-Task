import * as Yup from "yup";

const passRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const numRules = /^(?:\d{4}-\d{3}-\d{4}|\d{11})$/;

export const Scheme = Yup.object().shape({
  fullName: Yup.string().required("required"),
  mobile: Yup.string("Please provide a valid number")
    .required("required")
    .typeError("That doesn't look like a phone number")
    .matches(numRules, {message: "Please provide a valid number"}),
  email: Yup.string().required("required").email("Invalid email address"),
  address: Yup.string().required("required"),
  password: Yup.string()
    .required("required")
    .matches(passRules, {message: "Please create a stronger password."}),
  confirmPass: Yup.string()
    .required("required")
    .oneOf([Yup.ref("password"), null], "Password must match."),
  gender: Yup.string().required("required"),
  birthdate: Yup.string().required("required"),
});
