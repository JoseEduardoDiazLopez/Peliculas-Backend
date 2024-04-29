const CommentModel = require('../models/commentModel');

const CommentsController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await CommentModel.getAllComments();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createComment: async (req, res) => {
    try {
      const newComment = req.body;
      const createdComment = await CommentModel.createComment(newComment);
      res.status(201).json(createdComment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateComment: async (req, res) => {
    const commentId = req.params.id;
    const updatedCommentData = req.body;
    try {
      const updatedComment = await CommentModel.updateComment(commentId, updatedCommentData);
      res.json(updatedComment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteComment: async (req, res) => {
    const commentId = req.params.id;
    try {
      const deletedCommentMessage = await CommentModel.deleteComment(commentId);
      res.json({ message: deletedCommentMessage });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = CommentsController;
