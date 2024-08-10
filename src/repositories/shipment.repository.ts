import { injectable } from "tsyringe";
import { Shipments } from "../models";


@injectable()
export class ShipmentRepository {
    async createShipment(shipment: Shipments): Promise<Shipments | void> {
        try {
            return await Shipments.create(shipment);
        } catch (error) {
            console.log(error);
            
        }
    }

    async getShipments(): Promise<Shipments[] | void> {
        try {
            return await Shipments.findAll();
        } catch (error) {
            console.log(error);
            
        }
    }

    async getShipmentById(id: number): Promise<Shipments | void> {
        try {
            const shipment = await Shipments.findByPk(id);
            if (!shipment) {
                throw new Error('Shipment not found');
            }
            return shipment;
        } catch (error) {
            console.log(error);
            
        }
    }

    async updateShipment(id: number, shipment: Shipments): Promise<Shipments | void> {
        try {
            const updatedShipment = await Shipments.update(shipment, {
                where: { id }
            });
            if (!updatedShipment) {
                throw new Error('Shipment not found');
            }
            return shipment;
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteShipment(id: number): Promise<void> {
        try {
            const deletedShipment = await Shipments.destroy({
                where: { id }
            });
            if (!deletedShipment) {
                throw new Error('Shipment not found');
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}