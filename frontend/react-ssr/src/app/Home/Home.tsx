import { Suspense } from "react";
import { useLoaderData, Await, json } from "react-router-dom";

import type { Categories, Product } from "~/models";
import { Gallery, GallerySkeleton } from "~/components";

type Props = {
  products: Product[];
  categories: Categories[];
};

export async function homeLoader() {
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return json({ categories, products });
}

export function Home() {
  const { categories, products } = useLoaderData() as Props;

  console.log("categories", categories);
  console.log("products", products);

  return (
    <>
      <section className="space-y-32">
        <Suspense fallback={<GallerySkeleton />}>
          <Await resolve={products}>
            {(products) => (
              <Gallery products={products} category="Men's clothing" />
            )}
          </Await>
        </Suspense>
      </section>

      {/* <Suspense>
        <Await resolve={categories}>
          {(categories) => <HomeHeroCategories categories={categories} />}
        </Await>
      </Suspense> */}
    </>
  );
}
