import { MovieDetail, StoreMovieDetail } from "../../Constants"

const GetMovieDetailAction = (movieId) => {
    return {
        type: MovieDetail,
        movieId
    }
}


const StoreMovieDetailAction = (moviedetail) => {
    return {
        type: StoreMovieDetail,
        moviedetail
    }
}


export { GetMovieDetailAction, StoreMovieDetailAction }
