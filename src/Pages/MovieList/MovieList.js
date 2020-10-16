import React, { useState, useEffect, useContext } from 'react';
import MovieThumb from "../../Components/MovieThumb/MovieThumb";
import Filters from "../../Shared/Filters";
import FavMovieContext from "../../FavMovieContext";

const MovieList = (props) => {


    const [favmovies, setfavmovies] = useContext(FavMovieContext);

    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState({ query: "", year: "" })
    const [isLoading, SetisLoading] = useState(false);
    const onfilterChangeHandler = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let newfilters = { ...filters };
        newfilters[name] = value
        setFilters(newfilters);
    }
    const onAddFavHandler = (movie) => {
        setfavmovies([...favmovies, movie]);
    }
    useEffect(() => {
        if (filters.query) {
            props.FilterMovieAction(filters);
        }
        else if (movies.length == 0) {
            if (props.movies.length == 0) {
                props.ListMovieAction();
            }
        }

    }, [filters]);

    return (

        <><Filters filters={filters} count={props.movies.length} filterChangeHandler={onfilterChangeHandler} /><div class="row" style={{ marginTop: "10px" }}>
            <div class="col-md-12">{(props.isLoading) ? <div id="overlay"></div> : ""}{(props.movies) && props.movies.map((movie) => {
                return <MovieThumb favmovies={favmovies} onAddFavHandler={onAddFavHandler} key={movie.id} movie={movie} />;
            })
            }
            </div>
        </div></>);

}
//MovieList.defaultProps = { movies: [], ListMovieAction: () => { } }
export default MovieList;