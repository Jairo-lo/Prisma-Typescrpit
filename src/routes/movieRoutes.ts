import { Router } from 'express';
import { getAllMovies, createMovie, updateMovie, deleteMovie } from '../controllers/movieController';

const router = Router();

router.get('/', getAllMovies);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router;
