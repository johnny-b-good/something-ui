import { FC, Fragment, ReactNode } from "react";
import { clsx } from "clsx";
import { Link } from "./Link";

type LinkProps = {
  content: ReactNode;
  url?: string;
};

export type BreadcrumbsProps = {
  className?: string;
  parts: Array<LinkProps>;
  renderItem?: (props: Required<LinkProps>) => ReactNode;
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  className,
  parts,
  renderItem,
}) => {
  const renderItemOrDefault =
    renderItem ??
    (({ content, url }: Required<LinkProps>) => (
      <Link href={url}>{content}</Link>
    ));

  return (
    <div className={clsx("flex flex-wrap gap-2", className)}>
      {parts.map(({ content, url }, index) => (
        <Fragment key={index}>
          {url ? renderItemOrDefault({ content, url }) : <span>{content}</span>}

          {index !== parts.length - 1 && <span className="">/</span>}
        </Fragment>
      ))}
    </div>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";
