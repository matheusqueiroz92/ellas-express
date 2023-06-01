export interface Product {
  id: string,
  image_url: string,
  name: string,
  price_in_cents: number,
  category: string,
  description?: string,
}

export interface ProductInCart extends Product {
  quantity: number;
}