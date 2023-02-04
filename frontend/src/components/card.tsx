import Image from "next/image";

type Props = {
  name: string;
  price: number;
  description: string;
};

export function Card({ name, price, description }: Props) {
  return (
    <article className="h-80 w-64">
      <Image width={260} height={260} src="/img/photo.svg" alt={name} />
      <aside className="flex flex-col items-center mt-6">
        <h3 className="text-lg">{name}</h3>
        <div className="flex justify-evenly w-full">
          <p>${price}</p>
          <p>{description}</p>
        </div>
      </aside>
    </article>
  );
}
