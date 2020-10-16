import { all, spawn } from 'redux-saga/effects'
import  mainSaga  from "../Pages/MovieList/Movie.saga"
import  movieDetailSaga  from "../Pages/MovieDetails/MovieDetails.saga"

export default function *() {
    yield all([
        spawn(mainSaga),
        spawn(movieDetailSaga)
    ]);
}