import React from 'react';
import Button from '../components/header/Button';
import Picture from '../components/content/Picture';


class HeaderDetail extends React.Component {
    render() {
        <header>
            <h2>Netflixroulete</h2>
            <Button buttonName="Search" className="header-detail__button-search" />
            <div className="detail-film">
                <Picture imgSrc='' />
                <Title filmTitle='Film title' />
                <Year filmYear='1988' />
                <Genre filmGenre='Fiction' />
            </div>
        </header>
    }
}

export default HeaderDetail;