import { configureStore } from '@reduxjs/toolkit'
import root from './reducers/fileReducer';

export const store = configureStore({
    reducer: {
        root: root
    }
})
  
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch