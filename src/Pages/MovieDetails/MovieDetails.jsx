import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {

    const [movieDetail, SetmovieDetail] = useState(null);

    useEffect(() => {
        const { id } = props.match.params;
        props.GetMovieDetailAction(id);
        return () => {
            console.log("UnMount");
        }
    }, []);

    return (<div>
        {(props.isLoading) ? <div id="overlay"></div> : ""}
        {(props.movieDetail) &&
            <div className="movieDetail">
                <div className="thumb" style={{ float: "left", paddingRight: "10px" }}>
                    <img src={`http://image.tmdb.org/t/p/w300/${props.movieDetail.poster_path}`} />
                </div>
                <div className="details" style={{ marginLeft: "10px" }}>
                    <div>{props.movieDetail.original_title}&nbsp;
                            <Link to={`/`}><i class="fa fa-home fa-2x" aria-hidden="true"></i></Link></div>
                    <h3>Overview</h3>
                    <div>
                        {props.movieDetail.overview}
                    </div>
                    <br />
                    <div className="Section" style={{ display: "table" }} >
                        <div style={{ float: "left", marginRight: "10px", backgroundColor: "lightgray" }}>Runtime (mins)</div>
                        <div style={{ float: "left" }}>{props.movieDetail.runtime}</div>
                    </div>
                    <br />
                    <div className="Section" style={{ display: "table" }}>
                        <div style={{ float: "left", marginRight: "10px", backgroundColor: "lightgray" }}>Spoken Language</div>
                        <div style={{ float: "left" }}>{props.movieDetail.original_language}</div>
                    </div>
                    <br />
                    <div className="Section" style={{ display: "table" }}>
                        <div style={{ float: "left", marginRight: "10px", backgroundColor: "lightgray" }}>Genre</div>
                        <div style={{ float: "left" }}>{(props.movieDetail.genres) ? props.movieDetail.genres[0].name : ""}</div>
                    </div>
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <Link to={`/reviews/${props.movieDetail.id}`}> <button type="button" class="btn btn-primary">Show Reviews</button></Link>
                </div>
            </div>
        }
    </div>);

}

export default MovieDetails;