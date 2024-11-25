
import { deleteDevice, editDevice, getDevices, postDevices } from "../controllers/devices.controller";
import { Router } from "express";

import { dataSchema } from "../schemas/device.schema";
import { validate } from "../middleware/data.validation";



const deviceRouter = Router();


deviceRouter.post("/uncannycams", validate(dataSchema), postDevices);
deviceRouter.get("/uncannycams", getDevices as any)
deviceRouter.delete("/uncannycams/:id", deleteDevice as any)
deviceRouter.put("/uncannycams/:id",validate(dataSchema),editDevice as any)

export default deviceRouter