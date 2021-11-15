import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async () =>{
    await conectarBD();

    //Crear usuario
    // UserModel.create({
    //     correo: 'aleonardorm@itc.edu.co',
    //     identificacion: '321654929',
    //     nombre: 'leonardo',
    //     apellido: 'Mahecha',
    //     rol: Enum_Rol.estudiante,
    // })
    //     .then((u) => {
    //         console.log('usuario Creado', u);
    //     })
    //     .catch((e) => {
    //         console.error('Error creando el usuario', e);
    //     });


    // hacer consultas - Obtener los usuarios
    // await UserModel.find()
    //     .then((u) =>{
    //         console.log('usuarios', u);
    //     })
    //     .catch((e) =>{
    //         console.error('Error obteniendo los usuarios', e);
    // });
};

main();