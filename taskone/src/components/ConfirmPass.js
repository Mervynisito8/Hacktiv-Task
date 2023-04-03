import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";

export default function ConfirmPass({handleChange, handleBlur, passValue}) {
  const eye = {color: "#709078", fontSize: "1.5rem", margin: "1rem"};
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
        className="w-full p-2 rounded text-gray-8000 border-2"
        name="password"
        type={passtype}
        placeholder="********"
        onChange={handleChange}
        onBlur={handleBlur}
        value={passValue}
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
