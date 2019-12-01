
import { people, getById, addPerson, deletePerson } from "./db"

export const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) =>  {return getById(id)}
    },
    Mutation: {
        addPerson: (_,{name, age, gender}) => addPerson(name,age,gender),
        deletePerson: (_,{id}) => {return deletePerson(id)}
    }
};

//export default resolvers;