import axios from "axios";
import  {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3001/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()



    //procedimiento para actualizar 
    const update = async (e) =>{
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content: content,
            date: date,
            hour: hour
        })
        navigate('/')
    }
    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async() =>{
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
        setDate(res.data.date)
        setHour(res.data.hour)
    }
    return(
        <div>
            <h3>Editar Evento </h3>
            <form onSubmit={update}>
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

export default CompEditBlog