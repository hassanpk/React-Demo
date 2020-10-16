import { StoreMovieDetailAction } from "./MovieDetails.action";
import { MovieDetail, StoreMovieDetail } from "../../Constants"
import { takeLatest, call, put, delay } from "redux-saga/effects";
import { startLoading, endLoading } from "../../Shared/Loader/Loader.action";

function* getMovieDetail(action) {
    yield put(startLoading());
    const response = yield call(fetch,
        `https://api.themoviedb.org/3/movie/${action.movieId}?api_key=66cc4578bf84f7ab57836f3153df2d30&language=en-US`
    );
    const results = yield call([response, response.json]);
    yield delay(500)
    yield put(StoreMovieDetailAction(results));
    yield put(endLoading());

}

export default function* movieDetailSaga() {
    yield takeLatest(MovieDetail, getMovieDetail);
}