import Joi from "joi";
import { Request, Response, NextFunction } from "express";

// Validacion de tipos de datos
const pokemonSchema = Joi.object({
  name: Joi.string().required(),
  height: Joi.number().required(),
  number: Joi.number().integer().required(),
  health: Joi.number().integer().required(),
  weight: Joi.number().required(),
  url: Joi.string().required(),

  // En caso de ser mas estrictos para pedir una URL valida
  // url: Joi.string().uri().required(),
});

export const validatePokemonBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = pokemonSchema.validate(req.body);
  if (error) return res.status(400).json(error.message);

  next();
};
