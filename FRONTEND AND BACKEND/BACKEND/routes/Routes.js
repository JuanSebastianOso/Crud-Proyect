
import express from 'express';


import { getallBlogs,getallBlog,createBlog,updateBlogs,deleteBlogs } from "../controllers/BlogsControllers.js";


const routers = express.Router()

routers.get('/',getallBlogs )
routers.get('/:id',getallBlog )
routers.post('/',createBlog )
routers.put('/:id',updateBlogs )
routers.delete('/:id',deleteBlogs)

export default routers
