export interface Product {
  id: string;
  name: string;
  category: string;
  quantity: string;
  price: number;
  discount?: number;
  tag?: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
