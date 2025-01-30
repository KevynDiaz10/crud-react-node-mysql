import { Sequelize } from "sequelize";
// conexion a la base de batos con sequelize que es un ORM
const db = new Sequelize('registro_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
export default db;
