import { Product } from "./ProductType"

export interface ProductsResponse {
  data: {
    allProducts: Product[],
  }
}