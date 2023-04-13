
import Modelo from "../models/modules.js";

// Listar datos

export const getallBlogs= async(req,res) =>{
    try {
     const getDatos= await Modelo.findAll()
        res.json(getDatos)
        
    } catch (error) {
        res.json ({message: error.message})

    }
}

// Listar un dato

export const getallBlog= async(req,res) => {
    try {
       const getDato = await Modelo.findAll({
        where: {id: req.params.id}
        
    })
    res.json(getDato[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear un dato 
export const createBlog = async (req,res) => {
    try {

        console.log(req.body)
     
        
        await Modelo.create(req.body)

        console.log(req.body)
          
        res.json({ 
            
            "message": "Dato creado correctamente"
        })

    } catch (error) {
        res.json ({message:error.message})
        
    }
}
//Actualizar datos
 export const updateBlogs = async (req, res) => {
    try {
        const result=await Modelo.update(req.body,{
            where: {id: req.params.id}
            
        })
        console.log(result)
        result=!0 ? (res.json({
            
            message: "Dato actualizado correcctamente"
        }) ):res.json({
            
            message: "Dato no se ha actucalizado"
        }) 
        
    } catch (error) {
        res.json ({message:error.message}) 
    }
 }
//eliminar datos
export const deleteBlogs = async (req, res) =>{
    try {
        await Modelo.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Dato eliminado correctamente"
        })
    } catch (error) {
        res.json ({message:error.message}) 
    }
}


         
       
       
       
        
