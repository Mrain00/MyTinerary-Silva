require('dotenv').config()
require('./config/database')
const cors = require('cors')
const express = require('express')
const Router = require('./routes/routes')
const passport = require('passport')
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use('/api', Router)


//si la aplicacion se encuentra en produccion 
if(process.env.NODE_ENV === 'production'){
    //la carpeta de archivos estaticos va a ser la ruta siguiente
    app.use(express.static('client/build'))
    //cualquier pedido de tipo get
    app.get('*', (req, res)=>{
        //va a devolver el archivo index.html
        //porque es la unica vista ya que react se encarga de renderizar todas las "paginas" del sitio
        res.sendFile(path.join(__dirname + 'client/build/index.html'))
    })
}

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', ()=>console.log(`server ready on port ${process.env.PORT || 4000}`))