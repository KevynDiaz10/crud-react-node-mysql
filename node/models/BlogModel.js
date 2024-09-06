// importacion de la conexion de la Base de Datos
import db from "../database/db.js";
// importacion de sequelize 
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