import React from 'react'
import { Order, Product } from '../types'
import { useDispatch } from 'react-redux'
import { assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled } from '../store/orderSlice'
import { Button } from '../globalStyles'
import { Card } from '../globalStyles'
import { ORDERSTATUS } from '../data'
import { OrderItemButtonContainer, OrderItemIconContainer, OrderItemImage, OrderItemProductContainer, OrderItemProductName, OrderItemText, OrderItemTextContainer, OrderItemTitle } from './OrderItemStyles'
import { Fade } from 'react-awesome-reveal'


interface OrderItemProps {
  order: Order
}

export const OrderItem: React.FC<OrderItemProps> = ({ order }) => {

  const dispatch = useDispatch()

  return (
    <Fade triggerOnce={true} style={{ margin: "20px auto" }}>
      <Card>
        <OrderItemTitle>{order.name}</OrderItemTitle>
        <OrderItemImage src={order.image} alt={order.name} />
        <OrderItemTextContainer>
          <OrderItemText>
            <OrderItemIconContainer>
              <svg color='#ea580c' xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 17h6" /><path d="M9 13h6" /></svg>
            </OrderItemIconContainer>
            {order.description}
          </OrderItemText>

          <OrderItemText>
            <OrderItemIconContainer>
              <svg color='#ea580c' xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-number-0" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" /></svg>
            </OrderItemIconContainer>
            {order.quantity}
          </OrderItemText>

          <OrderItemText>
            <OrderItemIconContainer>
              <svg color='#ea580c' xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-euro" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.2 7a6 7 0 1 0 0 10" /><path d="M13 10h-8m0 4h8" /></svg>
            </OrderItemIconContainer>
            {order.price + '.00'}
          </OrderItemText>

          <OrderItemText>
            <OrderItemIconContainer>
              <svg color={`${order.status === ORDERSTATUS.PENDING ? '#15803d' : order.status === ORDERSTATUS.IN_PROCESS ? '#f97316' : order.status === ORDERSTATUS.COMPLETED ? '#056896' : '#dc2626'}`} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inner-shadow-bottom-left-filled" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm-6 9a1 1 0 0 0 -1 1a7 7 0 0 0 7 7a1 1 0 0 0 0 -2a5 5 0 0 1 -5 -5a1 1 0 0 0 -1 -1z" fill="currentColor" /></svg>
            </OrderItemIconContainer>
            {order.status}
          </OrderItemText>
          <OrderItemText>
            <OrderItemIconContainer>
              <svg color='#ea580c' xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-dollar" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h3" /><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M19 21v1m0 -8v1" /></svg>
            </OrderItemIconContainer>
            {`${order.user.name} ${order.user.lastname}`}
          </OrderItemText>
        </OrderItemTextContainer>
        {
          order.products.map((product: Product) => (
            <OrderItemProductContainer key={product.id}>
              <OrderItemIconContainer>
                <svg color='#ea580c' xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right text-yellow-400" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg>
                <OrderItemProductName>{product.name}</OrderItemProductName>
              </OrderItemIconContainer>
            </OrderItemProductContainer>

          ))
        }
        {
          order.status === 'pending' &&
          <OrderItemButtonContainer>
            <Button $buttonstyle={`${ORDERSTATUS.IN_PROCESS}`} onClick={() => dispatch(assignStatusInProcess(order.id))}>In process</Button>
            <Button $buttonstyle={`${ORDERSTATUS.CANCELLED}`} onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancel</Button>
          </OrderItemButtonContainer>

        }
        {
          order.status === 'in process' &&
          <OrderItemButtonContainer>
            <Button $buttonstyle={`${ORDERSTATUS.COMPLETED}`} onClick={() => dispatch(assignStatusInCompleted(order.id))}>Complete</Button>
            <Button $buttonstyle={`${ORDERSTATUS.CANCELLED}`} onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancel</Button>
          </OrderItemButtonContainer>
        }
      </Card>
    </Fade>

  )
}


export default OrderItem