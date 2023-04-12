import {NavLink, Link, Outlet} from "react-router-dom";
import Axios from "axios";

export default function Land() {
  Axios.get("http://localhost:3000/users").then((res) =>
    console.log(res.data.email)
  );
  return (
    <div className="h-screen">
      <nav className="flex justify-between max-w-6xl mx-auto py-7 text-slate-50 font-pop">
        <div>
          <h1 className="text-4xl font-semibold">
            <Link to="/">Hacktiv</Link>
          </h1>
        </div>

        <div className="space-x-14 font-bold font-mont text-base">
          <NavLink to="/">
            <span class="link link-underline link-underline-black">Logout</span>
          </NavLink>
        </div>
      </nav>

      <Outlet />
      <section></section>
    </div>
  );
}
