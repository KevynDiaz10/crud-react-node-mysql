// importacion de la conexion de la Base de Datos
import db from "../database/db.js";
// sequelize es un ORM para Node.js que facilita la interacción con bases de datos relacionales como MySQL, PostgreSQL, SQLite y SQL Server
import { DataTypes } from "sequelize";
//representacion de tabla de la base de datos

const BlogModel = db.define('blogs', {
    nombre: {type: DataTypes.STRING},
    item: {type: DataTypes.STRING},
    precio: {type: DataTypes.INTEGER},
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE}

})

export default BlogModel;
