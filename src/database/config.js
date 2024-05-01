import Sequelize from "sequelize";
import "dotenv/config";
import getEmployee from "./employeeDatabase";
import getDepartment from "./departmentDatabase";

const url = process.env.DATABASE_URL;

const sequelize = new Sequelize(url, {
  dialect: "postgres",
});

const databases = {
  Employee: getEmployee(sequelize, Sequelize),
  Department: getDepartment(sequelize, Sequelize),
  // Adiciona aqui as próximas tabelas
};

export { sequelize };

export default databases;
