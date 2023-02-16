import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card } from "~/components";

type Props = {
  category: string;
};

export async function loader(args: LoaderArgs) {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await response.json();

  return json(products as Product[]);
}

export async function Gallery({ category }: Props) {
  const data = useLoaderData<typeof loader>();

  return (
    <section className="mx-auto w-3/4">
      <h2 className="py-8">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.products.map((product) => (
          <Card
            image={product.image}
            key={product.id}
            count={product.rating.count}
            name={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
