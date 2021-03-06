import mongoose from 'mongoose';
//import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from "../enums/enums.js";
//import { ObjetiveModel } from "../objetivo/objetivo.js";
import { UserModel } from "../usuario/usuario.js";

const {Schema, model} = mongoose;

// interface Proyecto {
//     nombre: string;
//     presupuesto: number;
//     fechaInicio:Date;
//     fechaFin:Date;
//     estado:Enum_EstadoProyecto;
//     fase:Enum_FaseProyecto;
//     lider:Schema.Types.ObjectId;
//     objetivos:[{descripcion: String; tipo: Enum_TipoObjetivo}];
    
// }

const projectSchema = new Schema(
    {
    nombre:{
        type:String,
        required: true,
    },
    presupuesto:{
        type:Number,
        required: true,
    },
    fechaInicio:{
        type:Date,
        required: true,
    },
    fechaFin:{
        type:Date,
        required: true,
    },
    estado:{
        type:String,
        enum: ['ACTIVO', 'INACTIVO'],
        default: 'INACTIVO',
    },
    fase:{
        type:String,
        enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
        default: 'NULO',
    },
    lider:{
        type:Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objetivos:[
        {
            descripcion:{
                type: String,
                required: true,
            },
            tipo:{
                type:String,
                enum: ['GENERAL', 'ESPECIFICO'],
                required: true,
            },
        },
    ],
    
},
//Para que fucnione el Virtual populate, toca poner las siguientes variables
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
}
);

// Virtual Populate, para traer info de varias colecciones.
projectSchema.virtual("avances", {
    ref: 'Avance',
    localField: "_id",
    foreignField: 'proyecto'
});
projectSchema.virtual("inscripciones", {
    ref: 'Inscripcion',
    localField: "_id",
    foreignField: 'proyecto'
});

const ProjectModel = model("Proyecto", projectSchema, "proyectos");

export { ProjectModel };