import { Order } from "./types";

export const orders: Order[] = [
  {
    id: crypto.randomUUID(),
    name: "Order 1",
    description: "Description 1",
    date: "2020-01-01",
    image: "https://via.placeholder.com/150",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Product 1",
        description: "Description 1",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
      {
        id: crypto.randomUUID(),
        name: "Product 2",
        description: "Description 2",
        price: 200,
        image: "https://via.placeholder.com/150",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "User 1",
      lastname: "Lastname 1",
      email: "",
    },
    quantity: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Order 2",
    description: "Description 2",
    date: "2020-01-01",
    image: "https://via.placeholder.com/150",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Product 3",
        description: "Description 3",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
      {
        id: crypto.randomUUID(),
        name: "Product 4",
        description: "Description 4",
        price: 200,
        image: "https://via.placeholder.com/150",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "User 2",
      lastname: "Lastname 2",
      email: "",
    },
    quantity: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Order 3",
    description: "Description 3",
    date: "2020-01-01",
    image: "https://via.placeholder.com/150",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Product 5",
        description: "Description 5",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
      {
        id: crypto.randomUUID(),
        name: "Product 6",
        description: "Description 6",
        price: 200,
        image: "https://via.placeholder.com/150",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "User 3",
      lastname: "Lastname 3",
      email: "",
    },
    quantity: 1,
  }
]

export const ORDERSTATUS = {
  PENDING: "pending",
  IN_PROCESS: "in process",
  COMPLETED: "completed",
  CANCELLED: "cancelled"
} as const

export const FILTER_ALL = "all" as const

export const FILTERS_BUTTONS = {
  [FILTER_ALL]: {
    label: "All",
    value: FILTER_ALL
  },
  [ORDERSTATUS.PENDING]: {
    label: "Pending",
    value: ORDERSTATUS.PENDING
  },
  [ORDERSTATUS.IN_PROCESS]: {
    label: "In process",
    value: ORDERSTATUS.IN_PROCESS
  },
  [ORDERSTATUS.COMPLETED]: {
    label: "Completed",
    value: ORDERSTATUS.COMPLETED
  },
} as const

