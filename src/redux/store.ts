import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/cartReducer';

export const store = configureStore({
    reducer: {
        authReducer,
        cartReducer
    },
    devTools: composeWithDevTools() as any,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
