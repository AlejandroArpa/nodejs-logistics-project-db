import { inject, injectable } from "tsyringe";
import { DriverRepository } from "../repositories/driver.repository";


@injectable()
export class DriverService {
    constructor( @inject('DriverRepository') private driverRepository: DriverRepository) { }

    async createDriver(driver: any) {
        try {
            return await this.driverRepository.createDriver(driver);
        } catch (error) {
            console.log(error);
            
        }
    }

    async getDrivers() {
        try {
            return await this.driverRepository.getDrivers();
        } catch (error) {
            console.log(error);
            
        }
    }
}
