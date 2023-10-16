import { createSlice } from '@reduxjs/toolkit'
import type { TransformedDataArrayType } from '../../types/types';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  data: TransformedDataArrayType,
  isError: boolean,
}

const initialState: CounterState = {
  data: [],
  isError: false
}

export const root = createSlice({
  name: 'root',
  initialState,
  reducers: {
   setData: (state, action: PayloadAction<TransformedDataArrayType>) => {
    state.data = action.payload
   },
   errorHandler: (state,action: PayloadAction<boolean>) => {
    state.isError = action.payload
   }
  },
})

export const { setData,errorHandler } = root.actions

export default root.reducer