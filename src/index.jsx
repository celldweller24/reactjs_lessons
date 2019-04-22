import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Header from './components/header/Header';
import Filter from './components/header/Filter';
import Content from "./containers/Content";
import Footer from "./containers/Footer";

import './main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filmsData: [],
            filmId: null,
        }
    }

    componentDidMount() {
        axios.get('https://reactjs-cdp.herokuapp.com/movies')
        .then(response => {
            this.setState({ filmsData: response.data.data });
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
    }

    getFilmId(id) {
        this.setState({ filmId: id });
    }
    
    render() {
        return (
            <div>
                <Header filmId={ this.state.filmId }/>
                <Filter quantityFilmsFound="7"/>
                <Content filmsData={ this.state.filmsData } setFilmId={ this.getFilmId.bind(this) }/>
                <Footer />
            </div>
        )
    } 
}

ReactDOM.render(<App />, document.getElementById("app"));
