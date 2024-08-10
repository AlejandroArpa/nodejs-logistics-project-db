import { injectable } from "tsyringe";
import { Drivers } from "../models";

@injectable()
export class DriverRepository {
    async createDriver(driver: Drivers): Promise<Drivers | void> {
        try {
            return await Drivers.create(driver);
        } catch (error) {
            console.log(error);
            
        }
    }

    async getDrivers(): Promise<Drivers[] | void> {
        try {
            return await Drivers.findAll();
        } catch (error) {
            console.log(error);
            
        }
    }
}
