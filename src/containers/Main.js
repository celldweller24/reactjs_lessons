import React from "react";
import HeaderSearch from '../components/header/HeaderSearch';
import Filter from '../components/header/Filter';
import Footer from './Footer';
import Content from "./Content";
import { fetchData, getFilmId } from '../components/store/actions';
import { connect } from 'react-redux';


class Main extends React.Component {
    componentDidMount() { 
        this.props.fetchData();
    }

    render() {
        if (this.props.loading) {
            return <div>loading</div>
        }
        return (
            <div className="main-wrapper">
                <HeaderSearch />
                <Filter quantityFilmsFound={ this.props.filmsData.length }/>
                <Content filmsData={ this.props.filmsData } setFilmId={ this.props.getFilmId.bind(this) }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);