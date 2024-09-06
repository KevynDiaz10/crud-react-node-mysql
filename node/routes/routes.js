import express from 'express';
//importacion de los controladores
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/Blogcontroller.js';

const router = express.Router()

//Se activa cuando se realiza una solicitud GET a la URL raíz ( /).
//getAllBlogs función sea responsable de recuperar todas las entradas de blog de una base de datos y enviarlas como respuesta (por ejemplo, en formato JSON).
router.get('/', getAllBlogs)

//Se activa cuando se realiza una solicitud GET a una URL con un ID específico ( /:id).
//getBlog función sea responsable de recuperar una sola entrada de blog de la base de datos en función del ID proporcionado y enviarla como respuesta
router.get('/:id', getBlog)

//createBlog función sea responsable de recibir datos sobre una nueva entrada de blog (por ejemplo, título, contenido) desde el cuerpo de la solicitud (generalmente enviado como datos JSON) y almacenarlos en la base de datos.
router.post('/', createBlog)
//updateBlogfunción sea responsable de recibir datos sobre las actualizaciones de una entrada de blog (por ejemplo, título actualizado, contenido) desde el cuerpo de la solicitud y aplicar esos cambios a la entrada correspondiente en la base de datos.

router.put('/:id', updateBlog)

//Las solicitudes DELETE normalmente se utilizan para eliminar recursos
//deleteBlog función sea responsable de eliminar la entrada del blog con el ID coincidente de la base de datos
router.delete('/:id', deleteBlog)

export default router;

/** 
Puntos clave sobre los métodos HTTP:

GET: Se utiliza para recuperar datos de un servidor.
POST: Se utiliza para crear nuevos recursos en el servidor.
PUT: Se utiliza para actualizar los recursos existentes en el servidor.
ELIMINAR: Se utiliza para eliminar recursos del servidor

Resumen de los métodos HTTP y su función:

GET: Obtiene un recurso.
POST: Crea un nuevo recurso.
PUT: Actualiza un recurso existente.
DELETE: Elimina un recurso.
En resumen, las peticiones HTTP son iniciadas por los clientes para interactuar con los servidores y obtener o modificar datos.

*/