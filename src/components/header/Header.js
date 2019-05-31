import React from 'react';
import HeaderDetail from './HeaderDetail';
import HeaderSearch from './HeaderSearch';

const Header = (movieId = {}) => {
    return (movieId.filmId) ? <HeaderDetail filmId={ movieId.filmId } /> : <HeaderSearch />;
}

export default Header;