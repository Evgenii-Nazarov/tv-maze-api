import httpMethod from '../fetch'
import history from '../history';
import { useHistory } from 'react-router-dom';
import { push } from 'connected-react-router'




export function searchMovies(query) {
  return (dispatch) => {
    httpMethod('GET',`/search/shows?q=${query}`, )
      .then((res) => {
          dispatch(push('/episodes'))
        dispatch({
          type: "SET_STATE",
          payload: {movies: res.data},
        });
      })
      .catch();
  };
}

export function searchEpisodesById() {
  return (dispatch) => {
      // dispatch({
      //     type: "RESET_STATE1"
      // });
      console.log('FORWARD')
      dispatch(push('/episodes'))
      // history.push('/episodes')
  };
}

export function aaaaaaaaaa() {
  return (dispatch) => {
      console.log('BACK')
      // dispatch({
      //     type: "AAAAAAA"
      // });
      dispatch(push('/'))
  };
}
