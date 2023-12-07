import React from 'react'
import { Order, Product } from '../types'
import { useDispatch } from 'react-redux'
import { assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled } from '../store/orderSlice'


interface OrderItemProps {
  order: Order
}

export const OrderItem: React.FC<OrderItemProps> = ({ order }) => {

  const dispatch = useDispatch()

  return (
    <div>
      <h2>{order.name}</h2>
      <p>{order.quantity}</p>
      <p>Status: {order.status}</p>

      {
        order.status === 'pending' &&
        <>
          <button onClick={() => dispatch(assignStatusInProcess(order.id))}>In process</button>
          <button onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancelled</button>
        </>

      }
      {
        order.status === 'in process' &&
        <>
          <button onClick={() => dispatch(assignStatusInCompleted(order.id))}>Completed</button>
          <button onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancelled</button>
        </>
      }
      {
        order.products.map((product: Product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>
              {product.price}
            </p>
          </div>
        ))
      }
      <br />
    </div>
  )
}


export default OrderItem