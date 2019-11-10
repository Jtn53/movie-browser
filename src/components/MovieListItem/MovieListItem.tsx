import React from "react";
import {Link} from "react-router-dom";
import "components/MovieListItem/MovieListItem.scss";

type MovieListItemProps = {
    id: number;
    title: string;
    overview: string;
    imageURL: string;
    releaseDate: string;
}

const MovieListItem: React.FC<MovieListItemProps> = (props) => {
    return (
        <Link to={`/movie?id=${props.id}`} className="movie-list-item-container">
            <div className="thumbnail" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w185/${props.imageURL})`}}></div>
            <div className="info-container">
                <div className="title">
                    {props.title}
                </div>
            </div>
        </Link>
    );
}

export default MovieListItem;