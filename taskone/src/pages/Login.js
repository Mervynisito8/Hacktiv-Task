import {Link} from "react-router-dom";
import logo from "../assets/hciLogo.png";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useState} from "react";
import axios from "axios";
import LoginPass from "../components/LoginPass";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const CryptoJS = require("crypto-js");
  const label = "flex py-3 font-mont font-medium";
  const input =
    "w-full p-2 border-2 border-sec border-opacity-50 focus:border-prime focus:outline-none rounded";

  const valid = () => {
    let result = true;
    if (user === "" || user === null) {
      result = false;
      toast.warn("Please provide Email / Mobile.", {
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
    if (pass === "" || pass === null) {
      result = false;
      toast.warn("Please put your password.", {
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
    return result;
  };

  const proceed = async (e) => {
    e.preventDefault();
    if (valid()) {
      try {
        const response = await axios.get(`http://localhost:8800/users/`);
        const data = await response.data;
        const user = await data.find(
          (input) => input.email === user || user.mobile === user
        );
        if (user) {
          //prettier-ignore
          const userPassword = CryptoJS.AES.decrypt(user.password, "secretKey 123");
          const decryptedPassword = userPassword.toString(CryptoJS.enc.Utf8);
          if (pass === decryptedPassword) {
            console.log(user);
          } else {
            toast.error("Password doesn't match", {
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
        } else {
          toast.error("User doesn't exist", {
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
      } catch (error) {
        console.error(error);
        toast.error("Error occured while fetching data", {
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
    }
  };
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

        <form>
          <div className="flex-col">
            <label className={label}>
              <span>Email/Mobile</span>
            </label>
            <input
              className={input}
              type="text"
              placeholder="Enter your Email/Mobile Number"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div>
            <label className={label}>
              <span>Password</span>
            </label>
            <LoginPass pass={pass} setPass={setPass} />
          </div>

          <button
            className="w-full bg-sec mt-5 rounded text-slate-50 font-bold font-pop p-2 hover:bg-prime"
            type="submit"
            onClick={proceed}
          >
            Login
          </button>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}
