import { Request, Response } from "express";
import { container } from "tsyringe";
import { DriverService } from "../services/driver.service";



export class DriverController {

    static async createDriver(req: Request, res: Response) {
        try {
            const driver = req.body;
            const driverService = container.resolve(DriverService);
            const newDriver = await driverService.createDriver(driver);
            res.status(201).json(newDriver);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getDrivers(req: Request, res: Response) {
        try {
            const driverService = container.resolve(DriverService);
            const drivers = await driverService.getDrivers();
            res.status(200).json(drivers);
        } catch (error) {
            res.status(500).json(error);
        }
    }


}