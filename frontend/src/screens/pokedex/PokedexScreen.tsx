
import { useDispatch } from 'react-redux';
import PokedexScreenWrapper from './pokedexScreen.style';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hook/redux-hooks';
import { PokemonSetList } from '../../redux/slices/pokemon';
import { useFetch } from '../../hook/useFetch';
import { Pokemon } from '../../model/Pokemon';
import Card from '../../component/CardPokemon/CardPokemon';
import DialogCreatePokemon from '../../component/DialogCreatePokemon/DialogCreatePokemon';

const PokedexScreen = () => {
    const [showDialog, setShowDialog] = useState(false);

    const { list } = useAppSelector((store) => store.pokemon);
    const dispatch = useDispatch();
    const { fetchData } = useFetch();

    const getList = async () => {
        const pokemonList = await fetchData('pokemons/list', {
            method: 'GET',
        });
        if (pokemonList) dispatch(PokemonSetList(pokemonList as Pokemon[]));
    };

    const createPokemon = async (pokemon: Pokemon) => {
        const pokemonCreated = await fetchData('pokemons/create', {
            method: 'POST',
            body: pokemon,
        });
        if (pokemonCreated) {
            // Alert
            window.alert('¡Pokemon creado con exito! ✨');
            // Actualizamos la lista
            getList();
        }
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <PokedexScreenWrapper>
            <div className="actions_container" onClick={() => setShowDialog(true)}>
                <img src="/assets/images/add_btn.png" className="action_img" />
            </div>

            <div className="title_section">
                <h2>Pokédex de Impackta</h2>
            </div>

            <div className="pokedex_container">
                <>
                    {list.length > 0 &&
                        list.map((pokemon, index) => (
                            <Card pokemon={pokemon} key={`PokemonCard${index}`} />
                        ))}
                </>
            </div>
            <DialogCreatePokemon
                show={showDialog}
                closeDialog={() => setShowDialog(false)}
                onCreatePokemon={(pokemon) => createPokemon(pokemon)}
            />
        </PokedexScreenWrapper>
    );
};

export default PokedexScreen