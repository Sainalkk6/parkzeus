import { NextFunction, Request, Response } from "express";
import { createCSVReport, createPdfReport, getLog } from "../services/log.service";


const getLogReports = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await getLog()
        res.status(200).json(data)
    } catch (error) {
        next(error)
        res.status(400)
    }
}


const createCSV = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await createCSVReport()
        res.header('Content-Type', 'text/csv').attachment("reports.csv").send(data)
    } catch (error) {
        next(error)
        res.status(400)
    }
}

const createPdf = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
        await createPdfReport(res); 
    } catch (error) {
        next(error);
    }
};

export { getLogReports, createCSV, createPdf }