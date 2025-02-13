// Lib
// -----------------------------------------------------------------------------
import { FC } from "react";
import { clsx } from "clsx";

// Props
// -----------------------------------------------------------------------------
export type LinkProps = React.HTMLProps<HTMLAnchorElement>;

/** Link component */
export const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <a
      className={clsx(
        "text-cyan-500 underline outline-none transition-colors",
        "hover:text-coutline-none hover:text-cyan-300",
        "focus:rounded focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
