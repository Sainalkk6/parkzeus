import { validate } from "../middleware/identifier.validation";
import { editIdentifier, deleteIdentifier, postIdentifier, getIdentifiers, getSpecificIdentifier } from "../controllers/identifier.controller";
import { Router } from "express";
import identifierSchema from "../schemas/identifier.schema";

const identifierRoute = Router()

identifierRoute.get("/identifiers", getIdentifiers as any)
identifierRoute.post("/identifier", validate(identifierSchema), postIdentifier)
identifierRoute.delete("/identifier/:id", deleteIdentifier as any)
identifierRoute.put("/identifier/:id", editIdentifier as any)
identifierRoute.get("/identifier/:id", getSpecificIdentifier as any)


export default identifierRoute