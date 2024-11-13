import { getEventController, postData } from "../controllers/event.controller";
import { Router } from "express";

const eventRoute = Router()

eventRoute.get("/webhooks/events",getEventController as any)
eventRoute.post("/webhooks/events", postData)

export default eventRoute