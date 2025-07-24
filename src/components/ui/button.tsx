import React from "react";

export function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`px-4 py-2 rounded-lg font-semibold transition bg-pink-500 hover:bg-pink-400 text-white ${className}`} {...props}>
      {children}
    </button>
  );
} 