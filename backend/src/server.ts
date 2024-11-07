import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import "dotenv/config"
import deviceRouter from "./routes/devices.route"
import sequelize from "./sequelize/models/sequelise"
import cameraRouter from "./routes/camera.route"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ origin: "http://localhost:3000" }))
app.use(deviceRouter)
app.use(cameraRouter)

const connect = async () => {
    sequelize.authenticate()
    sequelize.sync()
    app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
}

connect()