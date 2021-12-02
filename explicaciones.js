import conectarBD from "./db/db";
import { UserModel } from "./models/usuario/usuario";
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from "./models/enums/enums";
import { ProjectModel } from "./models/proyecto/proyecto";
import { isNumericLiteral } from "typescript";

// creacion de usuario con poryecto y objetiovos en un array
const crearProyectosConObjetivos3 = async () => {
    const usuarioInicial = await UserModel.create({
        nombre: 'Leonardo',
        apellido: 'Ramirez',
        correo: 'alramirez@itc.edu.co',
        identificacion: '80797532',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });

    const proyectoCreado = await ProjectModel.create({
        nombre: 'proyecto Mision TIC',
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
        obejtivos: [
            {descripcion: 'Este es el opbjetivo General', tipo: Enum_TipoObjetivo.general},
            {descripcion: 'Este es el opbjetivo Especifico 1', tipo: Enum_TipoObjetivo.especifico},
            {descripcion: 'Este es el opbjetivo Especifico 2', tipo: Enum_TipoObjetivo.especifico},
        ]
    });
};

// consultar proyectos creados con obajetivos array
const consultaProyectosConObjetivos3 = async () => {
    const proyectoCreado = await ProjectModel.find({id: '619e7a5e086794734683e61d'});
    console.log('Proyecto: ', proyectoCreado);
};


const main = async () =>{
    await conectarBD();

    
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


    //CRUD TABLA PROYECTOS
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
