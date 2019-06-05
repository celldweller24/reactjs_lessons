import React from "react";
import HeaderDetail from '../components/header/HeaderDetail';
import Filter from '../components/header/Filter';
import Content from './Content';
import Footer from './Footer';
import { fetchData, getFilmId } from '../components/store/actions';
import { connect } from 'react-redux';

class FilmDetail extends React.Component {
    // componentDidMount() { 
    //     this.props.fetchData();
    // }

    render() {
        if (this.props.loading) {
            return <div>loading</div>
        }
        return (
            <div className="film_detail-wrapper">
                <HeaderDetail />
                <Filter quantityFilmsFound={ this.props.filmsData.length }/>
                <Content filmsData={ this.props.filmsData } />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmsData: state.filmsData,
        filmId: state.currentFilmId,
        loading: state.loading,
    };
}

const mapDispatchToProps =  {
    fetchData,
    getFilmId
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);