import { storeMovieData, storeFilterMovieData } from "../Constants";

const MovieReducer = (state = [], action) => {
    switch (action.type) {
        case storeMovieData:
            return action.movie;
        case storeFilterMovieData:
            return action.movie;
        default: {
            return state;
        }
    }
}

export default MovieReducer;