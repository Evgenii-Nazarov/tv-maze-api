import React, {useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Navbar, Row} from "reactstrap";
import './App.css';
import icon from'./icon.svg';
import {connect} from "react-redux";
import Routes from "./Routes";
import {searchMovies} from "./redux/action";
import { withRouter } from 'react-router-dom';

const App = (props) => {
    const getEpisodes = (movieId) => {
        axios({
            method: 'GET',
            url: `https://api.tvmaze.com/shows/${movieId}/episodes`,
        })
            .then((res) => {
            })
            .catch((error) => {
            });
    }


    return (
        <>
            <div className="header">
                <span className='white-text'>Show Finder</span>
            </div>

            <Container className="dashboard">
                <Routes/>
            </Container>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(searchMovies(query)),
});

export default connect(null, mapDispatchToProps)(App);
