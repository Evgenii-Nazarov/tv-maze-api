import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "reactstrap";
import '../App.css';
import icon from '../icon.svg';
import {connect} from "react-redux";
import {searchEpisodesById, searchMovies} from "../redux/action";

const Search = (props) => {
    const [search, setSearch] = useState('');

    const searchButtonHandler = () => {
        props.searchMovies(search)
    }

    return (
        <>
            <Container className="dashboard">
                <div className="search-field">
                    <Row className='d-flex mt-4 justify-content-center align-items-center'>
                        <div>
                            <img className='input-icons' src={icon} alt="Too bad"/>
                            <input className='search-input' type="text" value={search}
                                   onChange={(e) => setSearch(e.target.value)}/>
                            <button className='search-btn' onClick={searchButtonHandler}>Search</button>
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(searchMovies(query)),
    searchEpisodesById: () => dispatch(searchEpisodesById()),
});

export default connect(null, mapDispatchToProps)(Search);
