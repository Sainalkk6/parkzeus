import Events from "../sequelize/models/Events"

const getEvents = async (data: any) => {
    const timeStamp = data.info.event_timestamp
    const date = new Date(timeStamp * 1).toString()
    console.log("===",date)
    const compressedData = { cameraId: data.event.externalCameraId, externalId: data.extras.ac_external_camera_id, identifierId: data.event.name, timeStamp: date, images: data.image_urls.cloud_images, cameraName: data.event.external_camera_id }
    const response = await Events.create({ serverEvents: data, eventLog: compressedData, externalCameraId: compressedData.externalId })

    return response
}

const getAllEvents = async () => {
    const result = await Events.findAll()
    const filtered = result.map(item => item.eventLog)
    return filtered
}

export { getEvents, getAllEvents }