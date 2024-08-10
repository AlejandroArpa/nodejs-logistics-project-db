import { Router } from "express";
import { VehicleController } from "../controllers/vehicle.controller";


export const vehicleRouter = Router();

vehicleRouter.post("/", VehicleController.createVehicle);
vehicleRouter.get("/", VehicleController.getVehicles);
vehicleRouter.get("/:id", VehicleController.getVehicleById);
vehicleRouter.put("/:id", VehicleController.updateVehicle);
vehicleRouter.delete("/:id", VehicleController.deleteVehicle);
