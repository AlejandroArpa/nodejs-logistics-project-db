import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { Warehouses, Drivers, Shipments, Vehicles } from '../models'

config();
const { DB_NAME, DB_USER, DB_HOST } = process.env;

const sequelize: Sequelize = new Sequelize({
    database: DB_NAME,
    dialect: 'mysql',
    username: DB_USER,
    password: 'password',
    host: DB_HOST,
    models: [Warehouses, Drivers, Shipments, Vehicles]
});

export default sequelize;