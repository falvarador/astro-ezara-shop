import { DataError } from "@/domain";
import { Ploc } from "@/presentation";
import { productsInitialState, ProductsState } from "@products/adapters";
import { GetProductsUseCase } from "@/app/(anonymous)/product/domain";

export class ProductsPloc extends Ploc<ProductsState> {
  constructor(private getProductsUseCase: GetProductsUseCase) {
    super(productsInitialState);
  }

  async search(searchTerm: string) {
    const productResult = await this.getProductsUseCase.execute(searchTerm);

    productResult.fold(
      (error) => this.changeState(this.handleError(searchTerm, error)),
      (products) =>
        this.changeState({
          kind: "LoadedProductsState",
          products,
          searchTerm,
        })
    );
  }

  private handleError(searchTerm: string, error: DataError): ProductsState {
    switch (error.kind) {
      case "UnexpectedError": {
        return {
          searchTerm,
          kind: "ErrorProductsState",
          error: "Sorry, an error has ocurred. Please try later again",
        };
      }
    }
  }
}
