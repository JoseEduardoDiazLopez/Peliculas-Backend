// comments.js

const express = require('express');
const router = express.Router();

// Importa el modelo de comentario
const CommentModel = require('../../models/CommentModel');

// Ruta para obtener todos los comentarios
router.get('/', async (req, res) => {
  try {
    const comments = await CommentModel.getAllComments();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo comentario
router.post('/', async (req, res) => {
  try {
    const newComment = req.body;
    const createdComment = await CommentModel.createComment(newComment);
    res.status(201).json(createdComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar un comentario
router.put('/:id', async (req, res) => {
  const commentId = req.params.id;
  const updatedCommentData = req.body;
  try {
    const updatedComment = await CommentModel.updateComment(commentId, updatedCommentData);
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar un comentario
router.delete('/:id', async (req, res) => {
  const commentId = req.params.id;
  try {
    const deletedComment = await CommentModel.deleteComment(commentId);
    res.json({ message: deletedComment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
