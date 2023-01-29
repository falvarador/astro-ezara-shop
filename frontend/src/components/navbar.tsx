import { Cart, Location, Search } from "@/components/icons";

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
      <div></div>
    </nav>
  );
}
