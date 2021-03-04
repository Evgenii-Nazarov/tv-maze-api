import React from 'react';
import {get} from 'lodash';
import {Col, Row} from "reactstrap";
import {connect} from "react-redux";
import {searchEpisodesById} from "../redux/action";

const MoviesItem = (props) => {
    const mediumImage = get(props,'el.show.image.medium','');
    const name = get(props,'el.show.name','');
    const summary = get(props,'el.show.summary','');
    const id = get(props,'el.show.id','');

    const shortenedSummary = summary? summary.substr(0,300) + '...': '';
    return (
        <>
        {mediumImage &&
        <div className='card-item'>
            <Row className="card-item-background">
                <Col className='d-flex align-items-center' xs={5} md={4} lg={3}>
                    <div>
                        <img className='img-fluid card-item-image ' src={mediumImage} alt="Oooops"/>
                    </div>
                </Col>

                <Col xs={7} md={8} lg={7} className="item-description">
                    <h2 className='card-item-title'>{name}</h2>
                    <div dangerouslySetInnerHTML={{__html: shortenedSummary}}>
                    </div>

                    <button className='card-item-btn mt-2' onClick={props.searchEpisodesById}>Show Episodes</button>
                </Col>
            </Row>
        </div>}
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    searchEpisodesById: () => dispatch(searchEpisodesById()),
});

export default connect(null, mapDispatchToProps)(MoviesItem);
