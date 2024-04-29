const ProfileModel = require('../models/profileModel');

const ProfilesController = {
  getAllProfiles: async (req, res) => {
    try {
      const profiles = await ProfileModel.getAllProfiles();
      res.json(profiles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProfile: async (req, res) => {
    try {
      const newProfile = req.body;
      const createdProfile = await ProfileModel.createProfile(newProfile);
      res.status(201).json(createdProfile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateProfile: async (req, res) => {
    const profileId = req.params.id;
    const updatedProfileData = req.body;
    try {
      const updatedProfile = await ProfileModel.updateProfile(profileId, updatedProfileData);
      res.json(updatedProfile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteProfile: async (req, res) => {
    const profileId = req.params.id;
    try {
      const deletedProfileMessage = await ProfileModel.deleteProfile(profileId);
      res.json({ message: deletedProfileMessage });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};


module.exports = ProfilesController;
