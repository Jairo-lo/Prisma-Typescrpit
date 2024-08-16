import { Request, Response } from 'express';
import { getMovies, createNewMovie, updateMovieById, deleteMovieById } from '../services/movieService';

export const getAllMovies = async (req: Request, res: Response) => {
  const movies = await getMovies();
  res.json(movies);
};

export const createMovie = async (req: Request, res: Response) => {
  const movie = await createNewMovie(req.body);
  res.json(movie);
};

export const updateMovie = async (req: Request, res: Response) => {
  const movie = await updateMovieById(Number(req.params.id), req.body);
  res.json(movie);
};

export const deleteMovie = async (req: Request, res: Response) => {
  await deleteMovieById(Number(req.params.id));
  res.sendStatus(204);
};
