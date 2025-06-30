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
        <label className="block text-base md:text-lg font-medium text-primaryForeground mb-1">
          {label}
          {props.required && <span className="text-[#d14f4f]">*</span>}
        </label>
      )}
      <input
        className={cn(
          "w-full font-light rounded-[15px] bg-[#1E1E240A] border border-gray-300 shadow-sm placeholder-gray-400",
          "px-4 py-3 text-base", // mobile
          "md:px-4 md:py-3 md:text-lg", // desktop
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
