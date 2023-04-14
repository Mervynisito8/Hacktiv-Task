import {Link, NavLink} from "react-router-dom";
import logo from "../assets/hciLogo.png";


export default function LandHome() {
  return (
    <div className="h-screen">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-10 sm:p-10 lg:p-14 text-slate-50 font-pop">
        <div>
          <h1 className="text-2xl sm:text-2xl lg:text-4xl font-semibold flex items-center">
            <img className="w-12" src={logo} alt="logo" />
            <Link>Hacktiv</Link>
          </h1>
        </div>

        <div className="space-x-14 font-bold font-pop text-base cursor-pointer">
          <NavLink to="/login">
            <span class="link link-underline link-underline-black">Login</span>
          </NavLink>
          <NavLink to="/signup">
            <span class="link link-underline link-underline-black">Signup</span>
          </NavLink>
        </div>
      </nav>
      
      <div className="p-10">

        <div className="font-pop space-y-10 md:grid md:grid-cols-2 text-center">

          <div className="md:flex md:flex-col md:justify-center text-slate-50 space-y-10">
          <h1 className="text-3xl sm:text-4xl">Welcome to Hacktiv Colab Inc.</h1>
          <hr />
          <p className=" text-center leading-8 font-semibold">Innovating for a brighter future, empowering change through technology and collaboration. Together, 
          we can hack the status quo to revolutionize the world. Come and oin us in our mission to create a better world.</p>
          <p className="text-2xl">Join Our Team Today!</p>
        </div>

        <div className="flex justify-center">
        <Link to="/">
            <img className="w-80" src={logo} alt="hacktiv logo" />
        </Link>
        </div>

        </div>
      </div>
    </div>
  );
}
