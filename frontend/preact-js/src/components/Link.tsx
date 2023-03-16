import { ComponentChildren } from "preact";
import { Link as ReactRouterLink } from "react-router-dom";

type Props = {
  children?: ComponentChildren;
  class?: string;
  href: string;
};

export function Link({ children, href, class: className }: Props) {
  return (
    <ReactRouterLink to={href} className={className}>
      {children}
    </ReactRouterLink>
  );
}
