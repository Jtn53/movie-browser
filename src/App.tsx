import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieDetails from "pages/MovieDetails";
import SearchResults from "pages/SearchResults";
import SearchBar from "components/SearchBar/SearchBar";
import Home from "pages/Home";
import "App.scss";

const App: React.FC = () => {
  return (
    <> 
      <Router>
        <SearchBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/movie">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
