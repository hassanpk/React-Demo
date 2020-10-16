import MovieList from "./MovieList";
import { connect } from 'react-redux'
import { ListMovieAction, FilterMovieAction } from "./MovieList.action";
import { createSelector } from "reselect";


const getMovies = state => state.movies;
const getMovieSelect = createSelector(
    [getMovies],
    (items) => {
        return items
    }
)

function mapStateToProps(state) {
    return {
        movies: getMovieSelect(state),
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = {
    ListMovieAction,
    FilterMovieAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);


