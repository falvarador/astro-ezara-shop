export const MainMenu: Route[] = [
  { path: "/", name: "Home" },
  { path: "/woman", name: "Woman" },
  { path: "/man", name: "Man" },
  { path: "/kids", name: "Kids" },
  { path: "/sale", name: "Sale" },
];

export type Route = {
  path: string;
  name: string;
};
