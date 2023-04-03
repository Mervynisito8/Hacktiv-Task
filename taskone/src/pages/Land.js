import {NavLink, Link, Outlet} from "react-router-dom";

export default function Land() {
  return (
    <div className="h-screen">
      <nav className="flex justify-between max-w-6xl mx-auto py-7 text-slate-50 font-pop">
        <div>
          <h1 className="text-4xl font-semibold">
            <Link to="/">Hacktiv</Link>
          </h1>
        </div>

        <div className="space-x-14 font-bold font-mont text-base">
          <NavLink to="login">
            <span class="link link-underline link-underline-black">Login</span>
          </NavLink>
          <NavLink to="signup">
            <span class="link link-underline link-underline-black">
              Sign Up
            </span>
          </NavLink>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
