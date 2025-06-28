"use client";
import { loginLogo } from "@/asserts/icons/loginLogo";
import { loginSideSvg } from "@/asserts/icons/loginSideSvg";
import { LoginForm } from "../../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration */}
      <div className="flex-1 flex items-center justify-center p-12">
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
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md  px-12 pt-20 pb-10 bg-white rounded-3xl">
          <div className="text-center mb-12">
            <div className="size-28 rounded-xl text-primary flex items-center justify-center mx-auto">
              <figure className="text-primary">{loginLogo}</figure>
            </div>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
