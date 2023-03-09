import { NavLink } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
  href: string;
  name?: string;
};

export function Link({ children, href, name }: Props) {
  return (
    <li>
      <NavLink to={href} className="link-hover">
        {children || name}
      </NavLink>
    </li>
  );
}
