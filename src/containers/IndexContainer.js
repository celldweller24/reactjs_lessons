import React from "react";
import Header from '../components/header/Header';
import Filter from '../components/header/Filter';
import Content from "./Content";
import Footer from "./Footer";
import { fetchData, getFilmId } from '../components/store/actions';
import { connect } from 'react-redux';


class IndexContainer extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     filmsData: [],
        //     filmId: null,
        // }
    }

    componentDidMount() {
        // axios.get('https://reactjs-cdp.herokuapp.com/movies')
        // .then(response => {
        //     this.setState({ filmsData: response.data.data });
        // })
        // .catch(error => {
        //     console.error(error);
        // });
        //fetchData();
        this.props.fetchData();
    }
// should be a action in future u will set filmId into router
    // getFilmId(id) {
    //     this.setState({ filmId: id });
    // }

    render() {
        if (this.props.loading) {
            return <div>loading</div>
        }
        
        return (
            <div>
                <Header filmId={ this.props.filmId }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);