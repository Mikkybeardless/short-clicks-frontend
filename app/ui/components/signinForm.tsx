/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./common/input";
import { SigninFormData } from "@/app/types";
import { handleSignin } from "@/app/lib/api";
import {AuthSpinner }from "./common/spinner";
import { Success } from "./common/successMessage";
import PasswordInput from "./common/passwordInput";


const SigninForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<SigninFormData>({
    email: "",
    password: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
 

  const { email, password, error } = formData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password) {
      const error = "enter a valid password";
      setFormData({ ...formData, error });
      return;
    }
try {
  setIsLoading(true)
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data:any = await handleSignin(email, password);

  console.log(data)
  if (data.statusCode !== 200) {
    console.log("Login unsuccessful:", data);
    setIsLoading(false)
    setFormData({ ...formData, error: data.message });
    return;
  }

  console.log("Login successful:", data);
   localStorage.setItem("token", data.access_token);
   const username = data.data.username;
   setIsLoading(false)
   setMessage("Signin successful")
   setTimeout(() => setMessage(""), 1000);
  await new Promise(resolve => setTimeout(resolve, 1000))
  router.replace(`/dashboard?username=${encodeURIComponent(JSON.stringify(username))}`);
} catch (error) {
  console.error("Login failed:", error);  
}
   
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };


  return (
    <form id="signin" onSubmit={handleSubmit} className="space-y-4 ">
     { message && <Success message={message}/>}
      <div className="form-control">
        <Input
          placeholder="Enter your email"
          className="bg-[#EEEEEE] rounded-md h-8 text-base-200 px-4 py-5 border border-base-100 w-full transition-all duration-300 focus:ring focus:ring-primary/50"
          value={email}
          onChange={handleChange}
          required
          name="email"
          label="Email"
        />
      </div>
      <div className="form-control flex-col gap-1">
        <PasswordInput  placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          required
          name="password"
          label="Password"
          />
      </div>
      {error && (
        <div className="alert alert-error shadow-lg transition-all duration-300">
          <div>
            <svg onClick={() => setFormData({...formData, error: ""})}
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}
      <div className="form-control mt-6 flex flex-col items-center">
        <button
          type="submit"
          className="btn bg-[#088395] hover:text-[#EEEEEE] outline-none border-0 text-base-100  w-full transition-all duration-300 hover:brightness-110"
        >
          Sign In
        </button>
        {isLoading && <AuthSpinner />}
      </div>
    </form>
  );
};

export default SigninForm;
