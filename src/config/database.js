import Sequelize from 'sequelize';
import PlantModel from '../models/plant';

const database = new Sequelize(process.env.DB_CONNECTION_STRING);

export const Plant = PlantModel(database);

export default database;
