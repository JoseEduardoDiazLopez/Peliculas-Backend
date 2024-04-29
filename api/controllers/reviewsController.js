const ReviewModel = require('../models/reviewModel');

const ReviewsController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await ReviewModel.getAllReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createReview: async (req, res) => {
    try {
      const newReview = req.body;
      const createdReview = await ReviewModel.createReview(newReview);
      res.status(201).json(createdReview);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateReview: async (req, res) => {
    const reviewId = req.params.id;
    const updatedReviewData = req.body;
    try {
      const updatedReview = await ReviewModel.updateReview(reviewId, updatedReviewData);
      res.json(updatedReview);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteReview: async (req, res) => {
    const reviewId = req.params.id;
    try {
      const deletedReviewMessage = await ReviewModel.deleteReview(reviewId);
      res.json({ message: deletedReviewMessage });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
};

module.exports = ReviewsController;
