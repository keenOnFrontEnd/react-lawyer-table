import { configureStore } from '@reduxjs/toolkit'
import root from './fileReducer';

export const store = configureStore({
    reducer: {
        root: root
    }
})
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch