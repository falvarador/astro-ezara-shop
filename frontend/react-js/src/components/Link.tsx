import { Link as ReactRouterLink } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
  className?: string;
  href: string;
};

export function Link({ children, href, className }: Props) {
  return (
    <ReactRouterLink to={href} className={className}>
      {children}
    </ReactRouterLink>
  );
}
