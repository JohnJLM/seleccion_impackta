import { configureStore } from '@reduxjs/toolkit';
import { PokemonReducer } from './slices/pokemon';

const appStore = configureStore({
    reducer: {
        pokemon: PokemonReducer.reducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
