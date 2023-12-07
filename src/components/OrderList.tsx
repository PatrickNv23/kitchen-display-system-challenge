import type { RootState } from '../store/store.ts'
import { useSelector, useDispatch } from 'react-redux'
import OrderItem from './OrderItem.tsx'
import { FilterList } from './FilterList.tsx'
import { useState } from 'react'
import { FlexContainer } from '../globalStyles.ts'
import { useEffect } from 'react'
import { addOrder } from '../store/orderSlice.ts'
import { NEW_ORDER } from '../data.ts'
import { Order } from '../types'

export const OrderList: React.FC<unknown> = () => {

  const [filterSelected, setFilterSelected] = useState<string>("all");
  const orders = useSelector((state: RootState) => state.orders)
  const dispatch = useDispatch()

  const selectedOrders = filterSelected === "all" ? orders : [...orders].filter((order) => order.status === filterSelected && order.status !== "all")

  useEffect(() => {
    const intervalId = setTimeout(() => {
      let newOrder: Order = NEW_ORDER
      dispatch(addOrder(newOrder))

    }, 5000)

    return () => {
      clearInterval(intervalId)
    };

  }, [])

  const handleSelectedFilter = (filter: string) => {
    setFilterSelected(filter);
  }

  return (
    <>
      <FilterList filterSelected={filterSelected} onFilterChange={handleSelectedFilter} />
      <FlexContainer>
        {
          selectedOrders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))
        }
      </FlexContainer>
    </>
  )
}