//impontacion de el modelo de la base de datos
import { where } from "sequelize";
import BlogModel from "../models/BlogModel.js";



/** Metodos para el crud */

//MOSTRAR TODO

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//MOSTRAR UNO

export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

//CREAR 

export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "!Registro creado correctamente"
        })

    } catch (error) {
        res.json({ message: error.message })
    }
}

//ACTUALIZAR

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "!Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//ELIMINAR

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "!Registro elminado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}