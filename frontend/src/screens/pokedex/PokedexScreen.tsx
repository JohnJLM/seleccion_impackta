
import { useDispatch } from 'react-redux';
import PokedexScreenWrapper from './pokedexScreen.style';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hook/redux-hooks';
import { PokemonSetList } from '../../redux/slices/pokemon';
import { useFetch } from '../../hook/useFetch';
import { Pokemon } from '../../model/Pokemon';

const PokedexScreen = () => {
    const { list } = useAppSelector((store) => store.pokemon);
    const dispatch = useDispatch();
    const { fetchData } = useFetch();

    const getList = async () => {
        const pokemonList = await fetchData('pokemons/list', {
            method: 'GET',
        });
        if (pokemonList) dispatch(PokemonSetList(pokemonList as Pokemon[]));
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <PokedexScreenWrapper>
            <div className="actions_container">
                <img src="/assets/images/add_btn.png" className="action_img" />
            </div>

            <div className="title_section">
                <h2>Pokédex de Impackta</h2>
            </div>

            <div className="pokedex_container">
                <></>
            </div>
        </PokedexScreenWrapper>
    );
};

export default PokedexScreen