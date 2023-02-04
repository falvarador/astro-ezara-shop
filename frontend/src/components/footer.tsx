import { Facebook, Instagram, Whatsapp } from "@/components/icons";
import { Menu } from "@/components/menu";

import { MainMenu } from "@/models";

export function Footer() {
  return (
    <footer className="p-4 bg-snow">
      <span className="mx-auto w-3/4">
        <div>
          <p>Title</p>
          <p className="text-xs">nn-nn-nn</p>
          <span className="flex space-x-2">
            <Instagram />
            <Whatsapp />
            <Facebook />
          </span>
          <Menu pathNames={MainMenu} />
        </div>
        <div className="border-t border-gray">
          <p className="text-gray text-xs py-4">
            © Copyright, {new Date().getFullYear()}
          </p>
        </div>
      </span>
    </footer>
  );
}
