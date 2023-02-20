import { Suspense } from "react";
import type { DataFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import type { Categories, Product } from "~/models";
import { Gallery } from "~/components";

type Props = {
  products: Product[];
  categories: Categories[];
};

export async function loader(_: DataFunctionArgs) {
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  const products = fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  return defer({ categories, products });
}

export default function Index() {
  const { categories, products } = useLoaderData<Props>();
  return (
    <>
      <section className="space-y-32">
        {/* @ts-expect-error Server Component */}
        <Gallery category="Men's clothing" />
      </section>
    </>
  );
}
