import React from 'react';

const Genre = ({ filmGenre }) => {
    const items = [];
    for (let key in filmGenre) {
        items.push(filmGenre[key]);
    }

    return (
        <div className="film-item__genres">
            { items.map(item => (
                <p className="film-item__film-genre" key={ item }>{ item }</p>
            ))}
        </div>
    );
}

export default Genre;