import { Router } from "express";
import { DriverController } from "../controllers/driver.controller";

export const driverRouter = Router();
driverRouter.post("/", DriverController.createDriver);
driverRouter.get("/", DriverController.getDrivers);
