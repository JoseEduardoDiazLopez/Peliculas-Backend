// profiles.js

const express = require('express');
const router = express.Router();

// Importa el modelo de perfil
const ProfileModel = require('../../models/ProfileModel');

// Ruta para obtener todos los perfiles
router.get('/', async (req, res) => {
  try {
    const profiles = await ProfileModel.getAllProfiles();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo perfil
router.post('/', async (req, res) => {
  try {
    const newProfile = req.body;
    const createdProfile = await ProfileModel.createProfile(newProfile);
    res.status(201).json(createdProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar un perfil
router.put('/:id', async (req, res) => {
  const profileId = req.params.id;
  const updatedProfileData = req.body;
  try {
    const updatedProfile = await ProfileModel.updateProfile(profileId, updatedProfileData);
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar un perfil
router.delete('/:id', async (req, res) => {
  const profileId = req.params.id;
  try {
    const deletedProfile = await ProfileModel.deleteProfile(profileId);
    res.json({ message: deletedProfile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
