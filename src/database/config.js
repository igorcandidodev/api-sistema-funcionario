import Sequelize from 'sequelize';
import 'dotenv/config'
import getEmployee from './employeeDatabase';

const url = process.env.DATABASE_URL;

const sequelize = new Sequelize(url);

const databases = {
    Employee: getEmployee(sequelize, Sequelize),
    // Adiciona aqui as próximas tabelas
}


export {sequelize};

export default databases;