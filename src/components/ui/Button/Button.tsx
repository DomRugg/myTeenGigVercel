import React from "react";
import clsx from "clsx";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "tertiary" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={clsx(
        "transition duration-200 ease-in-out",
        "shadow-xs",
        "focus:ring-2 focus:ring-offset-2",
        "focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:cursor-not-allowed",
        "hover:cursor-pointer",
        {
          "rounded-sm px-2 py-1 text-xs": size === "xs",
          "rounded-sm px-2 py-1 text-sm": size === "sm",
          "rounded-md px-2.5 py-2 text-sm": size === "md",
          "rounded-md px-3 py-3 text-sm": size === "lg",
          "rounded-md px-3.5 py-6 text-sm": size === "xl",
        },
        {
          "font-semibold border-1 border-gray-300 bg-white py-2 hover:bg-gray-50 hover:ring-1 hover:ring-myteengig-primary-hover":
            variant === "outline",
          "font-semibold bg-myteengig-primary disabled:bg-myteengig-secondary-hover hover:bg-myteengig-primary-hover hover:text-myteengig-secondary focus:ring-myteengig-primary focus-visible:outline-myteengig-primary text-white":
            variant === "primary",
          "font-semibold bg-myteengig-secondary hover:bg-myteengig-secondary-hover focus:ring-myteengig-secondary focus-visible:outline-myteengig-secondary text-gray-800":
            variant === "secondary",
          "hover:bg-myteengig-primary hover:text-white focus:ring-myteengig-secondary focus-visible:outline-myteengig-secondary bg-transparent text-gray-700":
            variant === "tertiary",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
