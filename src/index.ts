import express from 'express';
import sequelize from './config/db';
import { config } from 'dotenv';
import { router } from './routes';

config();
const { PORT } = process.env;
const app = express();
app.use(express.json());
app.use('/api', router);

const launchServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
}

launchServer();