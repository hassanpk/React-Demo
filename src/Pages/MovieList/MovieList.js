import React, { useState, useEffect, useContext } from 'react';
import MovieThumb from "../../Components/MovieThumb/MovieThumb";
import Filters from "../../Shared/Filters";
import FavMovieContext from "../../FavMovieContext";

const MovieList = (props) => {

    const [favmovies, setfavmovies] = useContext(FavMovieContext);

    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState({ query: "", year: "" })
    const onfilterChangeHandler = (event) => {
        debugger
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
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=66cc4578bf84f7ab57836f3153df2d30&language=en-US&query=${filters.query}&year=${filters.year}&page=1&include_adult=false`) // Call the fetch function passing the url of the API as a parameter
                .then(response => response.json())
                .then((data) => {
                    setMovies(data.results.filter(x => x.poster_path !== null));
                    console.log(data.results.filter(x => x.poster_path !== null));
                })
                .catch(function () {
                });
        }
        else if (movies.length == 0) {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=66cc4578bf84f7ab57836f3153df2d30&language=en-US&page=1`) // Call the fetch function passing the url of the API as a parameter
                .then(response => response.json())
                .then((data) => {
                    setMovies(data.results);
                })
                .catch(function () {
                    // This is where you run code if the server returns any errors
                });
        }

    }, [filters]);

    return (<><Filters filters={filters} count={movies.length} filterChangeHandler={onfilterChangeHandler} /><div class="row" style={{ marginTop: "10px" }}>
        <div class="col-md-12">{(movies) && movies.map((movie) => {
            return <MovieThumb favmovies={favmovies} onAddFavHandler={onAddFavHandler} key={movie.id} movie={movie} />;
        })
        }
        </div>
    </div></>);

}
export default MovieList;