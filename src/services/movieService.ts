import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMovies = async () => {
  return prisma.movie.findMany();
};

export const createNewMovie = async (movieData: any) => {
  return prisma.movie.create({
    data: movieData,
  });
};

export const updateMovieById = async (id: number, movieData: any) => {
  return prisma.movie.update({
    where: { id },
    data: movieData,
  });
};

export const deleteMovieById = async (id: number) => {
  return prisma.movie.delete({
    where: { id },
  });
};
