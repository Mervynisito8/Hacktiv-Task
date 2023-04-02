import {Link} from "react-router-dom";
import logo from "../assets/hciLogo.png";

export default function Login() {
  const label = "flex py-3 font-mont font-medium";
  const input = "w-full p-2 border-2";

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
            <Link className="text-prime hover:text-acsent" to="signup">
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
              value=""
            />
          </div>

          <div>
            <label className={label}>
              <span>Password</span>
            </label>
            <input
              className={input}
              placeholder="Enter your Password"
              value=""
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
    </div>
  );
}
