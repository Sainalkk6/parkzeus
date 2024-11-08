import { Response, Request } from "express";
import { createDevice, deleteSpecificDevice, edit, getAllDevices } from "../services/devices.service";




const postDevices = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const device = await createDevice(data)
        res.status(201).json(device)
    } catch (error) {
        res.status(400)
        throw new Error("The data you have entered is not valid")
    }
}

const getDevices = async (req: Request, res: Response) => {
    try {
        const devices = await getAllDevices()
        return res.status(200).json(devices)
    } catch (error) {
        res.status(404)
        throw new Error("Something went wrong while trying to fetch the device")
    }
}

const deleteDevice = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await deleteSpecificDevice(id)
        return res.status(200).json({ message: "Successfully removed" })
    } catch (error) {
        res.status(404)
        throw new Error("Device not found cause it may have been deleted already")
    }
}

const editDevice = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const data = req.body
        await edit(data, id)
        return res.status(200).json({ message: "Data has been edited successfully" })
    } catch (error) {
        res.status(404)
        throw new Error("Device not found or it doesnt exist")
    }
}

export { postDevices, getDevices, deleteDevice, editDevice }