import { Request, Response } from "express";
import { addCam, deleteCam, edit, getDeviceCameras } from "../services/camera.service";

const getCameras = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const camera = await getDeviceCameras(id)
        return res.status(200).json(camera)
    } catch (error) {
        res.status(404)
        throw new Error("Cameras not found")
    }
}

const editCamera = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const camera = req.body
        await edit(camera, id)
        return res.status(200).json({ message: "Data has been updated successfully" })
    } catch (error) {
        res.status(404)
        throw new Error("Camera not found or it doesnt exist")
    }
}

const deleteCamera = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await deleteCam(id)
        return res.status(200).json({ message: "Successfully deleted the camera" })
    } catch (error) {
        res.status(404)
        throw new Error("Camera not found or it has been already removed")
    }
}

const addCamera = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const camera = await addCam(data)
        return res.status(200).json({ message: "Successfully added a cam to the data", data: camera })
    } catch (error) {
        res.status(400)
        throw new Error("The data you have entered is not valid")
    }
}

export { getCameras, editCamera, deleteCamera, addCamera }