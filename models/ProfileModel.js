require('dotenv').config();
// Crea el cliente de Supabase
const { createClient } = require('@supabase/supabase-js');
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

// Modelo de perfil para interactuar con la base de datos
const ProfileModel = {
  
  // Obtener todos los perfiles
  getAllProfiles: async () => {
    try {
      const { data, error } = await supabase.from('perfiles').select('*');
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al obtener los perfiles de la base de datos');
    }
  },
  
  // Crear un nuevo perfil
  createProfile: async (profileData) => {
    try {
      const { data, error } = await supabase.from('perfiles').insert(profileData);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al crear un nuevo perfil en la base de datos');
    }
  },

  // Actualizar un perfil existente
  updateProfile: async (profileId, profileData) => {
    try {
      const { data, error } = await supabase.from('perfiles').update(profileData).eq('idPerfil', profileId);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error(`Error al actualizar el perfil con ID ${profileId}`);
    }
  },

  // Eliminar un perfil
  deleteProfile: async (profileId) => {
    try {
      const { error } = await supabase.from('perfiles').delete().eq('idPerfil', profileId);
      if (error) throw new Error(error.message);
      return `Perfil con ID ${profileId} eliminado correctamente`;
    } catch (error) {
      throw new Error(`Error al eliminar el perfil con ID ${profileId}`);
    }
  }
};

module.exports = ProfileModel;
