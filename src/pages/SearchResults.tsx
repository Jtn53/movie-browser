import React, {useState, useEffect} from "react";
import SearchResultList from "components/SearchResultList/SearchResultList"
import { ErrorStates } from "ApiTypes";
import {RouteComponentProps, withRouter} from "react-router-dom";
import { SearchApiResponse } from "ApiTypes";
import QueryString from "query-string";

type SearchResultsProps = RouteComponentProps;

const SearchResults: React.FC<SearchResultsProps> = (props) => {
    const [errorState, setErrorState] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [searchResult, setSearchResult] = useState();


    useEffect(() => {
        const qsp = QueryString.parse(props.location.search);
        setSearchTerm(qsp.search);
    }, [props.location.search]);

    useEffect(() => {
        if (searchTerm) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=b30a054cf73a6be3fe79d7a5cd9dfbbd&query=${searchTerm}`).then((response: Response) => {
                return response.json();
            }).then((data: SearchApiResponse) => {
                data.results && data.results.length > 0 ? setSearchResult(data) : setErrorState(ErrorStates.NO_DATA);
            }).catch(() => {
                setErrorState(ErrorStates.UNEXPECTED_ERROR);
            })
        }
        else {
            setErrorState(ErrorStates.NO_DATA);
        }
    }, [searchTerm]);

    const renderSearchResults = (): JSX.Element => {
        if (searchResult && searchResult.results) {
            return (
                <SearchResultList pages={searchResult.pages} movies={searchResult.results} totalPages={searchResult.totalPages}/>
            );
        }
        else if (errorState === ErrorStates.NO_DATA) {
            return (
                <div>Couldn't find any results. Try searching for something else</div>
            );
        }
        
        return (
            <div>Something went really wrong! Try again :(</div>
        );
    }

    return renderSearchResults();
}

export default withRouter(SearchResults);