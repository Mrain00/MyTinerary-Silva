const Router = require('express').Router()

const ciudadesController  = require('../controllers/ciudadesControllers')
const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad, consultarCiudadesPorID} = ciudadesController

const itinerariosControllers = require('../controllers/itinerariosControllers')
const {obtenerItinerarios, cargarItinerarios, borrarItinerario, modificarItinerario, ObtenerUnItinerarioPorId} = itinerariosControllers

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

module.exports = Router 