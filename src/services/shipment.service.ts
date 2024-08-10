import { injectable, inject } from "tsyringe";
import { ShipmentRepository } from "../repositories/shipment.repository";


@injectable()
export class ShipmentService {
    constructor( @inject('ShipmentRepository') private shipmentRepository: ShipmentRepository) { }

    async createShipment(shipment: any) {
        try {
            return await this.shipmentRepository.createShipment(shipment);
        } catch (error) {
            console.log(error);
            
        }
    }

    async getShipments() {
        try {
            return await this.shipmentRepository.getShipments();
        } catch (error) {
            console.log(error);
            
        }
    }

    async getShipmentById(id: number) {
        try {
            return await this.shipmentRepository.getShipmentById(id);
        } catch (error) {
            console.log(error);
            
        }
    }

    async updateShipment(id: number, shipment: any) {
        try {
            return await this.shipmentRepository.updateShipment(id, shipment);
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteShipment(id: number) {
        try {
            return await this.shipmentRepository.deleteShipment(id);
        } catch (error) {
            console.log(error);
            
        }
    }
    
}