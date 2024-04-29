const UserModel = require('../models/userModel');

// Controlador para la gestión de usuarios
const UsersController = {
  // Obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Crear un nuevo usuario
  createUser: async (req, res) => {
    try {
      const newUser = req.body;
      const createdUser = await UserModel.createUser(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Actualizar un usuario existente
  updateUser: async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    try {
      const updatedUser = await UserModel.updateUser(userId, updatedUserData);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Eliminar un usuario
  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUserMessage = await UserModel.deleteUser(userId);
      res.json({ message: deletedUserMessage });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};


module.exports = UsersController;
