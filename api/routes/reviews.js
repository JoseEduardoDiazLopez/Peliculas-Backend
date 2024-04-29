// reviews.js

const express = require('express');
const router = express.Router();

// Importa el modelo de reseña
const ReviewModel = require('../../models/ReviewModel');

// Ruta para obtener todas las reseñas
router.get('/', async (req, res) => {
  try {
    const reviews = await ReviewModel.getAllReviews();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear una nueva reseña
router.post('/', async (req, res) => {
  try {
    const newReview = req.body;
    const createdReview = await ReviewModel.createReview(newReview);
    res.status(201).json(createdReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar una reseña
router.put('/:id', async (req, res) => {
  const reviewId = req.params.id;
  const updatedReviewData = req.body;
  try {
    const updatedReview = await ReviewModel.updateReview(reviewId, updatedReviewData);
    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar una reseña
router.delete('/:id', async (req, res) => {
  const reviewId = req.params.id;
  try {
    const deletedReview = await ReviewModel.deleteReview(reviewId);
    res.json({ message: deletedReview });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
