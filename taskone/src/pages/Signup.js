import {Link} from "react-router-dom";
import logo from "../assets/hciLogo.png";

export default function Signup() {
  const label = "flex py-2 font-pop font-medium text-sm text-gray-700";
  const input = "w-full p-2 rounded text-gray-8000 border-2";
  return (
    <div className="signup flex w-full h-screen ">
      <main className="w-1/2 h-screen flex-col p-24 bg-white">
        <h1 className="font-mont font-extrabold text-2xl mb-4">
          Come As One Grow As One
        </h1>
        <hr />
        <form>
          <div className="flex-col mt-2">
            <label className={label}>
              <span>What should we call you?</span>
            </label>
            <input className={input} type="text" placeholder="e.g. John Doe" />

            <label className={label}>Your Mobile Number</label>
            <input className={input} type="text" placeholder="09** *** ****" />

            <label className={label}>Your Email</label>
            <input
              className={input}
              type="text"
              placeholder="name@company.com"
            />

            <label className={label}>Your Address</label>
            <input
              className={input}
              type="text"
              placeholder="House No. / Street / Village / City"
            />

            <label className={label}>Password</label>
            <input className={input} type="password" placeholder="********" />
          </div>

          <div className="w-full flex mt-2">
            <div className="w-1/2">
              <label className="flex py-2 w-3/12 font-pop font-medium text-sm text-gray-700">
                Gender
              </label>
              <select
                className="w-full p-2 rounded text-gray-500 border-2"
                name="gender"
                id="sex"
              >
                <option value="" hidden>
                  Select Your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="w-1/12"></div>

            <div className="w-1/2">
              <label className="flex py-2 w-3/12 font-pop font-medium text-sm text-gray-700">
                Birthdate
              </label>
              <input
                className="w-full p-2 rounded text-gray-500 border-2"
                type="date"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-center mt-8 py-2 bg-sec rounded-md font-medium font-pop text-slate-50 hover:bg-prime"
          >
            Create an Account
          </button>

          <p className="mt-8 font-mont font-medium">
            Already have an account?{" "}
            <Link to="" className="text-prime hover:text-acsent">
              Login here
            </Link>
          </p>
        </form>
      </main>
      <section className="w-1/2 h-screen flex-col items-center px-24 py-72 text-slate-50">
        <div className="flex items-center">
          <img className="w-16" src={logo} alt="hacktiv logo" />
          <h1 className="font-pop font-bold text-3xl">Hacktiv Colab Inc</h1>
        </div>
        <div>
          <h2 className="font-black font-mont ml-4 text-4xl">
            Harnessing the power of technology for positive impact.
          </h2>
          <p className="ml-4 my-4 font-normal">
            Innovating for a brighter future, empowering change through
            technology and collaboration. Together, we can hack the status quo
            to revolutionize the world. Come and oin us in our mission to create
            a better world.
          </p>
        </div>
      </section>
    </div>
  );
}
