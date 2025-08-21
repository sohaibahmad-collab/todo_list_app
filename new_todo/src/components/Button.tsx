import { type ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: ReactNode;        
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "icon"; 
         
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  
}: ButtonProps) {
  const base =
    "rounded-lg flex items-center justify-center transition px-3 py-2";

  const variants: Record<string, string> = {
    primary: "bg-green-600 hover:bg-green-700 text-black",
    secondary: "text-gray-300 hover:text-white",
    danger: "text-gray-300 hover:text-red-500",
    icon: "text-green-500 hover:text-green-400",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      add {children}
    </motion.button>
  );
}
