import React from 'react';
import axios from 'axios';
import Button from './Button';
import Picture from '../content/Picture';
import Title from '../content/Title';
import Year from '../content/Year';
import Genre from '../content/Genre';
import Overview from './Overview';
import Runtime from './Runtime';


class HeaderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filmData: {},
        }
    }
    
    componentDidMount() {
        axios.get('https://reactjs-cdp.herokuapp.com/movies/' + this.props.filmId)
        .then(response => {
            this.setState({ filmData: response.data });
            //console.log(this.state.filmData);
        })
        .catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <header>
                <h2>Netflixroulete</h2>
                <Button buttonName="Search" className="header-detail__button-search" />
                <div className="detail-film">
                    <Picture imgSrc={ this.state.filmData.poster_path } />
                    <Title filmTitle={ this.state.filmData.title } />
                    <Year filmYear={ String(this.state.filmData.release_date) } />
                    <Genre filmGenre={ this.state.filmData.genres } />
                    <Runtime filmRuntime={ this.state.filmData.runtime } />
                    <Overview filmOverwiev={ this.state.filmData.overview } />
                </div>
            </header>
        );
    }
}

export default HeaderDetail;