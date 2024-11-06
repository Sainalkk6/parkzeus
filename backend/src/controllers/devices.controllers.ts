import { Response, Request } from "express";
import { createDevice, deleteSpecificDevice, edit, getAllDevices } from "../services/devices.services";




const postDevices = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const device = await createDevice(data)
        res.status(201).json(device)
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error })
    }
}

const getDevices = async (req: Request, res: Response) => {
    try {
        const devices = await getAllDevices()
        return res.status(200).json(devices)
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong", error })
    }
}

const deleteDevice = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await deleteSpecificDevice(id)
        return res.status(200).json({ message: "Successfully removed" })
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong", error })
    }
}

const editDevice = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const data = req.body
        await edit(data, id)
        return res.status(200).json({ message: "Data has been edited successfully" })
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong", error })
    }
}

export { postDevices, getDevices, deleteDevice, editDevice }