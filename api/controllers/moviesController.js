const MovieModel = require('../models/movieModel');

const MoviesController = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await MovieModel.getAllMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createMovie: async (req, res) => {
    try {
      const newMovie = req.body;
      const createdMovie = await MovieModel.createMovie(newMovie);
      res.status(201).json(createdMovie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateMovie: async (req, res) => {
    const movieId = req.params.id;
    const updatedMovieData = req.body;
    try {
      const updatedMovie = await MovieModel.updateMovie(movieId, updatedMovieData);
      res.json(updatedMovie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteMovie: async (req, res) => {
    const movieId = req.params.id;
    try {
      const deletedMovieMessage = await MovieModel.deleteMovie(movieId);
      res.json({ message: deletedMovieMessage });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = MoviesController;
