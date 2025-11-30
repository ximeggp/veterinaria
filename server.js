const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

// middlewares:
app.use(express.json())
app.use(cors())

const reporteRoutes = require("./routes/reportes")
app.use("/api/reportes", reporteRoutes)

// conexion a Mongo:
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.log("Error al conectar a MongoDB", err))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})