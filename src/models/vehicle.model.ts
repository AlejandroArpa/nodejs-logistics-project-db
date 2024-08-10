import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BelongsTo, HasMany, ForeignKey } from "sequelize-typescript";
import { Drivers } from "./driver.model";
import { Shipments } from "./shipment.model";
import { Warehouses } from "./warehouse.model";

@Table(
    {
        tableName: "vehicles",
        timestamps: true
    }
)

export class Vehicles extends Model<Vehicles> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    model!: string;

    @Column(DataType.INTEGER)
    year!: number;

    @ForeignKey(() => Drivers)
    @Column(DataType.INTEGER)
    driverId!: number;

    @BelongsTo(() => Drivers)
    driver!: Drivers;

    @HasMany(()=> Shipments)
    shipments!: Shipments[];
}