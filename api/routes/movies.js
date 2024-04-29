// movies.js

const express = require('express');
const router = express.Router();

// Importa el modelo de película
const MovieModel = require('../../models/MovieModel');

// Ruta para obtener todas las películas
router.get('/', async (req, res) => {
  try {
    const movies = await MovieModel.getAllMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear una nueva película
router.post('/', async (req, res) => {
  try {
    const newMovie = req.body;
    const createdMovie = await MovieModel.createMovie(newMovie);
    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar una película
router.put('/:id', async (req, res) => {
  const movieId = req.params.id;
  const updatedMovieData = req.body;
  try {
    const updatedMovie = await MovieModel.updateMovie(movieId, updatedMovieData);
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar una película
router.delete('/:id', async (req, res) => {
  const movieId = req.params.id;
  try {
    const deletedMovie = await MovieModel.deleteMovie(movieId);
    res.json({ message: deletedMovie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
