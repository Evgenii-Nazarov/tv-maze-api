import React, {useState} from 'react';
import MoviesItem from "./MoviesItem";
import {Container, Row} from "reactstrap";
import {connect} from "react-redux";
import {get} from 'lodash';
import icon from "../icon.svg";
import {searchEpisodesById, searchMovies} from "../redux/action";
import { withRouter } from 'react-router-dom';

const MoviesList = (props) => {
    const movies = get(props, 'movies', [])
    const [search, setSearch] = useState('');

    const fetchData = () => {
        props.searchMovies(search)
    }

    return (
        <>
            <div className="search-field">
                <Row className='d-flex mt-4 justify-content-center align-items-center'>
                    <div>
                        <img className='input-icons' src={icon} alt="Too bad"/>
                        <input className='search-input' type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button className='search-btn' onClick={fetchData}>Search</button>
                        <button onClick={props.searchEpisodesById}>MOVE!!!!!!</button>
                    </div>
                </Row>
            </div>

        {/*<Row className='flex-column align-items-center'>*/}
        {/*    {movies.map(el =>*/}
        {/*        <MoviesItem key={el.show.id} el={el}/>*/}
        {/*    )}*/}
        {/*</Row>*/}

            </>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(searchMovies(query)),
    searchEpisodesById: () => dispatch(searchEpisodesById()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
