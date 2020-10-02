import React from 'react';
import MovieThumb from "./MovieThumb";
import Filters from "./Shared/Filters";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] }
    }

    componentDidMount() {
        const that = this;
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=66cc4578bf84f7ab57836f3153df2d30&language=en-US&page=1`) // Call the fetch function passing the url of the API as a parameter
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ movies: data.results }, () => {
                    console.log(that.state.movies);
                });

            })
            .catch(function () {
                // This is where you run code if the server returns any errors
            });
    }
    render() {
        return (<><Filters count={this.state.movies.length} /><div class="row" style={{ marginTop: "10px" }}>
            <div class="col-md-12"> {(this.state.movies) && this.state.movies.map((movie) => {
                return <MovieThumb key={movie.id} movie={movie} />;
            })
            }
            </div>
        </div></>);
    }
}

export default MovieList;