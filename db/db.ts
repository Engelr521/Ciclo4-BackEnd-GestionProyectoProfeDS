import { connect } from "mongoose";

//const connect = require ('mongoose')

const conectarBD = async() => {
    return await connect(process.env.DATABASE_URL)
    .then (()=>{
        console.log("Conexion Exitosa a la BD");
    }).catch((e) =>{
        console.error('Error conectando a la BD', e);
    })
};

export default conectarBD;