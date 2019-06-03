import React from 'react';
import HeaderDetail from './HeaderDetail';
import HeaderSearch from './HeaderSearch';
import { Route } from 'react-router-dom';

// const Header = ({filmId}) => {
//     return (typeof filmId == 'number') ? <HeaderDetail movieId={ filmId } /> : <HeaderSearch />;
// }

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route path={ `/film/${ this.props.filmId }` } render={ () => (
                    <HeaderDetail movieId={this.props.filmId } /> 
                )} />

                <Route path="/" component={HeaderSearch}/>
            </div>
        )
    }
}

export default Header;