import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Order } from '../types'
import { orders } from '../data'

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
        order.status = 'in process'
      }
    },

    assignStatusInCompleted: (state, action: PayloadAction<string>) => {
      const order = state.find((order) => order.id === action.payload)
      if (order) {
        order.status = 'completed'
      }
    },

    assignStatusInCancelled: (state, action: PayloadAction<string>) => {
      const order = state.find((order) => order.id === action.payload)
      if (order) {
        order.status = 'cancelled'
      }
    }
  },
})

export const { addOrder, assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled } = orderSlice.actions

export default orderSlice.reducer