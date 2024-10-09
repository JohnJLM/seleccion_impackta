import express from "express";
import { createPokemon, getPokemons } from "../controllers/pokemons";
import { validatePokemonBody } from "../middlewares/pokemons/create-pokemon";
const pokemonRoutes = express.Router();

// Ambas rutas pendientes de Middleware
pokemonRoutes.get("/pokemons/list", getPokemons);

pokemonRoutes.post("/pokemons/create", validatePokemonBody, createPokemon);

export default pokemonRoutes;
