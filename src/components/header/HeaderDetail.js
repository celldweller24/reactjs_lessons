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
import { Link, withRouter } from 'react-router-dom';


class HeaderDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const currentFilmId =  this.props.match.params.id;
        this.props.fetchCurrentMovie(currentFilmId);
        const currentMovie = this.props.currentMovie;
        return (
            <header>
                <div className="header-detail-wrapper">
                    <Link to="/">
                        <h2>Netflixroulete</h2>
                    </Link>
                    <Link to="/">
                        <Button buttonName="Search" className="header-detail__button-search" />
                    </Link>
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
        currentMovie: state.currentMovie
    };
}

const mapDispatchToProps =  {
    fetchCurrentMovie
}

export default withRouter (
    connect(mapStateToProps, mapDispatchToProps)(HeaderDetail)
);