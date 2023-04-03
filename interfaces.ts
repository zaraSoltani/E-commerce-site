export interface Product {
  id: number;
  name: string;
  price: number;
  mainImage: {
    url: string;
  };
}

export interface CartItem {
  product: Product;
  qty: number;
}
