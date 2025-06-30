"use client";
import { RootState } from "@/redux";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess } from "../../redux/slice/authSlice";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import LoadingSpinner from "../ui/loading/LoadingSpinner";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("test@g.com");
  const [password, setPassword] = useState("1234");
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());

    // Simulate API call
    setTimeout(() => {
      dispatch(
        loginSuccess({
          id: "1",
          email,
          name: "User Name",
        })
      );
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            label="Email:"
            type="email"
            placeholder="Enter Email Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Enter Password Here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-right">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
            Forgot Password?
          </a>
        </div>

        <Button type="submit" className="w-full py-3">
          Login
        </Button>
      </form>
    </div>
  );
};
