import React from 'react';
import { Link } from "react-router-dom";
const header = (props) => {
    debugger
    return <> <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="navbar-brand" to={`/`}>TMDB</Link>
                </li>

            </ul>
        </div>

        <div className="navbar-collapse collapse w-100 order-1 order-md-1 dual-collapse2">
            <ul className="navbar-nav">
                <li className="nav-item" style={{ color: "white", marginLeft: "30px", marginRight: "30px" }}>
                    <i class="fa fa-video-camera fa-2x" aria-hidden="true"></i>
                </li>
                <li className="nav-item" style={{ color: "white", marginLeft: "30px", marginRight: "30px" }}>
                    Movie Entiuss!!
                </li>
                <li className="nav-item" style={{ color: "white", marginLeft: "30px", marginRight: "30px" }}>
                    <i class="fa fa-film fa-2x"></i>
                </li>

            </ul>
        </div>


        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={`/`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/fav`}>Favourties</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Upcoming Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Search</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
}

export default header;
