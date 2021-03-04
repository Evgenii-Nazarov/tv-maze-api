import React from 'react';
import {aaaaaaaaaa, searchEpisodesById, searchMovies} from "../redux/action";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

const Episodes = (props) => {
    return (
        <>
            Aaaaaaaaaa!!!!!!!
            <input type="text"/>
            <button onClick={props.aaaaaaaaaa}>GO BACK!!!!!</button>
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({
    aaaaaaaaaa: () => dispatch(aaaaaaaaaa()),
});

export default connect(null, mapDispatchToProps)(Episodes);
