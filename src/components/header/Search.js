import React from 'react';
import Button from './Button';

const Search = ({searchTitle}) => (
    <div className="search-block">
        <p className="search-block__title">{searchTitle}</p>
        <form className="search-form">
            <input type="input" name="search" className="search-form__input"></input>
            <Button buttonName="Title" className="search-form__button search-form__button_title" />
            <Button buttonName="Genre" className="search-form__button search-form__button_genre" />
            <Button buttonName="Search" className="search-form__button search-form__button_search" />
        </form>
    </div>
);

export default Search;