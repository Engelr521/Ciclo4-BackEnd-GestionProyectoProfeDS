import { resolverAvance } from "../models/avance/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversUsuario } from "../models/usuario/resolvers.js";

export const resolvers = [resolversUsuario, resolversProyecto, resolverAvance];