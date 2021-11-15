import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";
import { getParsedCommandLineOfConfigFile } from "typescript";

const main = async () =>{
    await conectarBD();

    //Crear usuario
    // UserModel.create({
    //     correo: 'ramirezleo52@gmail.com',
    //     identificacion: '324655929',
    //     nombre: 'leonardo',
    //     apellido: 'Ramirez',
    //     rol: Enum_Rol.estudiante,
    // })
    //     .then((u) => {
    //         console.log('usuario Creado', u);
    //     })
    //     .catch((e) => {
    //         console.error('Error creando el usuario', e);
    //     });


    // hacer consultas - Obtener los todos los usuarios
    // await UserModel.find()
    //     .then((u) =>{
    //         console.log('usuarios', u);
    //     })
    //     .catch((e) =>{
    //         console.error('Error obteniendo los usuarios', e);
    // });

    //Obtener un solo usuario
    // await UserModel.findOne({ identificacion: '32165498'})
    //     .then((u)=>{
    //         console.log('Usuario encontrado ',u);
    //     })
    //     .catch(e=>{
    //         console.log('Error al buscar un usuario', e)
    //     });

    //Editar un usuario
    // await UserModel.findOneAndUpdate({ correo: 'ramirezleo52@gmail.com'}, {
    //     nombre: 'Angel',
    //     rol: Enum_Rol.administrador,
    // })
    //     .then((u)=>{
    //         console.log('Usuario Actualizado', u);
    //     })
    //     .catch(e=>{
    //         console.error('Error Actualizando', e)
    //     });

    //Eliminar un Usario
    // await UserModel.findOneAndDelete({correo: 'ramirezleo52@gmail.com'})
    //     .then((u)=>{
    //         console.log('Usuario Eliminado', u);
    // })
    //     .catch(e=>{
    //         console.error('Error al elminar un usuario',e);
    // });

    

};

main();