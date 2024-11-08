import { addCamera, deleteCamera, editCamera, getCameras } from "../controllers/camera.controller";
import { Router } from "express";

const cameraRouter = Router()

cameraRouter.get("/uncannycams/cameras/:id", getCameras as any)
cameraRouter.patch("/cameras/:id", editCamera as any)
cameraRouter.delete("/cameras/:id", deleteCamera as any)
cameraRouter.post("/uncannycams/cameras", addCamera as any)

export default cameraRouter