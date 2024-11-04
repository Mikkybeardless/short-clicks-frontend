import { InputProps } from "@/app/types";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ label, name, ...rest }: InputProps) => {
  const [ispasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <label className="label" htmlFor={name}>
        <span className="label-text text-base-100">{label}</span>
        <div className="self-end" onClick={handleTogglePasswordVisibility}>
          {ispasswordVisible ? (
            <FaRegEyeSlash className=" w-full" />
          ) : (
            <FaRegEye className="w-full" />
          )}
        </div>
      </label>

      <input
        className=" bg-[#EEEEEE] rounded-md h-8 text-base-200 px-4 py-5  border border-base-100 w-full transition-all duration-300 focus:ring focus:ring-primary/50"
        id={name}
        name={name}
        type={ispasswordVisible ? "text" : "password"}
        {...rest}
      />
    </>
  );
};

export default PasswordInput;
