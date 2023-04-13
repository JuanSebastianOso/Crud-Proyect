import {Sequelize} from "sequelize";

const Connecion= new Sequelize ('eventos','root','',{
    host:'localhost',
    dialect:'mysql'


})

export default Connecion



    