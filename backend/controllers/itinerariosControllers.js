const Itinerarios = require('../models/itinerarios')
const itinerariosControllers = {
    obtenerItinerarios: async (req, res) => {
        let itinerarios
        let error = null
        try {
            itinerarios = await Itinerarios.find()
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : { itinerarios },
            success: error ? false : true,
            error: error
        })
    },
    cargarItinerarios: async (req, res) => {         /* Controlador para cargar una nueva Itinerarios desde el front. */
        console.log(req.body)
        const { city, title, image, userName, userImg, likes, hours, price, hashtags, activities, comments } = req.body
        new Itinerarios({ city, title, image, userName, userImg, likes, hours, price, hashtags, activities, comments }).save()   /* salva  */
            .then((respuesta) => res.json({ respuesta }))
            .catch (error =>{ 
                return console.log(error)
            })
    },
    ObtenerUnItinerarioPorId: async(req,res)=>{
        const id = req.params.id;
        console.log(id)
        try{
            const data= await Itinerarios.find({ cityId: id })
            res.json({response:data})
        }
        catch(error){
            console.log(error)
        }
        
    },
    borrarItinerario: async (req, res) => {
        const id = req.params.id

        await Itinerarios.findOneAndDelete({ _id: id })
            .then((res) => res.json({ paso: "listo", respuesta: res }))
            .catch(error => res.json({ error }))
    },

    modificarItinerario: async (req, res) => {
        const id = req.params.id
        const itinerario = req.body

        let itinerariob = await Ciudades.findOneAndUpdate({ _id: id }, itinerario, { new: true })
        .then((response) => res.json({ paso: "listo", respuesta: response }))
        .catch(error => res.json({ error }))
        console.log(itinerariob)
    }
}
module.exports = itinerariosControllers