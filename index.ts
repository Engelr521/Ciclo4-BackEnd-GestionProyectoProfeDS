import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";
import { ProjectModel } from "./models/project";

const main = async () =>{
    await conectarBD();

    //Crear Un proyecto en MongoDB 
    // ProjectModel.create({
    //     nombre: 'Proyecto 3',
    //     presupuesto: 520,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date("2024/11/10"),
    //     lider: '6192c3b91e466ef676e52236',
    // })
    //     .then((p) => {
    //         console.log('Proyecto Creado',p);
    //     })
    //     .catch((e) => {
    //         console.error('Error en la creacion del proyecto',e)
    //     });

    //Consultar Proyectos de la coleccion proyectos, junto con su lider de la coleccion de ususarios
    // const proyecto = await ProjectModel.find({nombre: 'Proyecto 3'}).populate('lider')
    // .then((proyecto) => {
    //         console.log('El proyecto es: ', proyecto);
    //     })
    //     .catch((e) => {
    //         console.error('Error al buscar el proyecto', e)
    //     });

    

};

main();

// CRUD USUARIOS

 //Crear usuario
    // UserModel.create({
    //     correo: 'ramirezleo52@gmail.com',
    //     identificacion: '324655929',
    //     nombre: 'leonardo',
    //     apellido: 'Ramirez',
    //     rol: Enum_Rol.lider,
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
