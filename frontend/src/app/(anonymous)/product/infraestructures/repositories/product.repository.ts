import { DataError, Either } from "@/domain";
import { Product, ProductRepository } from "@products/domain";

export class ProductApiRestRepository implements ProductRepository {
  async get(filter: string): Promise<Either<DataError, Product[]>> {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    const products = await response.json();

    return new Promise((resolve, _reject) => {
      try {
        if (filter) {
          const filteredProducts = products.filter((p: Product) => {
            return p.title.toLowerCase().includes(filter.toLowerCase());
          });

          resolve(Either.right(filteredProducts));
        } else {
          resolve(Either.right(products));
        }
      } catch (error) {
        resolve(Either.left({ kind: "UnexpectedError", error } as DataError));
      }
    });
  }
}
