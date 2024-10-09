import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../model/Pokemon';

interface PokemonStoreInterface {
    list: Pokemon[];
}

const initialState: PokemonStoreInterface = {
    list: [],
};

export const PokemonReducer = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        PokemonSetList(state, PayloadAction: PayloadAction<Pokemon[]>) {
            state.list = PayloadAction.payload;
        },
    },
});

export const { PokemonSetList } = PokemonReducer.actions;
