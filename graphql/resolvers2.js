import {getMovies} from "./db2";

export const resolvers ={
    Query: {
        movies: (_,{limit,rating}) => getMovies(limit, rating)
    }
}