import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "components/SearchBar/SearchBar.scss";

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    let history = useHistory();

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // stop page from reloading
        setSearchTerm("");
        history.push(`/search?search=${searchTerm}`);
    }

    return (
        <div id="search-bar-container">
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;