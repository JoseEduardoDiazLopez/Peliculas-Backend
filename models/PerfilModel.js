
const { createClient } = require('@supabase/supabase-js');

// Crea el cliente de Supabase
const supabaseUrl = 'https://nnphligeatzlxcfwsyvv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Modelo de perfil para interactuar con la base de datos
const PerfilModel = {
  // Obtener todos los perfiles
  getAllPerfiles: async () => {
    try {
      const { data, error } = await supabase.from('perfiles').select('*');
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al obtener los perfiles de la base de datos');
    }
  },
  
  // Crear un nuevo perfil
  createPerfil: async (perfilData) => {
    try {
      const { data, error } = await supabase.from('perfiles').insert(perfilData);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al crear un nuevo perfil en la base de datos');
    }
  },

  // Actualizar un perfil existente
  updatePerfil: async (perfilId, perfilData) => {
    try {
      const { data, error } = await supabase.from('perfiles').update(perfilData).eq('idPerfil', perfilId);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error(`Error al actualizar el perfil con ID ${perfilId}`);
    }
  },

  // Eliminar un perfil
  deletePerfil: async (perfilId) => {
    try {
      const { error } = await supabase.from('perfiles').delete().eq('idPerfil', perfilId);
      if (error) throw new Error(error.message);
      return `Perfil con ID ${perfilId} eliminado correctamente`;
    } catch (error) {
      throw new Error(`Error al eliminar el perfil con ID ${perfilId}`);
    }
  }
};

module.exports = PerfilModel;
