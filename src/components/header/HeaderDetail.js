import React from 'react';
import Button from './Button';
import Picture from '../content/Picture';
import Title from '../content/Title';
import Year from '../content/Year';
import Genre from '../content/Genre';
import Overview from './Overview';
import Runtime from './Runtime';
import { fetchCurrentMovie } from '../store/actions';
import { connect } from 'react-redux';
import Search from './Search';


class HeaderDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.props.fetchCurrentMovie(this.props.currentFilmId);
        const currentMovie = this.props.currentMovie;
        return (
            <header>
                <div className="header-detail-wrapper">
                    <h2>Netflixroulete</h2>
                    <Button buttonName="Search" className="header-detail__button-search" />
                    <div className="detail-film">
                        <Picture imgSrc={ currentMovie.poster_path } />
                        <div className="detail-film__description">
                            <Title filmTitle={ currentMovie.title } />
                            <Year filmYear={ String(currentMovie.release_date) } />
                            <Genre filmGenre={ currentMovie.genres } />
                            <Runtime filmRuntime={ currentMovie.runtime } />
                            <Overview filmOverwiev={ currentMovie.overview } />
                        </div>
                    </div>
                </div>    
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentFilmId: state.currentFilmId,
        currentMovie: state.currentMovie
    };
}

const mapDispatchToProps =  {
    fetchCurrentMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDetail);