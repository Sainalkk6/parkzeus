import { createCSV, createPdf, getLogReports } from "../controllers/log.controller";
import express,{ Router } from "express";

const logRouter = Router()

logRouter.get("/logReports", getLogReports)
logRouter.get("/logs/csv", createCSV)
logRouter.get("/logs/pdf",createPdf)

export default logRouter