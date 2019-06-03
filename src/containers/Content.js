import React from 'react';
import Picture from '../components/content/Picture';
import Title from '../components/content/Title';
import Year from '../components/content/Year';
import Genre from '../components/content/Genre';


class Content extends React.Component {
    render() {
        const filmsData = this.props.filmsData;
        return (
            <div className="content">
                { filmsData.map(item => (
                    <Film key={ item.id } {...item} handleClick={ this.props.setFilmId } />
                )) }
            </div>
        );
    }
}

const Film = ({ id, poster_path, title, release_date, genres, handleClick }) => {
    return (
        <div className="film-item" onClick={ () => handleClick(id) }>
            <Picture imgSrc={ poster_path } />
            <Title filmTitle={ title } />
            <Year filmYear={ release_date } />
            <Genre filmGenre={ genres } />
        </div>
    );
}

export default Content;