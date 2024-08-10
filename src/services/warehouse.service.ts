import { inject, injectable } from "tsyringe";
import { WarehousesRepository } from "../repositories/warehouses.repository";


@injectable()
export class WarehouseService {
    constructor(@inject(WarehousesRepository) private warehouseRepository: WarehousesRepository ) { }

    async createWarehouse(warehouse: any) {
        try {
           return this.warehouseRepository.createWarehouse(warehouse);

        } catch (error) {
            console.log(error);
            
        }
    }

    async getWarehouses() {
        try {
           return this.warehouseRepository.getWarehouses();
        } catch (error) {
            console.log(error);
            
        }
    }

    async getWarehouseById(id: number) {
        try {
            return this.warehouseRepository.getWarehouseById(id);
        } catch (error) {
            console.log(error);
            
        }
    }

    async updateWarehouse(id: number, warehouse: any) {
        try {
           return this.warehouseRepository.updateWarehouse(id, warehouse);
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteWarehouse(id: number) {
        try {
            return this.warehouseRepository.deleteWarehouse(id);
        } catch (error) {
            console.log(error);
            
        }
    }
    
}