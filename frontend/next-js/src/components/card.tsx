import Image from "next/image";

import { truncate } from "@/utils";

type Props = {
  count: number;
  image: string;
  name: string;
  price: number;
};

export function Card({ image, name, price, count }: Props) {
  return (
    <article className="flex flex-col items-center justify-between p-6 border-snow">
      <Image
        className="object-contain h-32 w-32"
        width={120}
        height={120}
        src={image}
        alt={name}
      />
      <aside className="flex flex-col items-center mt-6">
        <h3 className="text-lg text-center">{truncate(name, 16)}</h3>
        <div className="flex justify-evenly w-full">
          <p>${price}</p>
          <p>{count} ⭐️</p>
        </div>
      </aside>
    </article>
  );
}
