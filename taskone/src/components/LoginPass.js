import React, {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";

export default function ShowHidePass({pass, setPass}) {
  const eye = {color: "#709078", fontSize: "1.5rem", margin: ".5rem"};
  const input =
    "w-full p-2 rounded text-gray-800 border-2 border-sec border-opacity-50 focus:border-prime focus:outline-none";
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
        className={input}
        name="password"
        type={passtype}
        placeholder="********"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
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
