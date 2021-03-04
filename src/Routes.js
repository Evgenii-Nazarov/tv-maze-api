import React from "react";
import { Router, Switch, Route} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import Episodes from "./components/Episodes";
import MoviesList from "./components/MoviesList";
import history from './history';

function Routes() {


    return (
            <Switch>
                <Route exact path="/episodes">
                    <Episodes/>
                </Route>
                <Route exact path="/">
                    <MoviesList/>
                </Route>
            </Switch>
    );
}

export default Routes;
