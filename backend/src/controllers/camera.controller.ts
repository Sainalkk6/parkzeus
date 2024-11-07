import { Request, Response } from "express";
import { addCam, deleteCam, edit, getDeviceCameras } from "../services/camera.service";

const getCameras = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const camera = await getDeviceCameras(id)
        return res.status(200).json(camera)
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong while fetching the cameras", error })
    }
}

const editCamera = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const camera = req.body
        await edit(camera, id)
        return res.status(200).json({ message: "Data has been updated successfully" })
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong when trying to update the information" })
    }
}

const deleteCamera = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await deleteCam(id)
        return res.status(200).json({ message: "Successfully deleted the camera" })
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong while trying to delete the camera", error })
    }
}

const addCamera = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const camera = await addCam(data)
        return res.status(200).json({ message: "Successfully added a cam to the data", data: camera })
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong while adding the camera", error })
    }
}

export { getCameras, editCamera, deleteCamera, addCamera }