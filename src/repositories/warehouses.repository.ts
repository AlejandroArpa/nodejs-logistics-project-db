import { injectable } from "tsyringe";
import { Warehouses } from "../models";


@injectable()
export class WarehousesRepository {
    async createWarehouse(warehouse: Warehouses): Promise<Warehouses | void> {
        try {
            return await Warehouses.create(warehouse);
        } catch (error) {
            console.log(error);
            
        }
    }

    async getWarehouses(): Promise<Warehouses[] | void> {
        try {
            return await Warehouses.findAll();
        } catch (error) {
            console.log(error);
            
        }
    }

    async getWarehouseById(id: number): Promise<Warehouses | void> {
        try {
            const warehouse = await Warehouses.findByPk(id);
            if (!warehouse) {
                throw new Error('Warehouse not found');
            }
            return warehouse;
        } catch (error) {
            console.log(error);
            
        }
    }

    async updateWarehouse(id: number, warehouse: Warehouses): Promise<Warehouses | void> {
        try {
            const updatedWarehouse = await Warehouses.update(warehouse, {
                where: { id }
            });
            if (!updatedWarehouse) {
                throw new Error('Warehouse not found');
            }
            return warehouse;
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteWarehouse(id: number): Promise<void> {
        try {
            const deletedWarehouse = await Warehouses.destroy({
                where: { id }
            });
            if (!deletedWarehouse) {
                throw new Error('Warehouse not found');
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}