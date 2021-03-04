import React from "react";
import {Route, Switch} from "react-router-dom";
import Episodes from "./components/Episodes";
import MoviesList from "./components/MoviesList";

function Routes() {

    return (
        <Switch>
            <Route path="/episodes/:movieId">
                <Episodes/>
            </Route>
            <Route exact path="/">
                <MoviesList/>
            </Route>
        </Switch>
    );
}

export default Routes;
