import { injectable } from "tsyringe";
import { Vehicles } from "../models";


@injectable()
export class VehiclesRepository {
    async createVehicle(vehicle: Vehicles): Promise<Vehicles | void> {
        try {
            return await Vehicles.create(vehicle);
        } catch (error) {
            console.log(error);
            
        }
    }

    async getVehicles(): Promise<Vehicles[] | void> {
        try {
            return await Vehicles.findAll();
        } catch (error) {
            console.log(error);
            
        }
    }

    async getVehicleById(id: number): Promise<Vehicles | void> {
        try {
            const vehicle = await Vehicles.findByPk(id);
            if (!vehicle) {
                throw new Error('Vehicle not found');
            }
            return vehicle;
        } catch (error) {
            console.log(error);
            
        }
    }

    async updateVehicle(id: number, vehicle: Vehicles): Promise<Vehicles | void> {
        try {
            const updatedVehicle = await Vehicles.update(vehicle, {
                where: { id }
            });
            if (!updatedVehicle) {
                throw new Error('Vehicle not found');
            }
            return vehicle;
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteVehicle(id: number): Promise<void> {
        try {
            const deletedVehicle = await Vehicles.destroy({
                where: { id }
            });
            if (!deletedVehicle) {
                throw new Error('Vehicle not found');
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}