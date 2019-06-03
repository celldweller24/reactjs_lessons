import React from 'react';
import HeaderDetail from './HeaderDetail';
import HeaderSearch from './HeaderSearch';

const Header = ({filmId}) => {
    //return (typeof filmId == 'number') ? <HeaderDetail movieId={ filmId } /> : <HeaderSearch />;
    return <HeaderSearch />
}

export default Header;