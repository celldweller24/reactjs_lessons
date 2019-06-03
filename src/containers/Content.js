import React from 'react';
import Picture from '../components/content/Picture';
import Title from '../components/content/Title';
import Year from '../components/content/Year';
import Genre from '../components/content/Genre';
import { connect } from 'react-redux';


class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const filmsData = this.props.filmsData;
        this.sortBy(this.props.sortValue, filmsData);
        return (
            <div className="content">
                { filmsData.map(item => (
                    <Film key={ item.id } {...item} handleClick={ this.props.setFilmId } />
                )) }
            </div>
        );
    }

    sortBy(sortValue, filmsData) {
        return (sortValue === 'release') ? filmsData.sort(this.sortByDate) : filmsData.sort(this.sortByRaiting);
    }

    sortByDate(filmA, filmB) {
        return new Date(filmA.release_date).getTime() - new Date(filmB.release_date).getTime();
    };
    
    
    sortByRaiting(filmA, filmB) {
        return filmA.vote_average - filmB.vote_average;
    };
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

const mapStateToProps = state => {
    return { 
        sortValue: state.sortValue,
        filmsData: state.filmsData
    }
}

export default connect(mapStateToProps, null)(Content);