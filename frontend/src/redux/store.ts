import { configureStore } from '@reduxjs/toolkit';
import { PokemonReducer } from './slices/pokemon';

const appStore = configureStore({
    reducer: {
        pokemon: PokemonReducer.reducer,
    },
    devTools: true,
});


// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
export type AppStore = typeof appStore

export default appStore;