import { Request, Response } from "express";
import { container } from "tsyringe";
import { VehiclesService } from "../services/vehicles.service";


export class VehicleController {
    static async createVehicle(req: Request, res: Response) {
        try {
            const vehicle = req.body;
            const vehicleService = container.resolve(VehiclesService);
            const newVehicle = await vehicleService.createVehicle(vehicle);
            res.status(201).json(newVehicle);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getVehicles(req: Request, res: Response) {
        try {
            const vehicleService = container.resolve(VehiclesService);
            const vehicles = await vehicleService.getVehicles();
            res.status(200).json(vehicles);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getVehicleById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vehicleService = container.resolve(VehiclesService);
            const vehicle = await vehicleService.getVehicleById(Number(id));
            res.status(200).json(vehicle);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updateVehicle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vehicle = req.body;
            const vehicleService = container.resolve(VehiclesService);
            const updatedVehicle = await vehicleService.updateVehicle(Number(id), vehicle);
            res.status(200).json(updatedVehicle);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteVehicle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vehicleService = container.resolve(VehiclesService);
            await vehicleService.deleteVehicle(Number(id));
            res.status(204).end();
        } catch (error) {
            res.status(500).json(error);
        }
    }
}