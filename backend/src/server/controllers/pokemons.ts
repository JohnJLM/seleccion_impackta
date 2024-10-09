import { Request, Response } from "express";
import Pokemon from "../database/models/pokemon";

const getPokemons = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.findAll({
      limit: 25,
      order: [["weight", "DESC"]],
    });
    res.status(200).json(pokemons);
  } catch (error) {
    console.log(error);
  }
};

const createPokemon = async (req: Request, res: Response) => {
  try {
    const pokemonBody = req.body;

    const createdPokemon = await Pokemon.create(pokemonBody);

    res.json(createdPokemon);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getPokemons, createPokemon };
