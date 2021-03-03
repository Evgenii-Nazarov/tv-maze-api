import React from 'react';
import {get} from 'lodash';
import {Col, Row} from "reactstrap";

const MoviesItem = (props) => {
    const mediumImage = get(props,'el.show.image.medium','');
    const name = get(props,'el.show.name','');
    const summary = get(props,'el.show.summary','');
    const id = get(props,'el.show.id','');


    const shortenedSummary = summary? summary.substr(0,300) + '...': '';
    return (
        <div className='card-item' onClick={() => props.getEpisodes(id)}>
            <Row className="card-item-background">
                <Col xs={5} md={4}>
                <img className='img-fluid card-item-image' src={mediumImage} alt="Oooops"/>
                </Col>

               <Col xs={5} md={7} className="item-description">
                <h2>{name}</h2>
                   {/*<div dangerouslySetInnerHTML={{__html: {summary}}}>*/}
                   {/*</div>*/}
                   <p>{summary && shortenedSummary}</p>

                   <button>Preview</button>
               </Col>


            </Row>
            {/*<Row>*/}
            {/*    <Col>*/}
            {/*        <img src="" alt=""/>*/}
            {/*    </Col>*/}

            {/*    <Col>*/}
            {/*        <h2>{el.show.name}</h2>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur */}
            {/*                deserunt dolorem excepturi exercitationem expedita harum illo maxime minima, nesciunt sed tenetur */}
            {/*                vero voluptatibus!*/}
            {/*            </p>*/}
            {/*            <button>Show Episodes</button>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>
    );
};

export default MoviesItem;