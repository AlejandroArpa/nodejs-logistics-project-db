import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Vehicles } from "./vehicle.model";
import { Warehouses } from "./warehouse.model";

@Table(
    {
        tableName: "drivers",
        timestamps: true
    }
)

export class Drivers extends Model<Drivers> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    name!: string;

    @HasMany(() => Vehicles)
    vehicles!: Vehicles[];

    @ForeignKey(() => Warehouses)
    @Column(DataType.INTEGER)
    warehouseId!: number;

    @BelongsTo(() => Warehouses)
    warehouse!: Warehouses;

}