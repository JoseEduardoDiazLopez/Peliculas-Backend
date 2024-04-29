// reviewModel.js

const { createClient } = require('@supabase/supabase-js');

// Crea el cliente de Supabase
const supabaseUrl = 'https://nnphligeatzlxcfwsyvv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Modelo de reseña para interactuar con la base de datos
const ReviewModel = {
  // Obtener todas las reseñas
  getAllReseñas: async () => {
    try {
      const { data, error } = await supabase.from('reseñas').select('*');
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al obtener las reseñas de la base de datos');
    }
  },
  
  // Crear una nueva reseña
  createReseña: async (reseñaData) => {
    try {
      const { data, error } = await supabase.from('reseñas').insert(reseñaData);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error('Error al crear una nueva reseña en la base de datos');
    }
  },

  // Actualizar una reseña existente
  updateReseña: async (reseñaId, reseñaData) => {
    try {
      const { data, error } = await supabase.from('reseñas').update(reseñaData).eq('idReseña', reseñaId);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      throw new Error(`Error al actualizar la reseña con ID ${reseñaId}`);
    }
  },

  // Eliminar una reseña
  deleteReseña: async (reseñaId) => {
    try {
      const { error } = await supabase.from('reseñas').delete().eq('idReseña', reseñaId);
      if (error) throw new Error(error.message);
      return `Reseña con ID ${reseñaId} eliminada correctamente`;
    } catch (error) {
      throw new Error(`Error al eliminar la reseña con ID ${reseñaId}`);
    }
  }
};

module.exports = ReviewModel;
