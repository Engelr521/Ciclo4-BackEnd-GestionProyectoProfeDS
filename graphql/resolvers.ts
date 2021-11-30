import { argsToArgsConfig } from "graphql/type/definition";
import { UserModel } from "../models/user";

const resolvers = {
    Query:{
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
            return usuarios;
        },
    },
    //Estos son los elementos dela mutacion, que me permiten ller desde Graphql y enviar a la BD
    Mutation:{
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
            });
            //Como el estado es opcional, se agrega este if, para cuando el suario ingrese ese argumento opcional, lo tome y lo envie a la BD
            if (Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },
        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                estado: args.estado,
            });
            return usuarioEditado;
        },
        eliminarUsuario: async (parent, args) => {
            if (Object.keys(args).includes('_id')){
                const usuarioEliminado = await UserModel.findOneAndDelete({_id: args._id});
                return usuarioEliminado;
            } else if (Object.keys(args).includes('correo')){
                const usuarioEliminado = await UserModel.findOneAndDelete({correo: args.correo});
                return usuarioEliminado;
            }
        },
    },
};

export { resolvers };