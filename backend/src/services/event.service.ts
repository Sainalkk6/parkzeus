
import Events from "../sequelize/models/Events"
import { createEntryLog, createExitLog } from "./transaction.service"
import { Camera } from "../sequelize/models/Camera"
import { createLog } from "./log.service"
import Identifier from "../sequelize/models/Identifier"


const getEvents = async (data: any) => {
    let id: number | undefined
    const timeStamp = data.info.event_timestamp
    const date = new Date(timeStamp).toString()
    const compressedData = { cameraId: data.event.externalCameraId, externalId: data.extras.ac_external_camera_id, identifierId: data.event.name, timeStamp: date, images: data.image_urls.cloud_images, cameraName: data.event.external_camera_id }
    const response = await Events.create({ serverEvents: data, eventLog: compressedData, externalCameraId: compressedData.externalId })
    const camera = await Camera.findOne({ where: { cameraId: compressedData.externalId } })
    const identifierId = compressedData.identifierId &&  await Identifier.findOne({where:{identifierId:compressedData.identifierId}}) 

    if (camera) {
        if (camera.type === 'entry') {
            id = await createEntryLog({
                entryTime: new Date(),
                exitTime: null,
                invalidatedAt: null,
                identifierId: compressedData.identifierId,
            })
        } else if (camera.type === "exit") {
            id = await createExitLog({
                entryTime: null,
                exitTime: new Date(),
                invalidatedAt: null,
                identifierId: compressedData.identifierId,
            })
        }
    }

    if (id !== undefined && identifierId) {
        await createLog({ cameraId: compressedData.externalId, transactionId: id,vehicleId:identifierId.identifierId })
    }

    return response
}

const getAllEvents = async () => {
    const result = await Events.findAll()
    const filtered = result.map(item => item.eventLog)
    return filtered
}

export { getEvents, getAllEvents }