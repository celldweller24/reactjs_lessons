import React from 'react';

const Picture = ({imgSrc}) => (
    <p className="film-item__picture">
        <img src={imgSrc}/>
    </p>
);

export default Picture;