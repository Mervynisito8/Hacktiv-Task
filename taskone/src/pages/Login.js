import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/hciLogo.png";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import LoginPass from "../components/LoginPass";
import {useFormik} from "formik";
import * as yup from "yup";
import {loginSuccess, loginFail} from "../features/loginUser";
import {useDispatch} from "react-redux";

export default function Login() {
  const CryptoJS = require("crypto-js");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const label = "flex py-3 font-mont font-medium";
  const input =
    "w-full p-2 border-2 border-sec border-opacity-50 focus:border-prime focus:outline-none rounded";
  const err = "text-red-500 ml-2";

  const {values, handleBlur, handleChange, handleSubmit, touched, errors} =
    useFormik({
      initialValues: {
        userInput: "",
        passInput: "",
      },
      validationSchema: yup.object({
        userInput: yup.string().required("Please enter your email/mobile."),
        passInput: yup.string().required("Please provide a password."),
      }),
      onSubmit: async (values) => {
        try {
          const response = await axios.get(`http://localhost:3000/users/`);
          const data = response.data;
          const user = data.find(
            (user) =>
              user.email === values.userInput ||
              user.mobile === values.userInput
          );
          console.log(data);
          if (user) {
            const userPassword = CryptoJS.AES.decrypt(
              user.password,
              "secretKey 123"
            );
            const decryptedPassword = userPassword.toString(CryptoJS.enc.Utf8);
            console.log(decryptedPassword);
            if (values.passInput === decryptedPassword) {
              dispatch(loginSuccess(user));
              toast.success("Success");
              navigate("/home");
            } else {
              dispatch(loginFail("Password don't match"));
              toast.error("Password does't match.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          } else {
            dispatch(loginFail("User doesn't exists."));
            toast.error("User doesn't exists.", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        } catch (error) {
          console.error(error);
          dispatch(loginFail("Error fetching"));
          toast.error("Error fetching data.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      },
    });

  return (
    <div className="login flex justify-center items-center w-full h-screen">
      <section className="w-7/12 h-4/6 shadow-2xl rounded-lg px-14 py-4 bg-white">
        <div className="flex justify-center">
          <Link to="/">
            <img className="w-28" src={logo} alt="hacktiv logo" />
          </Link>
        </div>

        <div className="text-center">
          <h1 className="font-mont font-black text-4xl my-5">
            Login to your account
          </h1>
          <p className="my-7 font-pop font-normal">
            Didn't have an account yet?{" "}
            <Link className="text-prime hover:text-acsent" to="/signup">
              Signup
            </Link>{" "}
            here.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex-col">
            <label className={label}>
              <span>Email/Mobile</span>
              {touched.userInput && errors.userInput ? (
                <p className={err}>*{errors.userInput}</p>
              ) : null}
            </label>
            <input
              className={input}
              type="text"
              name="userInput"
              placeholder="Enter your Email/Mobile Number"
              value={values.userInput}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div>
            <label className={label}>
              <span>Password</span>
              {touched.passInput && errors.passInput ? (
                <p className={err}>*{errors.passInput}</p>
              ) : null}
            </label>
            <LoginPass
              values={values.passInput}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>

          <button
            className="w-full bg-sec mt-5 rounded text-slate-50 font-bold font-pop p-2 hover:bg-prime"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}
