import React from 'react';
import { Link } from "react-router-dom";

class MovieReviews extends React.Component {
    state = {
        reviews: []
        
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=66cc4578bf84f7ab57836f3153df2d30&language=en-US&page=1`) // Call the fetch function passing the url of the API as a parameter
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ reviews: data.results });
            })
    }
    render() {
        return <>
            {(this.state.reviews) &&
                <div>
                    <Link to={`/movie/${this.props.match.params.id}`}> <button style={{ width: "100%" }} type="button" class="btn btn-primary">Hide Reviews</button></Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Excerpt</th>
                                <th>More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.reviews.map((review) => {
                                return <tr>
                                    <td>{review.author}</td>
                                    <td>{review.content}</td>
                                    <td><a href={review.url}>Full Review</a></td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </>;

    }
}

export default MovieReviews;