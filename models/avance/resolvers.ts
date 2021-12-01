import { ModeloAvance } from "./avance";


const resolverAvance = {
    Query:{
        Avances: async (parent, args) => {
            const avances = await ModeloAvance.find();
            return avances;
        },
    },

    Mutation:{
        crearAvance: async (parent, args) =>{
            const avanceCreado = await ModeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
    },
}

export {resolverAvance};