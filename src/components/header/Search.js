import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { filterByTitle, fetchData } from '../store/actions';

// const Search = ({searchTitle}) => (
//     <div className="search-block">
//         <p className="search-block__title">{ searchTitle }</p>
//         <form className="search-form">
//             <input type="input" name="search" className="search-form__input"></input>
//             <Button buttonName="Title" className="search-form__button search-form__button_title" />
//             <Button buttonName="Genre" className="search-form__button search-form__button_genre" />
//             <Button buttonName="Search" className="search-form__button search-form__button_search" />
//         </form>
//     </div>
// );

// export default Search;


const Search = ({ searchTitle, filterByTitle }) => (
    <div className="search-block">
        <p className="search-block__title">{ searchTitle }</p>
        <form className="search-form">
            <input
                type="input"
                name="search"
                className="search-form__input"
                onChange={ ev => filterByTitle(ev.target.value) }
            />
            <Button buttonName="Title" className="search-form__button search-form__button_title" />
            <Button buttonName="Genre" className="search-form__button search-form__button_genre" />
            <Button buttonName="Search" className="search-form__button search-form__button_search" />
        </form>
    </div>
)

const mapDispatchToProps =  {
    filterByTitle
}

export default connect(null, mapDispatchToProps)(Search);