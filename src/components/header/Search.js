import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { filterByTitle, fetchData } from '../store/actions';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        const searchRequest = '';
    }

    onSearch(event) {
        this.props.filterByTitle(this.props.filmsData, event.target.value);
        this.searchRequest = event.target.value;
    }

    render() {
        return (
            <div className="search-block">
                <p className="search-block__title">{ this.props.searchTitle }</p>
                <form className="search-form">
                    <input type="input" name="search" className="search-form__input" onChange={ this.onSearch }></input>
                    <Button buttonName="Title" className="search-form__button search-form__button_title" />
                    <Button buttonName="Genre" className="search-form__button search-form__button_genre" />
                    <Link to={ `/search/${this.searchRequest}` }>
                        <Button buttonName="Search" className="search-form__button search-form__button_search" />
                    </Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filmsData: state.filmsData,
    };
}

const mapDispatchToProps =  {
    filterByTitle,
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);