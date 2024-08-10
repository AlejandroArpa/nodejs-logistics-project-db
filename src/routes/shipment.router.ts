import { Router } from "express";
import { ShipmentController } from "../controllers/shipment.controller";


export const shipmentRouter = Router();
shipmentRouter.post("/", ShipmentController.createShipment);
shipmentRouter.get("/", ShipmentController.getShipments);
shipmentRouter.get("/:id", ShipmentController.getShipmentById);
shipmentRouter.put("/:id", ShipmentController.updateShipment);
shipmentRouter.delete("/:id", ShipmentController.deleteShipment);
