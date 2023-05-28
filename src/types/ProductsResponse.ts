import { Product } from "./Product"

export interface ProductsResponse {
  data: {
    allProducts: Product[],
  }
}