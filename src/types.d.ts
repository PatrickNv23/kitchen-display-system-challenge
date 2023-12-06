export interface Order {
  id: string;
  name: string;
  description: string;
  date: string;
  image: string;
  status: OrderStatus
  products: Product[];
  user: User;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
}

export type OrderStatus = "pending" | "in process" | "completed" | "cancelled"
