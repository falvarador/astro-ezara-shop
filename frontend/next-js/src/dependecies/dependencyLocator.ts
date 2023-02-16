import { ProductApiRestRepository } from "@products/infraestructures";
import { ProductsPloc } from "@products/adapters";
import { GetProductsUseCase } from "@products/domain";

function provideProductsPloc(): ProductsPloc {
  const productRepository = new ProductApiRestRepository();
  const getProductsUseCase = new GetProductsUseCase(productRepository);
  const productsPloc = new ProductsPloc(getProductsUseCase);

  return productsPloc;
}

export const dependenciesLocator = {
  provideProductsPloc,
};
