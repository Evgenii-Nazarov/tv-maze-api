import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Navbar, Row} from "reactstrap";
import './App.css';
import icon from'./icon.svg';
import MoviesItem from "./MoviesItem";

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([])

  const fetchData = () => {
      axios({
          method: 'GET',
          url: 'https://api.tvmaze.com/search/shows',
          params: {
              q:search,
              embed:'episodes'
          }
      })
          .then((res) => {
              setMovies(res.data)
          })
          .catch((error) => {
          });
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

        <Row className='flex-column align-items-center'>
        {movies.map(el =>
            <MoviesItem key={el.show.id} el={el} getEpisodes={getEpisodes}/>
        )}
        </Row>
    </Container>
          </>
  );
}

export default App;
