import { Product } from "@/app/models";

export async function getAllProducts(): Promise<Product[]> {
  const products = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  return await products.json();
}
