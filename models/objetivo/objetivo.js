// import mongoose from 'mongoose';
//const {Schema, model} = mongoose;
//import { Enum_TipoObjetivo } from "../enums/enums.js";
// import { ProjectModel } from "../proyecto/proyecto.js";

// // interface Objetive {
// //     descripcion: string,
// //     tipo: Enum_TipoObjetivo,
// //     proyecto: Schema.Types.ObjectId,
// // }

// const objetiveSchema = new Schema<Objetive>({
//     descripcion:{
//         type:String,
//         required: true,
//     },
//     tipo:{
//         type:String,
//         enum: ['GENERAL', 'ESPECIFICO'],
//         required: true,
//     },
//     proyecto:{
//         type:Schema.Types.ObjectId,
//         ref: ProjectModel,
//     },
// });

// const ObjetiveModel = model('Objetivo', objetiveSchema, 'objetivos');

// export {ObjetiveModel};