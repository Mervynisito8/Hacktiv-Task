import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/hciLogo.png";
import {useFormik} from "formik";
import {Scheme} from "../schemas/scheme";
import ShowHidePass from "../components/ShowHidePass";
import ConfirmPass from "../components/ConfirmPass";
import Axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {registerUser} from "../features/user";
import {useDispatch} from "react-redux";

export default function Signup() {
  const CryptoJS = require("crypto-js");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  const label = "flex py-2 font-pop font-medium text-sm text-gray-700";
  const input =
    "w-full p-2 rounded text-gray-800 border-2 border-sec border-opacity-50 focus:border-prime focus:outline-none";
  const inputErr =
    "focus:border-red-500 focus:outline-none w-full p-2 rounded text-red-700 border-2 border-red-500 border-opacity-50";
  const err = "text-red-500 ml-2";

  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      password: "",
      confirmPass: "",
      gender: "",
      birthdate: "",
    },
    validationSchema: Scheme,
    onSubmit: async (values) => {
      setLoad(true);
      await Axios.get(`http://localhost:3000/users?email=${values.email}`).then(
        (response) => {
          if (response.data.length === 0) {
            Axios.get(
              `http://localhost:3000/users?mobile=${values.mobile}`
            ).then((response) => {
              if (response.data.length === 0) {
                //prettier-ignore
                const passCipher = CryptoJS.AES.encrypt(values.password,"secretKey 123").toString();

                values.password = passCipher;
                values.confirmPass = passCipher;

                Axios.post("http://localhost:3000/users", values).then(() => {
                  setLoad(false);
                  dispatch(registerUser(values));
                  navigate("/");
                  toast.success("🦄 Wow so easy!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                });
              } else {
                setLoad(false);
                toast.error("Mobile number already exist", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }
            });
          } else {
            setLoad(false);
            toast.error("Email already signed", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        }
      );
    },
  });

  return (
    <div className="signup flex flex-col lg:flex-row items-center sm:items-center lg:items-start ">
      <main className="w-4/5 sm:w-4/5 md:w-4/6 lg:w-1/2 flex-col px-24 py-[30px] bg-white ">
        <h1 className="font-mont font-extrabold text-2xl mb-4">
          Come As One Grow As One
        </h1>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="flex-col mt-2">
            <label className={label}>
              <span>What should we call you?</span>
              {formik.touched.fullName && formik.errors.fullName ? (
                <p className={err}>*{formik.errors.fullName}</p>
              ) : null}
            </label>

            <input
              className={
                formik.touched.fullName && formik.errors.fullName
                  ? inputErr
                  : input
              }
              type="text"
              name="fullName"
              placeholder="e.g. John Doe"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label className={label}>
              <span>Your Mobile Number</span>
              {formik.touched.mobile && formik.errors.mobile ? (
                <p className={err}>*{formik.errors.mobile}</p>
              ) : null}
            </label>

            <input
              className={
                formik.touched.mobile && formik.errors.mobile ? inputErr : input
              }
              type="text"
              name="mobile"
              placeholder="09** *** ****"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label className={label}>
              <span>Your Email</span>
              {formik.touched.email && formik.errors.email ? (
                <p className={err}>*{formik.errors.email}</p>
              ) : null}
            </label>
            <input
              className={
                formik.touched.email && formik.errors.email ? inputErr : input
              }
              type="text"
              name="email"
              placeholder="name@company.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label className={label}>
              <span>Your Address</span>
              {formik.touched.address && formik.errors.address ? (
                <p className={err}>*{formik.errors.address}</p>
              ) : null}
            </label>
            <input
              className={
                formik.touched.address && formik.errors.address
                  ? inputErr
                  : input
              }
              type="text"
              name="address"
              placeholder="House No. / Street / Village / City"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label className={label}>
              <span>Password</span>
              {formik.touched.password && formik.errors.password ? (
                <p className={err}>*{formik.errors.password}</p>
              ) : null}
            </label>
            <ShowHidePass
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              passValue={formik.values.password}
              touched={formik.touched.password}
              err={formik.errors.password}
            />

            <label className={label}>
              <span>Confirm Password</span>
              {formik.touched.confirmPass && formik.errors.confirmPass ? (
                <p className={err}>*{formik.errors.confirmPass}</p>
              ) : null}
            </label>
            <ConfirmPass
              handleChanges={formik.handleChange}
              handleBlurs={formik.handleBlur}
              confirmPassValue={formik.values.confirmPass}
              touched={formik.touched.confirmPass}
              err={formik.errors.confirmPass}
            />
          </div>

          <div className="w-full flex mt-2">
            <div className="w-1/2">
              <label className={label}>
                <span>Gender</span>
                {formik.touched.gender && formik.errors.gender ? (
                  <p className={err}>*{formik.errors.gender}</p>
                ) : null}
              </label>
              <select
                className={
                  formik.touched.gender && formik.errors.gender
                    ? inputErr
                    : input
                }
                name="gender"
                id="sex"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option hidden>Select Your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="w-1/12"></div>

            <div className="w-1/2">
              <label className={label}>
                <span>Birthdate</span>
                {formik.touched.birthdate && formik.errors.birthdate ? (
                  <p className={err}>*{formik.errors.birthdate}</p>
                ) : null}
              </label>
              <input
                className={
                  formik.touched.birthdate && formik.errors.birthdate
                    ? inputErr
                    : input
                }
                type="date"
                name="birthdate"
                value={formik.values.birthdate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
              Creating Account...
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
      <section className="w-3/4 sm:w-3/4 lg:w-1/2 flex-col items-center text-slate-50 my-auto p-10">
        <div>
          <Link
            className="flex items-center justify-center p-10 sm:p-10 lg:p-0"
            to="/"
          >
            <img className="w-16" src={logo} alt="hacktiv logo" />
            <h1 className="font-pop font-bold text-3xl">Hacktiv Colab Inc</h1>
          </Link>
        </div>
        <div>
          <h2 className="font-black font-mont ml-4 text-4xl pb-6 text-center sm:text-center lg:text-left sm:pb-6 lg:p-6 ">
            Harnessing the power of technology for positive impact.
          </h2>
          <p className="ml-4 my-4 font-normal text-justify leading-7">
            Innovating for a brighter future, empowering change through
            technology and collaboration. Together, we can hack the status quo
            to revolutionize the world. Come and join us in our mission to
            create a better world.
          </p>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
