import { gql } from'apollo-server-express';

const tiposProyecto = gql`

    # Este type es para poder realizar la consulta de los objetivos en el query
    type Objetivo{
        _id: ID!
        descripcion: String!
        tipo: Enum_TipoObjetivo!
    }
    # Este Inoput, es para pa creacion de los objetivos dentro de la mutacion de creacion proyectos
    input crearObjetivo{
        descripcion: String!
        tipo: Enum_TipoObjetivo!
    }

    type Proyecto{
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio:Date!
        fechaFin:Date!
        estado:Enum_EstadoProyecto!
        fase:Enum_FaseProyecto!
        lider:Usuario!
        objetivos:[Objetivo]
        avances: [Avance]
        inscripciones: [Inscripcion]
    }

    type Query{
        Proyectos: [Proyecto]
    }

    type Mutation{
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            fechaInicio:Date!
            fechaFin:Date!
            estado:Enum_EstadoProyecto!
            fase:Enum_FaseProyecto!
            lider:String!
            objetivos:[crearObjetivo]
        ): Proyecto
    } 


`;

export { tiposProyecto };