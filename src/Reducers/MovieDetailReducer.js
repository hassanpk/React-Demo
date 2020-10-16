import { MovieDetail, StoreMovieDetail } from "../Constants";
const MovieDetailReduder = (state = null, action) => {
     switch (action.type) {
        case StoreMovieDetail:
            {
                return action.moviedetail;
            }

        default: {
            return state;
        }
    }
}

export default MovieDetailReduder;