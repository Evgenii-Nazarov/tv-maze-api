import React, {useEffect, useState} from 'react';
import {clearState, searchMovieById} from "../redux/action";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {get} from 'lodash';
import {Col, Input, Row} from "reactstrap";


const Episodes = (props) => {
    const movieId = get(props, 'match.params.movieId', '');
    const episodes = get(props, 'movies.currentShowEpisodes', []);
    const originalImage = get(props, 'movies.currentShow.image.original', '');
    const name = get(props, 'movies.currentShow.name', '');
    const summary = get(props, 'movies.currentShow.summary', '');

    const [currentSeason, setCurrentSeason] = useState(0)

    const shortenedSummary = summary ? summary.substr(0, 300) + '...' : '';

    let seasonNumber = 0;
    const seasons = [[]]
    episodes.forEach(el => {
        if (el.season === seasonNumber + 1) {
            seasons[seasonNumber].push(el)
        } else {
            seasonNumber++;
            seasons.push([])
            seasons[seasonNumber].push(el)
        }
    })

    useEffect(() => {
        props.searchMovieById(movieId)

        return props.clearState()
    }, [])

    return (
        <>
            <Row className='mr-2 ml-2'>
                <Col xs={6} lg={4}>
                    <img className='img-fluid episodes-image' src={originalImage} alt="Oooops"/>
                    <h1>{name}</h1>
                    <div className='item-description' dangerouslySetInnerHTML={{__html: shortenedSummary}}/>
                </Col>

                <Col xs={6} lg={8}>

                    <Input className='season-select' type="select" name="select" id="exampleSelect"
                           onChange={(e) => setCurrentSeason(e.target.value)}>
                        {seasons.map((el, i) =>
                            <option value={i}>Season {i + 1}</option>
                        )}
                    </Input>

                    {seasons[currentSeason].map((el, i) =>
                        <Row className='pt-4'>
                            <Col xs={4} md={3} lg={2}>
                                <div className='season-number'>{i < 9 ? '0' + (i + 1) : i + 1}</div>
                            </Col>

                            <Col xs={8} md={9} lg={10} className=''>
                                <h3 className='episode-item-title'>{el.name}</h3>
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
    searchMovieById: (movieId) => dispatch(searchMovieById(movieId)),
    clearState: () => dispatch(clearState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Episodes));
