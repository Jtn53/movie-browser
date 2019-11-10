import React from "react";
import { MovieDetail } from "ApiTypes";
import MovieListItem from "components/MovieListItem/MovieListItem";

type SearchResultListProps = {
    movies: MovieDetail[];
    pages: number;
    totalPages: number;
}

const SearchResultList: React.FC<SearchResultListProps> = (props): JSX.Element => {
    const renderMovieItem = (movie: MovieDetail) => {
        return (
            <MovieListItem id={movie.id} title={movie.title} overview={movie.overview} imageURL={movie.poster_path} key={movie.id}/>
        );
    }

    return (
        <div>
            {props.movies.map(renderMovieItem)}
        </div>
    );
}

export default SearchResultList;