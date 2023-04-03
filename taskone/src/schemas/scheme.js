import * as Yup from "yup";

export const scheme = Yup.object().shape({
  fullName: Yup.string().required("required"),
  mobile: Yup.string().required("required"),
  email: Yup.string().required("required").email("Invalid email address"),
  address: Yup.string().required("required"),
  password: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  birthdate: Yup.string().required("required"),
});
