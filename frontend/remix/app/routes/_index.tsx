import { Suspense } from "react";
import type { DataFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import {
  AdvantageSection,
  Header,
  HomeHeroCategories,
  ProductCard,
  ProductCardSkeleton,
  TopBar,
} from "~/components";
import type { Categories, Product } from "~/models";

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
      <TopBar />
      <div className="mb-16">
        <Header />
      </div>

      <main>
        <Container
          size={{
            lg: "lg",
          }}
        >
          <Suspense>
            <Await resolve={categories}>
              {(categories) => <HomeHeroCategories categories={categories} />}
            </Await>
          </Suspense>
          <AdvantageSection />

          <Suspense fallback={<ProductCardSkeleton />}>
            <Await resolve={products}>
              {(products) => (
                <SimpleGrid minChildWidth="255px" spacing={"1.85rem"}>
                  {products.map((product) => {
                    return <ProductCard {...product} key={product.id} />;
                  })}
                </SimpleGrid>
              )}
            </Await>
          </Suspense>
        </Container>
      </main>
    </>
  );
}
