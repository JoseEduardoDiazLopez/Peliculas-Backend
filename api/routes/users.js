// users.js

const express = require('express');
const router = express.Router();

// Importa el modelo de usuario
const UserModel = require('../../models/userModel');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await UserModel.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar un usuario
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  try {
    const updatedUser = await UserModel.updateUser(userId, updatedUserData);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar un usuario
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await UserModel.deleteUser(userId);
    res.json({ message: deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
