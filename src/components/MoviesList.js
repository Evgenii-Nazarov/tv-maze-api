import React from 'react';
import MoviesItem from "./MoviesItem";
import {Row} from "reactstrap";
import {connect} from "react-redux";
import {get} from 'lodash';
import {searchEpisodesById, searchMovies} from "../redux/action";

const MoviesList = (props) => {
    const movies = get(props, 'movies.movies', [])

    return (
        <Row className='flex-column align-items-center'>
            {movies.map(el =>
                <MoviesItem key={el.show.id} el={el}/>
            )}
        </Row>
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
