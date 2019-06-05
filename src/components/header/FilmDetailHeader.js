import React from 'react';
import Button from './Button';
import Picture from '../content/Picture';
import Title from '../content/Title';
import Year from '../content/Year';
import Genre from '../content/Genre';
import Overview from './Overview';
import Runtime from './Runtime';
import { fetchCurrentMovie } from '../store/actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


function FilmDetailHeader({ poster_path, title, release_date, genres, runtime, overview }) {
    return (
        <header>
            <div className="header-detail-wrapper">
                <Link to="/">
                    <h2>Netflixroulete</h2>
                </Link>
                <Link to="/">
                    <Button buttonName="Search" className="header-detail__button-search" />
                </Link>
                <div className="detail-film">
                    <Picture imgSrc={ poster_path } />
                    <div className="detail-film__description">
                        <Title filmTitle={ title } />
                        <Year filmYear={ String(release_date) } />
                        <Genre filmGenre={ genres } />
                        <Runtime filmRuntime={ runtime } />
                        <Overview filmOverwiev={ overview } />
                    </div>
                </div>
            </div>    
        </header>
    );
}
export default FilmDetailHeader;