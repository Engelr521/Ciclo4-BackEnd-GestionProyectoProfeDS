import { resolverAvance } from "../models/avance/resolvers";
import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversUsuario } from "../models/usuario/resolvers";

export const resolvers = [resolversUsuario, resolversProyecto, resolverAvance];