import React from 'react';
import Picture from '../components/content/Picture';
import Title from '../components/content/Title';
import Year from '../components/content/Year';
import Genre from '../components/content/Genre';
import { Link } from 'react-router-dom';


class Content extends React.Component {
    render() {
        const filmsData = this.props.filmsData;
        return (
            <div className="content">
                { filmsData.map(item => (
                    <Film {...item} handleClick={ this.props.setFilmId } />
                )) }
            </div>
        );
    }
}

const Film = ({ id, poster_path, title, release_date, genres, handleClick }) => {
    return (
        <Link to={ `/film/${ id }` }>
            <div className="film-item" key={ id } onClick={ () => handleClick(id) }>
                <Picture imgSrc={ poster_path } />
                <Title filmTitle={ title } />
                <Year filmYear={ release_date } />
                <Genre filmGenre={ genres } />
            </div>
        </Link>
    );
}

export default Content;