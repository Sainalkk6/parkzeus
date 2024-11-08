
import { deleteDevice, editDevice, getDevices, postDevices } from "../controllers/devices.controller";
import { Router } from "express";
import { validate } from "../middleware/validation";
import { dataSchema } from "../schemas/device.schema";



const deviceRouter = Router();


deviceRouter.post("/uncannycams", validate(dataSchema), postDevices);
deviceRouter.get("/uncannycams", getDevices as any)
deviceRouter.delete("/uncannycams/:id", deleteDevice as any)
deviceRouter.put("/uncannycams/:id",editDevice as any)

export default deviceRouter