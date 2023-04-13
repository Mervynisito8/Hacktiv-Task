import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../features/loginUser";
import logo from "../assets/hciLogo.png";
import profile from "../assets/profileDets.svg";

export default function Land() {
  const user = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="h-screen w-screen">
      <nav className="flex items-center justify-between max-w-6xl mx-auto py-7 text-slate-50 font-pop">
        <div>
          <h1 className="text-3xl font-semibold flex items-center">
            <img className="w-12" src={logo} alt="logo" />
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
      <div className="mx-16">
        <div className="bg-slate-50 w-full flex items-center">
          <div className="w-2/5">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
