import express from "express";
import { createPokemon, getPokemons } from "../controllers/pokemons";
const pokemonRoutes = express.Router();

// Ambas rutas pendientes de Middleware
pokemonRoutes.get("/pokemons/list", getPokemons);

pokemonRoutes.post("/pokemons/create", createPokemon);

export default pokemonRoutes;
