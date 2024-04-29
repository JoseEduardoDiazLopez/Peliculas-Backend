

const { createClient } = require('@supabase/supabase-js');

// Crea el cliente de Supabase
const supabaseUrl = 'https://nnphligeatzlxcfwsyvv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Modelo de usuario para interactuar con la base de datos
const UserModel = {
  // Obtener todos los usuarios
  getAllUsuarios: async () => {
    try {
      const { data, error } = await supabase.from('usuarios').select('*');
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al obtener los usuarios de la base de datos');
    }
  },
  
  // Crear un nuevo usuario
  createUsuario: async (usuarioData) => {
    try {
      const { data, error } = await supabase.from('usuarios').insert(usuarioData);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al crear un nuevo usuario en la base de datos');
    }
  },

  // Actualizar un usuario existente
  updateUsuario: async (usuarioId, usuarioData) => {
    try {
      const { data, error } = await supabase.from('usuarios').update(usuarioData).eq('idUsuario', usuarioId);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error(`Error al actualizar el usuario con ID ${usuarioId}`);
    }
  },

  // Eliminar un usuario
  deleteUsuario: async (usuarioId) => {
    try {
      const { error } = await supabase.from('usuarios').delete().eq('idUsuario', usuarioId);
      if (error) throw new Error(error.message);
      return `Usuario con ID ${usuarioId} eliminado correctamente`;
    } catch (error) {
      throw new Error(`Error al eliminar el usuario con ID ${usuarioId}`);
    }
  }
};

module.exports = UserModel;
