import { ListMovie, storeMovieData, FilterMovie } from "../../Constants";
import { SaveMoviedataStore, SaveFilterMoviedataStore } from "../MovieList/MovieList.action";
import { takeLatest, call, put, retry, takeEvery } from 'redux-saga/effects';
import { startLoading, endLoading } from '../../Shared/Loader/Loader.action';

function* getMovieList() {
    try {
        
        const response = yield call(
            fetch,
            `https://api.themoviedb.org/3/movie/popular?api_key=66cc4578bf84f7ab57836f3153df2d30&language=en-US&page=1`
        );
        
        const data = yield call([response, response.json])
        return data;
        
    } catch {
        yield put(endLoading);
    }
}

function* getFilterMovies(action) {
    try {
        yield put(startLoading());
        const response = yield call(fetch,
            `https://api.themoviedb.org/3/search/movie?api_key=66cc4578bf84f7ab57836f3153df2d30&language=en-US&query=${action.filters.query}&year=${action.filters.year}&page=1&include_adult=false`
        );
        const data = yield call([response, response.json]);
        const results = data.results.filter(x => x.poster_path !== null);
        yield put(endLoading());
        yield put(SaveFilterMoviedataStore(results));
    }
    catch (err) {
        yield put(endLoading());
    }
}

function transformInput(data) {
    return data.results;
}

function* getAllMovies() {

    try {
        yield put(startLoading());
        const movies = yield call(getMovieList);
        const moviesData = yield call(transformInput, movies);
        yield put(endLoading());
        yield put(SaveMoviedataStore(moviesData));

    } catch (err) {
        console.log(err);
    }

}

export default function* mainSaga() {
    yield takeLatest(FilterMovie, getFilterMovies);
    yield takeLatest(ListMovie, getAllMovies);
}