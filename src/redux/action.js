import httpMethod from '../fetch'
import {push} from 'connected-react-router'


export function searchMovies(query) {
    return (dispatch) => {
        httpMethod('GET', `/search/shows?q=${query}`,)
            .then((res) => {
                dispatch(push(`/`))

                dispatch({
                    type: "SET_STATE",
                    payload: {movies: res.data},
                });
            })
            .catch();
    };
}

export function searchEpisodesById(movieId) {
    return (dispatch) => {
        httpMethod('GET', `/shows/${movieId}/episodes`,)
            .then((res) => {
                dispatch({
                    type: "SET_STATE",
                    payload: {currentShowEpisodes: res.data},
                });
            })
            .catch();
    };
}

export function searchMovieById(movieId) {
    return (dispatch) => {
        httpMethod('GET', `/shows/${movieId}`,)
            .then((res) => {
                dispatch({
                    type: "SET_STATE",
                    payload: {currentShow: res.data},
                });
                dispatch(searchEpisodesById(movieId))
            })
            .catch();
    };
}


export function redirectToEpisodes(movieId) {
    return (dispatch) => {
        dispatch(push(`/episodes/${movieId}`))
    };
}

export function clearState() {
    return (dispatch) => {
        dispatch({
            type: "RESET_STATE",
        });
    };
}