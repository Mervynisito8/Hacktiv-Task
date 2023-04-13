import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../features/loginUser";

export default function Land() {
  const user = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="h-screen">
      <nav className="flex justify-between max-w-6xl mx-auto py-7 text-slate-50 font-pop">
        <div>
          <h1 className="text-4xl font-semibold">
            <Link>Hacktiv</Link>
          </h1>
        </div>

        <div
          onClick={handleOut}
          className="space-x-14 font-bold font-mont text-base cursor-pointer"
        >
          <span class="link link-underline link-underline-black">Logout</span>
        </div>
      </nav>

      <section>
        <p>hi {user.fullName}</p>
      </section>
    </div>
  );
}
