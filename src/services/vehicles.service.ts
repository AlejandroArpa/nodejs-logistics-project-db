import { inject, injectable } from "tsyringe";
import { VehiclesRepository } from "../repositories/vehicles.repository";


@injectable()
export class VehiclesService {

    constructor(@inject('VehiclesRepository') private vehiclesRepository: VehiclesRepository ) { }
    async createVehicle(vehicle: any) {
        try {
            return await this.vehiclesRepository.createVehicle(vehicle);
        } catch (error) {
            console.log(error);
            
        }
    }

    async getVehicles() {
        try {
            return await this.vehiclesRepository.getVehicles();
        } catch (error) {
            console.log(error);
            
        }
    }

    async getVehicleById(id: number) {
        try {
            const vehicle = await this.vehiclesRepository.getVehicleById(id);
            if (!vehicle) {
                throw new Error('Vehicle not found');
            }
            return vehicle;
        } catch (error) {
            console.log(error);
            
        }
    }

    async updateVehicle(id: number, vehicle: any) {
        try {
            const updatedVehicle = await this.vehiclesRepository.updateVehicle(id, vehicle);    
            if (!updatedVehicle) {
                throw new Error('Vehicle not found');
            }
            return vehicle;
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteVehicle(id: number) {
        try {
            await this.vehiclesRepository.deleteVehicle(id);
        } catch (error) {
            console.log(error);
            
        }
    }
    
}