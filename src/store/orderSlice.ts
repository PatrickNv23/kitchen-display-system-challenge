import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Order } from '../types/types'
import { orders, ORDERSTATUS } from '../api/data'

const initialState: Array<Order> = orders

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload)
    },

    assignStatusInProcess: (state, action: PayloadAction<string>) => {
      const order = state.find((order) => order.id === action.payload)
      if (order) {
        order.status = ORDERSTATUS.IN_PROCESS
      }
    },

    assignStatusInCompleted: (state, action: PayloadAction<string>) => {
      const order = state.find((order) => order.id === action.payload)
      if (order) {
        order.status = ORDERSTATUS.COMPLETED
      }
    },

    assignStatusInCancelled: (state, action: PayloadAction<string>) => {
      const order = state.find((order) => order.id === action.payload)
      if (order) {
        order.status = ORDERSTATUS.CANCELLED
      }
    }
  },
})

export const { addOrder, assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled } = orderSlice.actions

export default orderSlice.reducer