import Connecion from "../databases/Coneccion.js";

import { DataTypes} from "sequelize";

const Modelo= Connecion.define('crear_eventos',{
    name:{type:DataTypes.STRING},
    firstname:{type:DataTypes.STRING},
    date:{type:DataTypes.DATE},
    hour:{type:DataTypes.TIME},

    

    
})

export default Modelo
    
