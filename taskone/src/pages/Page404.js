import logo from "../assets/taken.svg";
import {useNavigate} from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex h-screen w-full flex-col lg:flex-row items-center sm:items-center">
      <div className="flex items-center justify-center w-3/5 p-10">
        <img className="w-[400px] sm:w-[400px] lg:w-full" src={logo} alt="taken" />
      </div>
      <div className="flex flex-col items-center justify-center w-2/5 pr-0 sm:pr-0 lg:pr-24">
        <span className="font-mont font-extrabold text-white text-7xl sm:text-7xl lg:text-9xl">
          404
        </span>
        <span className="font-mont font-extrabold text-white text-3xl sm:text-3xl lg:text-5xl sm:text-center p-5">
          Page Not Found
        </span>
        <p className="text-center text-white mt-8 mb-4">
          We're sorry, the page you trying to access is could not be found.
          Please go back to the previous page.
        </p>
        <button
          onClick={goBack}
          type="button"
          class="font-mont text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
