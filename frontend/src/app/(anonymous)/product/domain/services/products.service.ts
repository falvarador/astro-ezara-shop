import { DataError, Either } from "@/domain";
import { Product, ProductRepository } from "@products/domain";

export class GetProductsUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(filter: string): Promise<Either<DataError, Product[]>> {
    return this.productRepository.get(filter);
  }
}
