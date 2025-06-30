import LoadingSpinner from "./LoadingSpinner";

import React from "react";

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function LoadingButton({
  children,
  loading = false,
  disabled = false,
  className = "",
  ...props
}: LoadingButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`
         relative inline-flex items-center justify-center
         bg-primary-600 text-black py-3 px-4 rounded-lg font-medium 
         hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 
         disabled:opacity-50 disabled:cursor-not-allowed transition-all
         ${className}
       `}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="black" />
        </div>
      )}
      <span className={loading ? "opacity-0" : "opacity-100"}>{children}</span>
    </button>
  );
}
