import { connect } from "mongoose";

//const connect = require ('mongoose')

const conectarBD = async() => {
    return await connect(
        'mongodb+srv://ramirezleo:RamirezLeo@gestionproyectosmisiont.hjmim.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    ).then (()=>{
        console.log("Conexion Exitosa");
    }).catch((e) =>{
        console.error('Error conectando a la BD', e);
    })
};

export default conectarBD;