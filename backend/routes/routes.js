const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passport')

const ciudadesController  = require('../controllers/ciudadesControllers')
const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad, consultarCiudadesPorID} = ciudadesController

const itinerariosControllers = require('../controllers/itinerariosControllers')
const {obtenerItinerarios, cargarItinerarios, borrarItinerario, modificarItinerario, ObtenerUnItinerarioPorId} = itinerariosControllers

const usersControllers = require('../controllers/userControllers');
const {signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken}= usersControllers
/* CIUDADES */

Router.route('/allcities')
.get(obtenerCiudades) 
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(consultarCiudadesPorID)

/* ITINERARIOS */

Router.route('/itinerarios')
.get(obtenerItinerarios) 
.post(cargarItinerarios)

Router.route('/itinerarios/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(ObtenerUnItinerarioPorId)

// USERNAME

Router.route('/auth/signUp')
.post( signUpUsers, validator )

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
.get(verifyEmail) 
//LLAMA A FUNCION DE VERIFICACIION

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)

module.exports = Router 