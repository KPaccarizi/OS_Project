import { HTMLProps } from "react";
import cs from "classnames";

import Spinner from "../Spinner/Spinner";

export type ButtonColors = "primary" | "secondary" | "transparent";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  color?: ButtonColors;
  type?: "button" | "submit" | "reset" | undefined;
}

export const btnStyles = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  transparent: "transparent",
};

export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  onClick,
  disabled,
  className,
  type,
  children,
  loading,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cs(
        `hover:opacity-80 px-4 py-2 rounded-lg transition-all min-w-[150px] font-semibold`,
        {
          "bg-primary": color === "primary",
          "bg-secondary": color === "secondary",
          "bg-transparent": color === "transparent",
        },
        className
      )}
    >
      {loading ? <Spinner /> : ""}
      {children}
    </button>
  );
};
