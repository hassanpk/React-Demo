import React from 'react';
import {Link} from 'react-router-dom';
import styles from './MovieThumb.module.css'

const MovieThumb = (props) => {
    return <>
        <div className={styles.movieThumb}>
            <div className={styles.thumb}>
                <Link to={`movie/${props.movie.id}`}>  <img src={`http://image.tmdb.org/t/p/w200/${props.movie.poster_path}`} />
                </Link>
            </div>
            <div className={styles.Title}>
                <b> {props.movie.original_title}</b>
            </div>
        </div>
    </>;
}

export default MovieThumb;