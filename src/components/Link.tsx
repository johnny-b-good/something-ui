// Lib
// -----------------------------------------------------------------------------
import { FC, ReactNode } from "react";
import { clsx } from "clsx";
import { Root } from "@radix-ui/react-slot";

// Props
// -----------------------------------------------------------------------------
export type LinkProps = {
  asChild?: boolean;
  href?: string;
  className?: string;
  children?: ReactNode;
};

/** Link component */
export const Link: FC<LinkProps> = ({
  asChild,
  href,
  children,
  className,
  ...props
}) => {
  const Component = asChild ? Root : "a";

  return (
    <Component
      className={clsx(
        "text-cyan-500 underline outline-none transition-colors",
        "hover:text-coutline-none hover:text-cyan-300",
        "focus:rounded focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
};

Link.displayName = "Link";
