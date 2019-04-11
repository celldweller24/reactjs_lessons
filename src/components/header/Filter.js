import React from 'react';

const Filter = ({quantityFilmsFound}) => (
    <div className="filter">
        <p className="filter__found"><span>{quantityFilmsFound}</span> Movies found</p>
        <div className="filter__sortby">
            <p>Sort by</p>
            <p>release date</p>
            <p>raiting</p>
        </div>
    </div>
);

export default Filter;