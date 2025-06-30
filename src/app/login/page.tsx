"use client";
import { loginLogo } from "@/asserts/icons/loginLogo";
import { loginSideSvg } from "@/asserts/icons/loginSideSvg";
import { LoginForm } from "../../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Illustration */}
      <div className="hidden md:flex flex-1 items-center justify-center p-8 md:p-12 bg-gray-50">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">Company</span>
              <span className="text-2xl font-bold text-green-500">Name</span>
            </div>
          </div>
          <figure className="text-primary">{loginSideSvg}</figure>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white md:bg-transparent">
        <div className="w-full max-w-md px-4 sm:px-8 md:px-12 pt-10 md:pt-20 pb-8 md:pb-10 bg-white rounded-none md:rounded-3xl shadow-none md:shadow-lg">
          <div className="text-center">
            <div className=" rounded-xl text-primary flex items-center justify-center mx-auto">
              <figure className="text-primary size-32 md:size-28">
                {loginLogo}
              </figure>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
