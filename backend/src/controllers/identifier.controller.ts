import { NextFunction, Request, Response } from "express";
import { createIdentifier, deleteSpecificIdentifier, edit, getAll, getSpecific } from "../services/identifier.service";

const postIdentifier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body

        const identifier = await createIdentifier(data)
        res.status(201).json(identifier)
    } catch (error) {
        next(error)
        res.status(400)
    }
}

const getSpecificIdentifier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const data = await getSpecific(id)
        return res.status(201).json(data)
    } catch (error) {
        next(error)
        res.status(404)
    }
}

const getIdentifiers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const identifier = await getAll()
        return res.status(201).json(identifier)
    } catch (error) {
        next(error)
        res.status(404)
        throw new Error("Something went wrong when fetching the identifiers")
    }
}

const deleteIdentifier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        await deleteSpecificIdentifier(Number(id))
        return res.status(200).json({ message: "Identifier deleted successfully" })
    } catch (error) {
        next(error)
        res.status(404)
        throw new Error("We couldnt find what you are looking for")
    }
}


const editIdentifier = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const id = req.params.id
        const data = req.body
        await edit(data, id)
        return res.status(200).json({ message: "Identifier updated successfully" })
    } catch (error) {
        next(error)
        res.status(404)
        throw new Error("We could'nt find what you are looking for")
    }
}

export { editIdentifier, getSpecificIdentifier, deleteIdentifier, postIdentifier, getIdentifiers }