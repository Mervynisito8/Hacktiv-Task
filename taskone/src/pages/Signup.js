import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/hciLogo.png";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function Signup() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const label = "flex py-2 font-pop font-medium text-sm text-gray-700";
  const input = "w-full p-2 rounded text-gray-8000 border-2";
  const err = "text-red-500 ml-2";

  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      password: "",
      gender: "",
      birthdate: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("required"),
      mobile: Yup.string().required("required"),
      email: Yup.string().required("required"),
      address: Yup.string().required("required"),
      password: Yup.string().required("required"),
      gender: Yup.string().required("required"),
      birthdate: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      setLoad(true);
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(values),
      }).then(() => {
        console.log("new user added");
        setLoad(false);
        navigate("/login");
      });
    },
  });

  return (
    <div className="signup flex w-full h-screen ">
      <main className="w-1/2 h-screen flex-col p-24 bg-white">
        <h1 className="font-mont font-extrabold text-2xl mb-4">
          Come As One Grow As One
        </h1>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="flex-col mt-2">
            <label className={label}>
              <span>What should we call you?</span>
              {formik.errors.fullName ? (
                <p className={err}>*{formik.errors.fullName}</p>
              ) : null}
            </label>

            <input
              className={input}
              type="text"
              name="fullName"
              placeholder="e.g. John Doe"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />

            <label className={label}>
              <span>Your Mobile Number</span>
              {formik.errors.mobile ? (
                <p className={err}>*{formik.errors.mobile}</p>
              ) : null}
            </label>

            <input
              className={input}
              type="number"
              name="mobile"
              placeholder="09** *** ****"
              value={formik.values.mobile}
              onChange={formik.handleChange}
            />

            <label className={label}>
              <span>Your Email</span>
              {formik.errors.email ? (
                <p className={err}>*{formik.errors.email}</p>
              ) : null}
            </label>
            <input
              className={input}
              type="text"
              name="email"
              placeholder="name@company.com"
              value={formik.values.email}
              onChange={formik.handleChange}
            />

            <label className={label}>
              <span>Your Address</span>
              {formik.errors.address ? (
                <p className={err}>*{formik.errors.address}</p>
              ) : null}
            </label>
            <input
              className={input}
              type="text"
              name="address"
              placeholder="House No. / Street / Village / City"
              value={formik.values.address}
              onChange={formik.handleChange}
            />

            <label className={label}>
              <span>Password</span>
              {formik.errors.password ? (
                <p className={err}>*{formik.errors.password}</p>
              ) : null}
            </label>
            <input
              className={input}
              type="password"
              name="password"
              placeholder="********"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>

          <div className="w-full flex mt-2">
            <div className="w-1/2">
              <label className="flex py-2 w-3/12 font-pop font-medium text-sm text-gray-700">
                <span>Gender</span>
                {formik.errors.gender ? (
                  <p className={err}>*{formik.errors.gender}</p>
                ) : null}
              </label>
              <select
                className="w-full p-2 rounded text-gray-500 border-2"
                name="gender"
                id="sex"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <option hidden>Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="w-1/12"></div>

            <div className="w-1/2">
              <label className="flex py-2 w-3/12 font-pop font-medium text-sm text-gray-700">
                <span>Birthdate</span>
                {formik.errors.birthdate ? (
                  <p className={err}>*{formik.errors.birthdate}</p>
                ) : null}
              </label>
              <input
                className="w-full p-2 rounded text-gray-500 border-2"
                type="date"
                name="birthdate"
                value={formik.values.birthdate}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          {!load && (
            <button
              type="submit"
              className="w-full text-center my-5 py-2 bg-sec rounded-md font-medium font-pop text-slate-50 hover:bg-prime"
            >
              Create an Account
            </button>
          )}

          {load && (
            <button
              disabled
              type="submit"
              className="w-full text-center my-5 py-2 bg-sec rounded-md font-medium font-pop text-slate-50 hover:bg-prime"
            >
              Create an Account
            </button>
          )}

          <p className="font-mont font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-prime hover:text-acsent">
              Login here
            </Link>
          </p>
        </form>
      </main>
      <section className="w-1/2 h-screen flex-col items-center px-20 py-64 text-slate-50">
        <div>
          <Link className="flex items-center" to="/">
            <img className="w-16" src={logo} alt="hacktiv logo" />
            <h1 className="font-pop font-bold text-3xl">Hacktiv Colab Inc</h1>
          </Link>
        </div>
        <div>
          <h2 className="font-black font-mont ml-4 text-4xl">
            Harnessing the power of technology for positive impact.
          </h2>
          <p className="ml-4 my-4 font-normal">
            Innovating for a brighter future, empowering change through
            technology and collaboration. Together, we can hack the status quo
            to revolutionize the world. Come and join us in our mission to
            create a better world.
          </p>
        </div>
      </section>
    </div>
  );
}
