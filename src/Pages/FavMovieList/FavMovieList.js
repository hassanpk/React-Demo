import React, { useState, useEffect, useContext } from 'react';
import MovieThumb from "../../Components/MovieThumb/MovieThumb";
import Filters from "../../Shared/Filters";
import FavMovieContext from "../../FavMovieContext";

const FavMovieList = () => {

    const [favmovies] = useContext(FavMovieContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(favmovies);
    }, [favmovies]);

    return (<><div class="row" style={{ marginTop: "10px" }}>
        <div class="col-md-12">{(movies) && movies.map((movie) => {
            return <MovieThumb favmovies={movies} key={movie.id} movie={movie} />;
        })
        }
        </div>
    </div></>);

}
export default FavMovieList;