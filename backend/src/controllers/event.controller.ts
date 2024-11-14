import { NextFunction, Request, response, Response } from "express";
import { getAllEvents, getEvents } from "../services/event.service";

const postData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const resp = await getEvents(data)
        res.status(200).json(resp)
    } catch (error) {
        next(error)
        res.status(400)
    }
}

const getEventController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await getAllEvents()
        return res.status(201).json(events)
    } catch (error) {
        next(error)
        res.status(400)
    }
}

export { postData, getEventController }