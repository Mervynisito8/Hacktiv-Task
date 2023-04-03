import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";

export default function ConfirmPass({
  handleChanges,
  handleBlurs,
  confirmPassValue,
  touched,
  err,
}) {
  const eye = {color: "#709078", fontSize: "1.5rem", margin: ".5rem"};
  const input =
    "w-full p-2 rounded text-gray-800 border-2 border-sec border-opacity-50 focus:border-prime focus:outline-none";
  const inputErr =
    "focus:border-red-500 focus:outline-none w-full p-2 rounded text-gray-800 border-2 border-red-500 border-opacity-50";
  const [passtype, setPassType] = useState("password");
  const handlePass = () => {
    if (passtype === "password") {
      setPassType("text");
      return;
    }
    setPassType("password");
  };
  return (
    <div className="flex items-center">
      <input
        className={touched && err ? inputErr : input}
        name="confirmPass"
        type={passtype}
        placeholder="********"
        onChange={handleChanges}
        onBlur={handleBlurs}
        value={confirmPassValue}
      />
      <span className="cursor-pointer" onClick={handlePass}>
        {passtype === "password" ? (
          <FaEye style={eye} />
        ) : (
          <FaEyeSlash style={eye} />
        )}
      </span>
    </div>
  );
}
