import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Header from './components/header/Header';
import Filter from './components/header/Filter';
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import './main.scss';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { filterReducer } from './components/store/reducers';

const store = createStore(filterReducer);

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
            <Provider store={ store }>
                <div>
                    <Header filmId={ this.state.filmId }/>
                    <Filter quantityFilmsFound="7"/>
                    <Content filmsData={ this.state.filmsData } setFilmId={ this.getFilmId.bind(this) }/>
                    <Footer />
                </div>
            </Provider>
        )
    } 
}

ReactDOM.render(<App />, document.getElementById("app"));
