import Image from "next/image";

type Props = {
  count: number;
  image: string;
  name: string;
  price: number;
};

export function Card({ image, name, price, count }: Props) {
  return (
    <article className="border">
      <Image
        className="object-cover"
        width={80}
        height={80}
        src={image}
        alt={name}
      />
      <aside className="flex flex-col items-center mt-6">
        <h3 className="text-lg">{name}</h3>
        <div className="flex justify-evenly w-full">
          <p>${price}</p>
          <p>{count} ⭐️</p>
        </div>
      </aside>
    </article>
  );
}
