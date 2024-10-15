"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./common/input";
import { SigninFormData } from "@/app/types";
import { handleSignin } from "@/app/lib/api";


const SigninForm = () => {
 
  const [formData, setFormData] = useState<SigninFormData>({
    email: "",
    password: "",
    error: "",
  });
  const router = useRouter();
  const { email, password, error } = formData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) {
      const error = "enter a valid password";
      setFormData({ ...formData, error });
      return;
    }
try {
  const data = await handleSignin(email, password);

  if (data.statusCode !== 200) {
    console.log("Login unsuccessful:", data);
    setFormData({ ...formData, error: data.message });
    return;
  }

  console.log("Login successful:", data);
   localStorage.setItem("token", data.access_token);
  await new Promise(resolve => setTimeout(resolve, 1000))
  router.push("/dashboard");
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
      <div className="form-control">
        <Input
          placeholder="Enter your password"
          className="bg-[#EEEEEE] rounded-md h-8 text-base-200 px-4 py-5 border border-base-100 w-full transition-all duration-300 focus:ring focus:ring-primary/50"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
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
      <div className="form-control mt-6">
        <button
          type="submit"
          className="btn bg-[#088395] hover:text-[#EEEEEE] outline-none border-0 text-base-100  w-full transition-all duration-300 hover:brightness-110"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
