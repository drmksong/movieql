import { GraphQLServer }  from "graphql-yoga";
import {resolvers} from "./graphql/resolvers2"

const server = new GraphQLServer({
    typeDefs:"./graphql/schema2.graphql",
    resolvers
}); 

server.start(() => console.log("server is running"));