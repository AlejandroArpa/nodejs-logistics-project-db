import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Warehouses } from "./warehouse.model";
import { Drivers } from "./driver.model";
import { Vehicles } from "./vehicle.model";


@Table(
    {
        tableName: "shipments",
        timestamps: true
    }
)

export class Shipments extends Model<Shipments> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    item!: string;

    @Column(DataType.STRING)
    quantity!: string;

    @ForeignKey(() => Warehouses)
    @Column(DataType.INTEGER)
    warehouseId!: number;

    @BelongsTo(() => Warehouses)
    warehouse!: Warehouses;

    @ForeignKey(() => Drivers)
    @Column(DataType.INTEGER)
    driverId!: number;

    @BelongsTo(() => Drivers)
    driver!: Drivers;

    @ForeignKey(() => Vehicles)
    @Column(DataType.INTEGER)
    vehicleId!: number;

    @BelongsTo(() => Vehicles)
    vehicle!: Vehicles;

}