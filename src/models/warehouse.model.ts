import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Shipments } from "./shipment.model";
import { Drivers } from "./driver.model";
import { Vehicles } from "./vehicle.model";

@Table(
    {
        tableName: "warehouses",
        timestamps: true
    }
)

export class Warehouses extends Model<Warehouses> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.STRING)
    location!: string;

    @HasMany(() => Shipments)
    shipments!: Shipments[];

    @HasMany(()=> Drivers)
    drivers!: Drivers[];

}