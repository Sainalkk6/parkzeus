import { Transaction } from "../sequelize/models/Transaction"
import { Log, LogAttributes } from "../sequelize/models/Log"
import { Camera } from "../sequelize/models/Camera"
import Identifier from "../sequelize/models/Identifier"

const createLogReport = async (data: number) => {
    return await Log.create({ cameraId: data })
}

const sendLogReport = async (id: number) => {
    const transaction = await Transaction.findOne({ where: { cameraIdentifier: id } })
    const entryCam = await Camera.findOne({ where: { cameraId: id, type: "entry" } })
    const exitCam = await Camera.findOne({ where: { cameraId: id, type: "exit" } })
    const entryTime = transaction?.entryTime?.getTime() ?? 0
    const exitTime = transaction?.exitTime?.getTime() ?? 0
    if(entryTime !== 0 && exitTime !== 0){
        const duration = exitTime - entryTime
        const hours = new Date(duration).getHours()
        const minutes = new Date(duration).getMinutes()
        const seconds = new Date(duration).getSeconds()
        const formattedTime = `${hours} : ${minutes} : ${seconds}`
    } else{
    }
    // const vehicle = await Identifier.findOne({where:{identifierId:transaction?.identifierId}})
    // const data = {category:vehicle?.vehicleType,plate:transaction?.identifierId,entryGate:entryCam?.name ? entryCam.name : "-",exitGate:exitCam?.name ? exitCam.name : "-", entryTime:transaction?.entryTime || "",exitTime:transaction?.exitTime || "",duration:}

  

}




export { createLogReport, sendLogReport }