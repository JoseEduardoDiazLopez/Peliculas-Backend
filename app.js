require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// modelos de la base de datos
const UserModel = require('./models/userModel');
const ProfileModel = require('./models/ProfileModel');
const MovieModel = require('./models/MovieModel');
const ReviewModel = require('./models/ReviewModel');
const CommentModel = require('./models/CommentModel');

//instancia de Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Importacion de las rutas



const profilesRouter = require('./api/routes/profiles');
const moviesRouter = require('./api/routes/movies');
const reviewsRouter = require('./api/routes/reviews');
const commentsRouter = require('./api/routes/comments');
const usersRouter = require('./api/routes/users');
//definicion
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);
app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);
app.use('/comments', commentsRouter);

// Rutas para perfiles

// Rutas para usuarios

//Rutas para películas

//Rutas Comentarios

//Rutas Reseñas 


// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error 909');
  });

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
