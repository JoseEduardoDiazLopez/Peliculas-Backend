// commentModel.js


const { createClient } = require('@supabase/supabase-js');

// Crea el cliente de Supabase
const supabaseUrl = 'https://nnphligeatzlxcfwsyvv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Modelo de comentario para interactuar con la base de datos
const CommentModel = {
  // Obtener todos los comentarios
  getAllComentarios: async () => {
    try {
      const { data, error } = await supabase.from('comentarios').select('*');
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al obtener los comentarios de la base de datos');
    }
  },
  
  // Crear un nuevo comentario
  createComentario: async (comentarioData) => {
    try {
      const { data, error } = await supabase.from('comentarios').insert(comentarioData);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al crear un nuevo comentario en la base de datos');
    }
  },

  // Actualizar un comentario existente
  updateComentario: async (comentarioId, comentarioData) => {
    try {
      const { data, error } = await supabase.from('comentarios').update(comentarioData).eq('idComentario', comentarioId);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error(`Error al actualizar el comentario con ID ${comentarioId}`);
    }
  },

  // Eliminar un comentario
  deleteComentario: async (comentarioId) => {
    try {
      const { error } = await supabase.from('comentarios').delete().eq('idComentario', comentarioId);
      if (error) throw new Error(error.message);
      return `Comentario con ID ${comentarioId} eliminado correctamente`;
    } catch (error) {
      throw new Error(`Error al eliminar el comentario con ID ${comentarioId}`);
    }
  }
};

module.exports = CommentModel;
