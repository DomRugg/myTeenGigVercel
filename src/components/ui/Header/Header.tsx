import React from "react";
import clsx from "clsx";
import { companyName } from "../../../constants/constants";

export type HeaderNavItem = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export type HeaderProps = React.ComponentPropsWithoutRef<"header"> & {
  brand?: React.ReactNode;
  navItems?: HeaderNavItem[];
  rightSlot?: React.ReactNode;
  sticky?: boolean;
  bordered?: boolean;
  containerClassName?: string;
  navClassName?: string;
};

const Header: React.FC<HeaderProps> = ({
  brand = companyName,
  navItems = [],
  rightSlot,
  sticky = false,
  bordered = true,
  className,
  containerClassName,
  navClassName,
  ...props
}) => {
  return (
    <header
      className={clsx(
        "w-full bg-myteengig-surface text-myteengig-text-primary",
        bordered && "border-b border-myteengig-border",
        sticky && "sticky top-0 z-50",
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          "mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-3 sm:px-6",
          containerClassName,
        )}
      >
        <div className="flex flex-1 items-center">
          <div className="text-lg font-bold tracking-tight">{brand}</div>
        </div>

        <nav
          aria-label="Primary navigation"
          className={clsx("flex items-center justify-center gap-4 text-sm font-medium", navClassName)}
        >
          {navItems.map((item) => (
            <a
              key={`${item.href}-${item.label}`}
              href={item.href}
              aria-label={item.ariaLabel}
              className="transition-colors hover:text-myteengig-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">{rightSlot}</div>
      </div>
    </header>
  );
};

export default Header;
