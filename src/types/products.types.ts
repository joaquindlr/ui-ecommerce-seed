export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  image?: string;
}

export interface ProductRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: string;
}
