import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {

    const [movieDetail, SetmovieDetail] = useState(null);

    useEffect(() => {
        debugger
        const { id } = props.match.params;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=66cc4578bf84f7ab57836f3153df2d30&language=en-US`) // Call the fetch function passing the url of the API as a parameter
            .then(response => response.json())
            .then(function (data) {
                SetmovieDetail(data);
            })
    }, []);

    return (<div>

        {(movieDetail) &&
            <div className="movieDetail">
                <div className="thumb" style={{ float: "left", paddingRight: "10px" }}>
                    <img src={`http://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`} />
                </div>
                <div className="details" style={{ marginLeft: "10px" }}>
                    <div>{movieDetail.original_title}&nbsp;
                            <Link to={`/`}><i class="fa fa-home fa-2x" aria-hidden="true"></i></Link></div>
                    <h3>Overview</h3>
                    <div>
                        {movieDetail.overview}
                    </div>
                    <br />
                    <div className="Section" style={{ display: "table" }} >
                        <div style={{ float: "left", marginRight: "10px", backgroundColor: "lightgray" }}>Runtime (mins)</div>
                        <div style={{ float: "left" }}>{movieDetail.runtime}</div>
                    </div>
                    <br />
                    <div className="Section" style={{ display: "table" }}>
                        <div style={{ float: "left", marginRight: "10px", backgroundColor: "lightgray" }}>Spoken Language</div>
                        <div style={{ float: "left" }}>{movieDetail.original_language}</div>
                    </div>
                    <br />
                    <div className="Section" style={{ display: "table" }}>
                        <div style={{ float: "left", marginRight: "10px", backgroundColor: "lightgray" }}>Genre</div>
                        <div style={{ float: "left" }}>{movieDetail.genres[0].name}</div>
                    </div>
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <Link to={`/reviews/${movieDetail.id}`}> <button type="button" class="btn btn-primary">Show Reviews</button></Link>
                </div>
            </div>
        }
    </div>);

}

export default MovieDetails;