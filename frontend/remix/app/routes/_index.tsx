import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  AdvantageSection,
  Header,
  HomeHeroCategories,
  ProductCard,
  TopBar,
} from "~/components";
import type { Categories, Product } from "~/models";

type Props = {
  products: Product[];
  categories: Categories[];
};

export async function loader() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  return json({ products, categories });
}

export default function Index() {
  const { categories, products } = useLoaderData<Props>();
  return (
    <>
      <TopBar />
      <Box marginBottom="2rem">
        <Header />
      </Box>

      <main>
        <Container
          size={{
            lg: "lg",
          }}
        >
          <HomeHeroCategories categories={categories}></HomeHeroCategories>
          <AdvantageSection />

          {
            <SimpleGrid minChildWidth="255px" spacing={"1.85rem"}>
              {products.map((product) => {
                return <ProductCard {...product} key={product.id} />;
              })}
            </SimpleGrid>
          }
        </Container>
      </main>
    </>
  );
}
