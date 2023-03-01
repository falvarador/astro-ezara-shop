import { NavLink } from "react-router-dom";
import type { Route } from "~/models";

type Props = {
  isPrimary?: boolean;
  pathNames: Route[];
};

export function Menu({ isPrimary = false, pathNames }: Props) {
  return (
    <>
      {isPrimary ? (
        <menu className="flex justify-center space-x-16 p-8">
          {pathNames.map((path) => (
            <NavLink key={path.path} to={path.path} className="text-base">
              {path.name}
            </NavLink>
          ))}
        </menu>
      ) : (
        <menu className="flex flex-col space-y-2">
          {pathNames.map((path) => (
            <NavLink key={path.path} to={path.path} className="text-sm">
              {path.name}
            </NavLink>
          ))}
        </menu>
      )}
    </>
  );
}
