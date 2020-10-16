import { connect } from "react-redux";
import MovieDetails from "./MovieDetails";
import { GetMovieDetailAction } from "./MovieDetails.action"
/*
const mapsstateToProps = (state) => {
       debugger
    return { movieDetail: state.moviedetail }
}
*/


function mapStateToProps(state) {
    return {
        movieDetail: state.moviedetail,
        isLoading: state.isLoading
    }
}

const mapDispatchToprops = {
    GetMovieDetailAction
}


export default connect(mapStateToProps, mapDispatchToprops)(MovieDetails);