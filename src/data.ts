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
    price: 20.00,
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
    price: 30.00,
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
    quantity: 2,
    price: 25.00,
  },
  {
    id: crypto.randomUUID(),
    name: "Cheeseburger Combo",
    description: "Classic cheeseburger with fries and a drink",
    date: "2023-05-12",
    image: "https://feedingthefiya.com/wp-content/uploads/2016/03/prov_201312011049256070.png",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Beef Patty",
        description: "Juicy beef patty",
        price: 120,
        image: "https://example.com/beef_patty.jpg"
      },
      {
        id: crypto.randomUUID(),
        name: "Cheddar Cheese",
        description: "Melted cheddar cheese",
        price: 50,
        image: "https://example.com/cheddar_cheese.jpg"
      },
      {
        id: crypto.randomUUID(),
        name: "French Fries",
        description: "Crispy golden fries",
        price: 80,
        image: "https://example.com/french_fries.jpg"
      }
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Javier",
      lastname: "Ramírez",
      email: "javier@example.com"
    },
    quantity: 3,
    price: 15.00,
  },
  {
    id: crypto.randomUUID(),
    name: "Sundae Delight",
    description: "Vanilla ice cream with chocolate sauce, whipped cream, and nuts",
    date: "2023-06-05",
    image: "https://www.mayfielddairy.com/wp-content/uploads/2022/02/MF_SundaeDelights-CookiesCream-800x734.png",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Vanilla Ice Cream",
        description: "Smooth vanilla ice cream",
        price: 80,
        image: "https://example.com/vanilla_ice_cream.jpg"
      },
      {
        id: crypto.randomUUID(),
        name: "Chocolate Sauce",
        description: "Rich chocolate sauce",
        price: 40,
        image: "https://example.com/chocolate_sauce.jpg"
      },
      {
        id: crypto.randomUUID(),
        name: "Whipped Cream",
        description: "Fluffy whipped cream",
        price: 30,
        image: "https://example.com/whipped_cream.jpg"
      }
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Luis",
      lastname: "Hernández",
      email: "luis@example.com"
    },
    quantity: 4,
    price: 18.00
  },

  {
    id: crypto.randomUUID(),
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake with fresh strawberry topping",
    date: "2023-06-08",
    image: "https://covetedcakes.com/wp-content/uploads/2023/10/wild-strawberries-and-cream-slice.png",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Cheesecake Slice",
        description: "Rich and creamy cheesecake",
        price: 120,
        image: "https://example.com/cheesecake_slice.jpg"
      },
      {
        id: crypto.randomUUID(),
        name: "Fresh Strawberries",
        description: "Juicy strawberries for topping",
        price: 60,
        image: "https://example.com/fresh_strawberries.jpg"
      },
      {
        id: crypto.randomUUID(),
        name: "Strawberry Sauce",
        description: "Sweet strawberry sauce for topping",
        price: 60,
        image: "https://example.com/fresh_strawberries.jpg"
      }
    ],
    user: {
      id: crypto.randomUUID(),
      name: "Elena",
      lastname: "Martínez",
      email: "elena@example.com"
    },
    quantity: 5,
    price: 12.00,
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
  [ORDERSTATUS.CANCELLED]: {
    label: "Cancelled",
    value: ORDERSTATUS.CANCELLED
  },
} as const


export const NEW_ORDER = {
  id: crypto.randomUUID(),
  name: "Extra Burger",
  description: "Description 4",
  date: "2020-01-01",
  image: "https://png.pngtree.com/png-clipart/20230907/ourmid/pngtree-a-transparent-burger-free-png-image_10021166.png",
  status: "pending",
  products: [
    {
      id: crypto.randomUUID(),
      name: "Meat",
      description: "Description 5",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: crypto.randomUUID(),
      name: "Bread",
      description: "Description 6",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
  ],
  user: {
    id: crypto.randomUUID(),
    name: "Fernando",
    lastname: "Montero",
    email: "",
  },
  quantity: 1,
  price: 25.00,
}

