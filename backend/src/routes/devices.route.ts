
import { deleteDevice, editDevice, getDevices, postDevices } from "../controllers/devices.controllers";
import { Router } from "express";
import { validate } from "../middleware";
import { dataSchema } from "../schemas/device.schema";



const router = Router();


router.post("/uncannycams", validate(dataSchema), postDevices);
router.get("/uncannycams", getDevices as any)
router.delete("/uncannycams/:id", deleteDevice as any)
router.put("/uncannycams/:id",editDevice as any)

export default router