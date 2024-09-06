import { Sequelize } from "sequelize";
// conexion a la base de batos 
const db = new Sequelize('registro_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
export default db;