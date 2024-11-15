import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import "dotenv/config"
import deviceRouter from "./routes/devices.routes"
import sequelize from "./sequelize/models/sequelise"
import cameraRouter from "./routes/camera.routes"
import errorHandler from "./middleware/errorHandler"
import identifierRoute from "./routes/identifier.routes"
import eventRoute from "./routes/events.routes"


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ origin: "http://localhost:3000" }))
app.use(deviceRouter)
app.use(cameraRouter)
app.use(eventRoute)
app.use(identifierRoute)
app.use(errorHandler)

const connect = async () => {
    sequelize.authenticate()
    sequelize.sync()
    app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
}


connect()