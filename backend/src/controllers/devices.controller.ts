import { Response, Request, NextFunction } from "express";
import { createDevice, deleteSpecificDevice, edit, getAllDevices } from "../services/devices.service";




const postDevices = async (req: Request, res: Response , next:NextFunction) => {
    try {
        const data = req.body
        const device = await createDevice(data)
        res.status(201).json(device)
    } catch (error) {
        next(error)
        res.status(400)
    }
}

const getDevices = async (req: Request, res: Response , next:NextFunction) => {
    try {
        const devices = await getAllDevices()
        return res.status(200).json(devices)
    } catch (error) {
        next(error)
        res.status(404)
    }
}

const deleteDevice = async (req: Request, res: Response , next:NextFunction) => {
    try {
        const id = req.params.id
        await deleteSpecificDevice(id)
        return res.status(200).json({ message: "Successfully removed" })
    } catch (error) {
        next(error)
        res.status(404)

    }
}

const editDevice = async (req: Request, res: Response , next:NextFunction) => {
    try {
        const id = req.params.id
        const data = req.body
        await edit(data, id)
        return res.status(200).json({ message: "Data has been edited successfully" })
    } catch (error) {
        next(error)
        res.status(404)

    }
}

export { postDevices, getDevices, deleteDevice, editDevice }