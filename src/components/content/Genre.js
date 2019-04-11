import React from 'react';

const Genre = ({filmGenre}) => (
    <div className="film-item__genres">
        {filmGenre.map(item => (
            <p className="film-item__film-genre" key={ item }>{ item }</p>
        ))}
    </div>
);

export default Genre;