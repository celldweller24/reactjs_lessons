import React from 'react';
import Search from "./Search";
import { Link } from 'react-router-dom';


const HeaderSearch = () => (
    <header>
        <Link to="/">
            <h2>netflixroulete</h2>
        </Link>
        <Search searchTitle="Find your movie" />
    </header>
);

export default HeaderSearch;