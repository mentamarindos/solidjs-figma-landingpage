import { ParentProps, splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

interface ButtonProps extends ParentProps, JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["children", "class", "variant"]);
  
  const baseClasses = "px-6 py-2 rounded-full font-medium transition-colors duration-200 text-sm";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-dark-card text-white hover:bg-dark-card-hover border border-gray-700",
  };

  return (
    <button
      class={`${baseClasses} ${variants[local.variant || "primary"]} ${local.class ?? ""}`}
      {...others}
    >
      {local.children}
    </button>
  );
}
