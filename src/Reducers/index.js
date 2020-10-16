import { combineReducers } from 'redux'
import moviesReducers from './MovieReducer'
import movieDetailReduder from './MovieDetailReducer'
import LoaderReducer from './LoaderReducer'
// main reducers file
// pass all reducers here
export default combineReducers({
    movies: moviesReducers,
    moviedetail: movieDetailReduder,
    isLoading: LoaderReducer
})