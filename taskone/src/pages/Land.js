import {Link, NavLink} from "react-router-dom";
import logo from "../assets/hciLogo.png";

export default function LandHome() {
  return (
    <div className="h-screen colorgradient">
      <nav className="flex justify-between max-w-6xl mx-auto py-7 text-slate-50 font-pop">
        <div>
          <h1 className="text-4xl font-semibold">
            <Link>Hacktiv</Link>
          </h1>
        </div>

        <div className="space-x-14 font-bold font-mont text-base cursor-pointer">
          <NavLink to="/login">
            <span class="link link-underline link-underline-black">Login</span>
          </NavLink>
          <NavLink to="/signup">
            <span class="link link-underline link-underline-black">Signup</span>
          </NavLink>
        </div>
      </nav>

      <div className="flex items-center justify-center h-5/6">
        <div className="flex flex-col md:justify-center text-slate-50 space-y-10 w-3/5 pl-28">
          <h1 className="text-3xl sm:text-4xl font-mont font-bold text-center">
            Welcome to Hacktiv Colab Inc.
          </h1>
          <hr />
          <p className=" text-center leading-8 font-normal opacity-80">
            Innovating for a brighter future, empowering change through
            technology and collaboration. Together, we can hack the status quo
            to revolutionize the world. Come and oin us in our mission to create
            a better world.
          </p>
          <p className="text-2xl font-medium text-center">
            Join Our Team Today!
          </p>
        </div>

        <div className="flex justify-center w-2/5">
          <Link to="/">
            <img className="w-80" src={logo} alt="hacktiv logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
