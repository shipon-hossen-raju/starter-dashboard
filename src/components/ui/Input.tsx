import React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  error,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-2xl font-medium text-primaryForeground mb-1">
          {label}
          {props.required && <span className="text-[#4FD1C5]">*</span>}
        </label>
      )}
      <input
        className={cn(
          "w-full font-light rounded-[15px] bg-[#1E1E240A] border border-gray-300 shadow-sm placeholder-gray-400 px-5 py-4",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
          error && "border-red-300 focus:ring-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
