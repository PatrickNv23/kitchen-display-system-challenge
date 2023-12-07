import type { RootState } from '../store/store.ts'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem.tsx'
import { Order } from '../types'
import { FilterList } from './FilterList.tsx'
import { useState } from 'react'


export const OrderList: React.FC<unknown> = () => {

  const [filterSelected, setFilterSelected] = useState<string>("all");
  const orders = useSelector((state: RootState) => state.orders)

  const selectedOrders = filterSelected === "all" ? orders : [...orders].filter((order) => order.status === filterSelected && order.status !== "all")

  const newOrder: Order = {
    id: crypto.randomUUID(),
    name: "Order 4",
    description: "Description 4",
    date: "2020-01-01",
    image: "https://via.placeholder.com/150",
    status: "pending",
    products: [
      {
        id: crypto.randomUUID(),
        name: "Product 7",
        description: "Description 5",
        price: 100,
        image: "https://via.placeholder.com/150",
      },
      {
        id: crypto.randomUUID(),
        name: "Product 8",
        description: "Description 6",
        price: 200,
        image: "https://via.placeholder.com/150",
      },
    ],
    user: {
      id: crypto.randomUUID(),
      name: "User 4",
      lastname: "Lastname 4",
      email: "",
    },
    quantity: 1,
  }

  const handleSelectedFilter = (filter: string) => {
    setFilterSelected(filter);
  }

  return (
    <>
      <FilterList filterSelected={filterSelected} onFilterChange={handleSelectedFilter} />
      {
        selectedOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))
      }

    </>
  )
}