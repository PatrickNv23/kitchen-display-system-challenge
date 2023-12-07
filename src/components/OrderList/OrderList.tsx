import type { RootState } from '../../store/store.ts'
import { useSelector, useDispatch } from 'react-redux'
import OrderItem from '../OrderItem/OrderItem.tsx'
import { FilterList } from '../FilterList/FilterList.tsx'
import { useState } from 'react'
import { FlexContainer } from '../../globalStyles.ts'
import { useEffect } from 'react'
import { addOrder } from '../../store/orderSlice.ts'
import { NEW_ORDER } from '../../api/data.ts'
import { Order } from '../../types/types'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { NotFoundOrders } from './OrderListSyle.tsx'

export const OrderList: React.FC<unknown> = () => {

  const [filterSelected, setFilterSelected] = useState<string>("all");
  const orders: Order[] = useSelector((state: RootState) => state.orders)
  const dispatch: Dispatch<UnknownAction> = useDispatch()

  const selectedOrders: Order[] = filterSelected === "all" ? orders : [...orders].filter((order) => order.status === filterSelected && order.status !== "all")

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
      <FlexContainer $center='center'>
        {
          selectedOrders && selectedOrders.map((order: Order) => (
            <OrderItem key={order.id} order={order} />
          ))
        }
        {
          selectedOrders.length === 0 && <NotFoundOrders>No orders found</NotFoundOrders>
        }
      </FlexContainer>
    </>
  )
}