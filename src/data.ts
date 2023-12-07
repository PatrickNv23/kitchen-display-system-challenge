import { Order } from "./types";

export const orders: Order[] = [
  {
    id: crypto.randomUUID(),
    name: "Hamburger",
    description: "Hamburger with fries and beef",
    date: "2020-01-01",
    image: "https://png.pngtree.com/png-clipart/20230907/ourmid/pngtree-a-transparent-burger-free-png-image_10021166.png",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Meat",
        description: "Meat description",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
      {
        id: crypto.randomUUID(),
        name: "Potatoes",
        description: "Potatoes description",
        price: 200,
        image: "https://via.placeholder.com/150",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Enrique",
      lastname: "Gonzales",
      email: "",
    },
    quantity: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Broaster Chicken",
    description: "Broaster chicken with fried potatoes and creams",
    date: "2020-01-01",
    image: "https://www.brostermania.com/wp-content/uploads/2021/08/Imagen-Slider-01.png",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Chicken",
        description: "Chicken description",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
      {
        id: crypto.randomUUID(),
        name: "Potatoes",
        description: "Potatoes description",
        price: 200,
        image: "https://via.placeholder.com/150",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Luis",
      lastname: "Reyes",
      email: "",
    },
    quantity: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Grilled Steak",
    description: "grilled steak with fries and salad",
    date: "2020-01-01",
    image: "https://i.pinimg.com/originals/57/86/6e/57866e987aa1ef144db99b316ba534c9.png",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Beef",
        description: "Beef description",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
      {
        id: crypto.randomUUID(),
        name: "Tomatoes",
        description: "tomatoes description",
        price: 200,
        image: "https://via.placeholder.com/150",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Angie",
      lastname: "Chaban",
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

