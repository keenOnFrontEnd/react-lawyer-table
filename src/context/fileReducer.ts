import { createSlice } from '@reduxjs/toolkit'
import type { IState, TransformedDataArrayType } from '../types/types';
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: IState = {
  data: [],
  headers: [],
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
   },
   setHeaders: (state,action: PayloadAction<string[]>) => {
    state.headers = action.payload
   }
  },
})

export const { setData,errorHandler,setHeaders } = root.actions

export default root.reducer