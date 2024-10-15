"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignupFormData } from "@/app/types";
import Input from "./common/input";
import { handleSignup } from "@/app/lib/api";

const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    username: "",
    email: "",
    password: "",
    error: "",
  });
  const router = useRouter();
  const { email, password, username, error } = formData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) {
      const error = "Passwords do not match";
      setFormData({ ...formData, error });
      return;
    }

    console.log("Signing up with:", email, password, username);

    try {
      
    const data = await handleSignup(email, password, username);

    if (data.statusCode !== 201) {
      console.log('Registration unsuccessful:', data);
      setFormData({ ...formData, error: data.message });
      return;
    }

    console.log('Registration successful:', data);
     localStorage.setItem('token', data.access_token);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/auth/signin");
    } catch (error) {
      console.error('Signup failed:', error);
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form id="signup" onSubmit={handleSubmit} className="space-y-4 ">
        <div className="form-control">
        <Input
          placeholder="Enter username"
          className="bg-[#EEEEEE] rounded-md h-8 text-base-200 px-4 py-5 border border-base-100 w-full transition-all duration-300 focus:ring focus:ring-primary/50"
          value={username}
          onChange={handleChange}
          required
          name="username"
          type="text"
          label="Username"
        />
      </div>
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
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
