import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieThumb.module.scss'

const MovieThumb = (props) => {
    return <>
        <div className={styles.movieThumb}>
            <div className={styles.thumb}>
                <Link to={`movie/${props.movie.id}`}> <img src={`http://image.tmdb.org/t/p/w200${props.movie.poster_path}`} />
                </Link>
            </div>
            <div className={styles.Title}>
                <b> {props.movie.original_title}</b>
            </div>
            <div>
                Release Date:
            <b> {props.movie.release_date}</b>
            </div>
            <div>
                <button onClick={() => props.onAddFavHandler(props.movie)} className={"btn " + ((props.favmovies.length > 0 && props.favmovies.some(x => x.id === props.movie.id)) ? "btn-primary" : "btn-secondary")}><i className="fa fa-heart" aria-hidden="true"></i> Add to Faviouate</button>
            </div>
        </div>
    </>;
}

export default MovieThumb;