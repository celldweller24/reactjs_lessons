import React from 'react';
import { Route } from 'react-router-dom';
import HeaderDetail from './HeaderDetail';
import HeaderSearch from './HeaderSearch';

// const Header = ({filmId}) => {
//     return (typeof filmId == 'number') ? <HeaderDetail movieId={ filmId } /> : <HeaderSearch />;
// }

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <Route path={ `/film/${ this.props.filmId }` } render={ () => (
//                     <HeaderDetail movieId={this.props.filmId } />
//                 )} />

//                 <Route path="/" component={HeaderSearch}/>
//             </div>
//         )
//     }
// }

export default Header;
