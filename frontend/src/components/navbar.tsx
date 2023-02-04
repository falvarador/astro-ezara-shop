import { Cart, Menu, Location, Search } from "@/components";

import { MainMenu } from "@/models";

export function Navbar() {
  return (
    <nav className="p-4">
      <div className="flex flex-row justify-around">
        <div className="flex space-x-4">
          <Location />
          <p>London</p>
        </div>
        <h2 className="text-xl font-semibold">EZARA</h2>
        <div className="flex space-x-4">
          <Search />
          <Cart />
        </div>
      </div>
      <div>
        <Menu isPrimary pathNames={MainMenu} />
      </div>
    </nav>
  );
}
