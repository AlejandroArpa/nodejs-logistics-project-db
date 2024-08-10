import { Router } from "express";
import { WarehouseController } from "../controllers/warehouse.controller";


export const warehouseRouter = Router();

warehouseRouter.post("/", WarehouseController.createWarehouse);  
warehouseRouter.get("/", WarehouseController.getWarehouses);
warehouseRouter.get("/:id", WarehouseController.getWarehouseById);
warehouseRouter.put("/:id", WarehouseController.updateWarehouse);
warehouseRouter.delete("/:id", WarehouseController.deleteWarehouse);

