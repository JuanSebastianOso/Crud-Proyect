import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'

const URI =  'http://localhost:3001/blogs/'



const CompShowBlogs = () => {
   const [blogs, setBlog] = useState([])
   useEffect( ()=> {
    getBlogs()
   },[])


   //procedimiento para mostrar todos los blogs
   const getBlogs = async () => {
     const res = await axios.get(URI)
     setBlog(res.data)
    console.log(res.data)
   }

   //procedimiento para eliminar un blog 

   const deleteBlog = async (id) =>{
    await axios.delete(`${URI}${id}`)
    getBlogs()


   }


   return(
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) =>(
                                <tr Key ={blog.id }>
                                    <td>{ blog.name }</td>
                                    <td>{blog.firstname}</td>
                                    <td >{blog.date}</td>
                                    <td>{blog.hour}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ ()=>deleteBlog(blog.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                    </td>

                                </tr>

                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </div>
   )

}
 export default CompShowBlogs