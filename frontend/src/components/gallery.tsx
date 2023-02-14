import { Card } from "@/components";

import { getAllProducts } from "@/app/(anonymous)/product/domain";

type Props = {
  category: string;
};

export async function Gallery({ category }: Props) {
  const products = await getAllProducts();

  return (
    <section className="mx-auto w-3/4">
      <h2 className="py-8">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {products.map((product) => (
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
