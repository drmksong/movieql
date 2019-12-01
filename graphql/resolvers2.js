import {getMovies} from "./db2";

export const resolvers ={
    Query: {
        movies: () => getMovies(),
    }
}