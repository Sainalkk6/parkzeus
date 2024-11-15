import { Transaction } from "../sequelize/models/Transaction"
import { Camera } from "../sequelize/models/Camera"
import { Log, LogAttributes } from "../sequelize/models/Log"
import Identifier from "../sequelize/models/Identifier"
import { Parser } from 'json2csv'
import fs from "fs"
import PDFDocument, { write } from "pdfkit"


const createLog = async (data: LogAttributes) => {
    const result = await Log.create(data)
    return result
}


const getLog = async () => {
    let data: { vehicleCategory: string, vehicleNumber: string, tagNo: string, entryGate: string, exitGate: string, entryTime: Date | string, exitTime: Date | string, duration: string, validityStatus: string }[] = []
 
    const transactions = await Transaction.findAll()
    let formattedTime = ""
    for (let log of transactions) {
        const logs = await Log.findAll({ where: { transactionId: log.id } })

        let entryCam = ""
        let exitCam = ""
        logs.forEach(async (log) => {
            const cam = await Camera.findOne({ where: { cameraId: log.cameraId } })
            if (cam?.type === "entry") entryCam = cam.label!
            else if (cam?.type === "exit") exitCam = cam.label!

        })
        const entryDate = log?.entryTime?.toString().slice(0, 15)
        const exitDate = log?.exitTime?.toString().slice(0, 15)
        const formattedEntryTime = log?.entryTime?.toString().slice(17, 24)
        const formattedExitTime = log?.exitTime?.toString().slice(17, 24)
        const entryTime = log?.entryTime?.getTime()
        const exitTime = log?.exitTime?.getTime()
        const finalExitTime = (exitDate && formattedExitTime) === undefined ? "-" : `${exitDate} - ${formattedExitTime}`
        const finalEntryTime = (entryDate && formattedEntryTime) === undefined ? "-" : `${entryDate} - ${formattedEntryTime}`
        if (exitTime && entryTime) {
            const duration = exitTime - entryTime
            const seconds = (Math.floor(duration / 1000)) % 60
            const minutes = (Math.floor(seconds / 60)) % 60
            const hours = Math.floor(minutes / 60)
            formattedTime = `${hours}:${minutes}:${seconds}`
        }
        const identifier = await Identifier.findOne({ where: { identifierId: log?.identifierId }, attributes: ["identifierId", "vehicleType"] })

        data.push({
            vehicleCategory: identifier?.vehicleType || "",
            vehicleNumber: identifier?.identifierId || "",
            tagNo: "",
            entryGate: entryCam || "",
            exitGate: exitCam || "",
            entryTime: finalEntryTime || "-",
            exitTime: finalExitTime || "-",
            duration: log?.invalidatedAt ? "-" : formattedTime,
            validityStatus: log?.invalidatedAt ? "Invalid" : "Valid"
        })
    }

    return data
}

const createCSVReport = async () => {
    const data = await getLog()
    const json2csv = new Parser()
    const csv = json2csv.parse(data)
    return csv
}

const createPdfReport = async () => {
    const data = await getLog()
    const doc = new PDFDocument()
    doc.on('data', () => doc.write("report.pdf", data))
    doc.on('end', () => doc.end())
    doc.fontSize(25).text("yeehawww", 100, 100)
    doc.end()
}

export { createLog, getLog, createCSVReport, createPdfReport }

