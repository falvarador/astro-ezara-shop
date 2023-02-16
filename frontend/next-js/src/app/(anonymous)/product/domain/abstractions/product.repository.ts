import { DataError, Either } from "@/domain";
import { Product } from "@products/domain";

export interface ProductRepository {
  get(filter: string): Promise<Either<DataError, Product[]>>;
}
