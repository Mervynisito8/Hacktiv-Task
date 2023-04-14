import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../features/loginUser";
import logo from "../assets/hciLogo.png";
import profile from "../assets/profileDets.svg";

export default function Land() {
  const user = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date(user.birthdate).toDateString();

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
        <div className="glass bg-slate-50 w-full flex items-center">
          <div className=" flex items-center justify-center w-3/5">
            <img className="w-96" src={profile} alt="" />
          </div>
          <div className="flex flex-col w-2/5">
            <span className="font-pop font-bold text-ter text-8xl">Hello,</span>
            <span className="font-mont font-bold text-ter text-4xl">
              {user.fullName}
            </span>
          </div>
        </div>
        <div className="w-full h-96 bg-slate-50 mt-8 text-gray-700 px-12 py-6">
          <h2 className="font-mont font-bold text-2xl">USER DETAILS</h2>
          <div className="w-full h-full flex items-center justify-center font-medium font-pop text-xl px-12">
            <div className="w-1/2">
              <div className="flex gap-x-2">
                <span>Full Name:</span>
                <p className="font-light text-lg">{user.fullName}</p>
              </div>
              <div className="flex gap-x-2 py-4">
                <span>Email:</span>
                <p className="font-light text-lg">{user.email}</p>
              </div>
              <div className="flex gap-x-2">
                <span>Mobile Number:</span>
                <p className="font-light text-lg">{user.mobile}</p>
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex gap-x-2">
                <span>Birthdate:</span>
                <p className="font-light text-lg">{date}</p>
              </div>
              <div className="flex gap-x-2 py-4">
                <span>Gender:</span>
                <p className="font-light text-lg">{user.gender}</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <span>Address:</span>
                <p className="font-light text-base">{user.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
