import { NextFunction, Request, Response } from "express";
import { addCam, deleteCam, edit, getDeviceCameras } from "../services/camera.service";

const getCameras = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const id = req.params.id
        const camera = await getDeviceCameras(id)
        return res.status(200).json(camera)
    } catch (error) {
        next(error)
        res.status(404)
    }
}

const editCamera = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const id = req.params.id
        const camera = req.body
        await edit(camera, id)
        return res.status(200).json({ message: "Data has been updated successfully" })
    } catch (error) {
        next(error)
        res.status(404)
    }
}

const deleteCamera = async (req: Request, res: Response , next:NextFunction) => {
    try {
        const id = req.params.id
        await deleteCam(id)
        return res.status(200).json({ message: "Successfully deleted the camera" })
    } catch (error) {
        next(error)
        res.status(404)
    }
}

const addCamera = async (req: Request, res: Response , next:NextFunction) => {
    try {
        const data = req.body
        const camera = await addCam(data)
        return res.status(200).json({ message: "Successfully added a cam to the data", data: camera })
    } catch (error) {
        next(error)
        res.status(400)
    }
}

export { getCameras, editCamera, deleteCamera, addCamera }