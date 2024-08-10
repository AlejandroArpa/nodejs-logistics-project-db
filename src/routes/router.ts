import { Router } from 'express';
import { driverRouter } from './driver.router';
import { shipmentRouter } from './shipment.router';
import { vehicleRouter } from './vehicle.router';
import { warehouseRouter } from './warehouse.router';


export const router = Router();

router.use('/drivers', driverRouter);
router.use('/shipments', shipmentRouter);
router.use('/vehicles', vehicleRouter);
router.use('/warehouses', warehouseRouter);