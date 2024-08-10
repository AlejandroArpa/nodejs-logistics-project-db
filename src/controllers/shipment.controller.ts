import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShipmentService } from "../services/shipment.service";


export class ShipmentController {
    static async createShipment(req: Request, res: Response) {
        try {
            const shipment = req.body;
            const shipmentService = container.resolve(ShipmentService);
            const newShipment = await shipmentService.createShipment(shipment);
            res.status(201).json(newShipment);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getShipments(req: Request, res: Response) {
        try {
            const shipmentService = container.resolve(ShipmentService);
            const shipments = await shipmentService.getShipments();
            res.status(200).json(shipments);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getShipmentById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const shipmentService = container.resolve(ShipmentService);
            const shipment = await shipmentService.getShipmentById(id);
            res.status(200).json(shipment);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updateShipment(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const shipment = req.body;
            const shipmentService = container.resolve(ShipmentService);
            const updatedShipment = await shipmentService.updateShipment(id, shipment);
            res.status(200).json(updatedShipment);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteShipment(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const shipmentService = container.resolve(ShipmentService);
            await shipmentService.deleteShipment(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json(error);
        }
    }

}