import { resolverAvance } from "../models/avance/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolverInscripciones } from '../models/inscripcion/resolvers.js'

export const resolvers = [resolversUsuario, resolversProyecto, resolverAvance, resolverInscripciones];