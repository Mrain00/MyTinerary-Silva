require('dotenv').config()
const cors = require('cors')
const express = require('express')

require('./config/database')
const Router = require('./routes/routes')
const app = express()

const path = require('path')
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '0.0.0.0'

app.use(cors())
//middlewares
app.use(express.json())
app.use('/api', Router)


//si la aplicacion se encuentra en produccion 
if (process.env.NODE_ENV === 'production') {
    //la carpeta de archivos estaticos va a ser la ruta siguiente
    app.use(express.static('client/build'))
    //cualquier pedido de tipo get
    app.get('*', (req, res) => {
        //va a devolver el archivo index.html
        //porque es la unica vista ya que react se encarga de renderizar todas las "paginas" del sitio
        res.sendFile(path.join(__dirname + 'client/build/index.html'))
    })
}

app.listen(PORT, HOST, () => console.log(`server ready on port ${PORT}`))