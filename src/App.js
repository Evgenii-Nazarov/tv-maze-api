import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import './App.css';
import Routes from "./Routes";
import Search from "./components/Search";

const App = () => {
    return (
        <>
            <div className="header">
                <span className='white-text'>Show Finder</span>
            </div>
            <Search/>

            <Container className="dashboard">
                <Routes/>
            </Container>
        </>
    );
};


export default App;
