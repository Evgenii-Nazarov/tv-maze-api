import React, {useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Navbar, Row} from "reactstrap";
import '../App.css';
import icon from'../icon.svg';
import MoviesItem from "./MoviesItem";
import {connect} from "react-redux";
import {searchMovies} from "../redux/action";
import MoviesList from "./MoviesList";
import Routes from "../Routes";

const Search = (props) => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([])

    const fetchData = () => {
        props.searchMovies(search)
    }

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
                <div className="search-field">
                    <Row className='d-flex mt-4 justify-content-center align-items-center'>
                        <div>
                            <img className='input-icons' src={icon} alt="Too bad"/>
                            <input className='search-input' type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
                            <button className='search-btn' onClick={fetchData}>Search</button>
                        </div>
                    </Row>
                </div>

                <Routes/>
            </Container>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(searchMovies(query)),
});

export default connect(null, mapDispatchToProps)(Search);
