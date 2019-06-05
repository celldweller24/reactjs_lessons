import React from "react";
import HeaderDetail from '../components/header/HeaderDetail';
import FilmDetailHeader from '../components/header/FilmDetailHeader';
import Filter from '../components/header/Filter';
import Content from './Content';
import Footer from './Footer';
import { fetchData, getFilmId, fetchCurrentMovie } from '../components/store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FilmDetail extends React.Component {
    componentDidMount() {
        const { filmsData, filmId, match } = this.props;

        if(!filmsData[filmId]) {
            this.props.fetchCurrentMovie(match.params.id);
        }
    }

    render() {
        const { loading, filmsData, filmId, currentMovie } = this.props;
        if (loading && !filmsData[filmId]) {
            return <div>loading</div>
        }

        const currentMovieData = filmsData[filmId] || currentMovie;

        return currentMovieData && <div className="film_detail-wrapper">
                <FilmDetailHeader {...currentMovieData} /> 
                <Filter quantityFilmsFound={ filmsData.length }/>
                {/* <Content filmsData={ this.props.filmsData } /> */}
                <Footer />
            </div>
    }
}

const mapStateToProps = state => {
    return {
        filmsData: state.filmsData,
        filmId: state.currentFilmId,
        loading: state.loading,
        currentMovie: state.currentMovie,
    };
}

const mapDispatchToProps =  {
    fetchData,
    getFilmId,
    fetchCurrentMovie
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FilmDetail)
    );