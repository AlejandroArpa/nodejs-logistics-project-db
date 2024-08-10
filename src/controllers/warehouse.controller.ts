import { Request, Response } from "express";
import { container } from "tsyringe";
import { WarehouseService } from "../services/warehouse.service";


export class WarehouseController {
    static async createWarehouse(req: Request, res: Response) {
        try {
            const warehouse = req.body;
            const warehouseService = container.resolve(WarehouseService);
            const newWarehouse = await warehouseService.createWarehouse(warehouse);
            res.status(201).json(newWarehouse);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getWarehouses(req: Request, res: Response) {
        try {
            const warehouseService = container.resolve(WarehouseService);
            const warehouses = await warehouseService.getWarehouses();
            res.status(200).json(warehouses);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getWarehouseById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const warehouseService = container.resolve(WarehouseService);
            const warehouse = await warehouseService.getWarehouseById(Number(id));
            res.status(200).json(warehouse);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updateWarehouse(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const warehouse = req.body;
            const warehouseService = container.resolve(WarehouseService);
            const updatedWarehouse = await warehouseService.updateWarehouse(Number(id), warehouse);
            res.status(200).json(updatedWarehouse);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteWarehouse(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const warehouseService = container.resolve(WarehouseService);
            await warehouseService.deleteWarehouse(Number(id));
            res.status(204).end();
        } catch (error) {
            res.status(500).json(error);
        }
    }
}