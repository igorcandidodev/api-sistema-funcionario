import Sequelize from "sequelize";
import "dotenv/config";
import getEmployee from "./employeeDatabase";
import getDepartment from "./departmentDatabase";
import getTask from "./taskDatabase";
import getSupervisor from "./supervisorDataBase";
import getProject from "./projectDataBase";

const url = process.env.DATABASE_URL;

const sequelize = new Sequelize(url, {
  dialect: "postgres",
});

const databases = {
  Employee: getEmployee(sequelize, Sequelize),
  Department: getDepartment(sequelize, Sequelize),
  Task: getTask(sequelize, Sequelize),
  Supervisor: getSupervisor(sequelize, Sequelize),
  Project: getProject(sequelize, Sequelize),
  // Adiciona aqui as próximas tabelas
};

export { sequelize };

export default databases;
