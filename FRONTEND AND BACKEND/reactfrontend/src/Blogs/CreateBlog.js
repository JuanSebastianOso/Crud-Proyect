import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 const CompCreateBlog =() =>{

    const URI = 'http://localhost:3001/blogs'

     const [title, setTitle] = useState('')
     const [content, setContent] = useState('')
     const [date, setDate] = useState('')
     const [hour, setHour] = useState('')
     const navigate = useNavigate()


     //prodecimiento para guardar
     const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {title: title, content:content})
        navigate('/')
     }



    return (
        <div>
            <h3>Creando Evento </h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input 
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                    type="text"
                    className='form-control'
                    ></input>

                    </div>

                    <div className='mb-3'>
                         <label className="form-label">Contenido</label>
                    <textarea 
                    value={content}
                    onChange={ (e) => setContent(e.target.value)}
                    type="text"
                    className='form-control'
                    />
                </div>
                <div className='mb-3'>
                         <label className="form-label">Fecha</label>
                    <input 
                    value={date}
                    onChange={ (e) => setDate(e.target.value)}
                    type="date"
                    className='form-control'
                    />
                </div>
                <div className='mb-3'>
                         <label className="form-label">Hora</label>
                    <input 
                    value={hour}
                    onChange={ (e) => setHour(e.target.value)}
                    type="time"
                    className='form-control'
                    />
                </div>
                
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    )
 }
 export default CompCreateBlog