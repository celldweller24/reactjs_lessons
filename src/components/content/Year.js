import React from 'react';

const Year = ({filmYear}) => {
    return (
        <p className="film-item__year">{ new Date(filmYear).getFullYear() }</p>
    );
}

export default Year;