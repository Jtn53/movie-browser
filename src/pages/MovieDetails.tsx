import React, {useState, useEffect} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import QueryString from "query-string";
import { MovieDetailsApiResponse, ErrorStates } from "ApiTypes";

type MovieDetailsProps = RouteComponentProps;

const MovieDetails: React.FC<MovieDetailsProps> = (props) => {
    const [movieId, setMovieId] = useState();
    const [movieDetails, setMovieDetails] = useState<MovieDetailsApiResponse>();
    const [errorState, setErrorState] = useState<ErrorStates>();

    useEffect(() => {
        const qsp = QueryString.parse(props.location.search);
        setMovieId(qsp.id);
    }, [props.location.search]);

    useEffect(() => {
        if (movieId) {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b30a054cf73a6be3fe79d7a5cd9dfbbd`).then((response: Response) => {
                return response.json();
            }).then((data: MovieDetailsApiResponse) => {
                data ? setMovieDetails(data) : setErrorState(ErrorStates.NO_DATA);
            }).catch(() => {
                setErrorState(ErrorStates.UNEXPECTED_ERROR);
            })
        }
        else {
            setErrorState(ErrorStates.NO_DATA);
        }
    }, [movieId]);

    const renderMovieDetails = (): JSX.Element => {
        if (movieDetails) {
            return (
                <>
                    <div><img src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`}/></div>
                    <div id="title">{movieDetails.title}</div>
                    <div id="released">Released: {movieDetails.release_date}</div>
                    <div id="overview">{movieDetails.overview}</div>
                    <div><a href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}>IMDB Link</a></div>
                </>
            );
        }
        else if (errorState === ErrorStates.NO_DATA) {
            return (
                <div>Couldn't find the movie</div>
            );
        }

        return (
            <div>Something went really wrong, try again</div>
        );
    }

    return (
        <div id="movie-details-container">{renderMovieDetails()}</div>
    );
}

export default withRouter(MovieDetails);