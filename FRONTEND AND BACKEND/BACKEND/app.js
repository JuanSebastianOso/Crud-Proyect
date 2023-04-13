import express  from "express";
import cors from "cors";
import Coneccion from "./databases/Coneccion.js";
 

import routers  from "./routes/Routes.js";
import Connecion from "./databases/Coneccion.js";


const app= express();

app.use(cors())
app.use(express.json())
app.use("/blogs", routers)

try{
    await Coneccion.authenticate()
    console.log("Conexion exitosa a la bd ", Connecion.config.database)
}catch(error){

    console.log(`El error de conexion es  : ${error}`)
}
// app.get('/',(req,res)=>{
//     res.send("hola mundo")
//   })
  
app.listen(3001, ()=>{
    console.log("server up running in http://localhost:3001/")
})




