import * as Yup from "yup";

const passRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const scheme = Yup.object().shape({
  fullName: Yup.string().required("required"),
  mobile: Yup.number("Please provide a valid number")
    .required("required")
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(11, "Thats not a valid number")
    .test(
      "Unique Mobile Number",
      "Mobile Number already used",
      async function (value) {
        const res = await fetch("http://localhost:3000/users");
        const datas = await res.json();
        const emailData = datas.map((data) => {
          return data.mobile;
        });
        if (value === emailData) {
          throw new Error("Existing user");
        }
      }
    ),
  email: Yup.string()
    .required("required")
    .email("Invalid email address")
    .test("Unique Email", "Email already in use", async function (value) {
      const res = await fetch("http://localhost:3000/users");
      const datas = await res.json();
      const emailData = datas.map((data) => {
        return data.email;
      });
      if (value === emailData) {
        throw new Error("Existing user");
      }
    }),
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
