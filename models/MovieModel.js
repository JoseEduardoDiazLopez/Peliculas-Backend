const { createClient } = require('@supabase/supabase-js');


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nnphligeatzlxcfwsyvv.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Modelo de película para interactuar con la base de datos
const MovieModel = {
    // Obtener todas las películas
    getAllMovies: async () => {
      try {
        const { data, error } = await supabase.from('peliculas').select('*');
        if (error) throw new Error(error.message);
        return data;
      } catch (error) {
        throw new Error('Error al obtener las películas de la base de datos');
      }
    },
    
    // Crear una nueva película
    createMovie: async (movieData) => {
      try {
        const { data, error } = await supabase.from('peliculas').insert(movieData);
        if (error) throw new Error(error.message);
        return data;
      } catch (error) {
        throw new Error('Error al crear una nueva película en la base de datos');
      }
    },
  
    // Actualizar una película existente
    updateMovie: async (movieId, movieData) => {
      try {
        const { data, error } = await supabase.from('peliculas').update(movieData).eq('idPelicula', movieId);
        if (error) throw new Error(error.message);
        return data;
      } catch (error) {
        throw new Error(`Error al actualizar la película con ID ${movieId}`);
      }
    },
  
    // Eliminar una película
    deleteMovie: async (movieId) => {
      try {
        const { error } = await supabase.from('peliculas').delete().eq('idPelicula', movieId);
        if (error) throw new Error(error.message);
        return `Película con ID ${movieId} eliminada correctamente`;
      } catch (error) {
        throw new Error(`Error al eliminar la película con ID ${movieId}`);
      }
    }
  };
  
  module.exports = MovieModel;
  