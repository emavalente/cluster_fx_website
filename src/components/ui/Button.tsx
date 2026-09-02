import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full cursor-pointer rounded-md bg-black py-3 font-bold text-white transition-all duration-200 hover:bg-yellow hover:text-black active:scale-[0.98] ${className}`}
    >
      {children}
    </button>
  );
}
