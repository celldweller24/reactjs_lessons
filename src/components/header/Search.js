import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { filterByTitle } from '../store/actions';
import { withRouter } from 'react-router-dom';

// const Search = ({searchTitle}) => (
//     <div className="search-block">
//         <p className="search-block__title">{ searchTitle }</p>
//         <form className="search-form">
//             <input type="input" name="search" className="search-form__input"></input>
//             <Button buttonName="Title" className="search-form__button search-form__button_title" />
//             <Button buttonName="Genre" className="search-form__button search-form__button_genre" />
//             <Button buttonName="Search" className="search-form__button search-form__button_search" />
//         </form>
//     </div>
// );

// export default Search;


// const Search = ({ searchTitle, filterByTitle }) => (
//     <div className="search-block">
//     { console.log(location) }
//         <p className="search-block__title">{ searchTitle }</p>
//         <form className="search-form">
//             <input
//                 type="input"
//                 name="search"
//                 className="search-form__input"
//                 //onChange={ ev => filterByTitle(ev.target.value) }
//                 onChange={ () => history.push(`/search/${event}`) }
//             />
//             <Button buttonName="Title" className="search-form__button search-form__button_title" />
//             <Button buttonName="Genre" className="search-form__button search-form__button_genre" />
//             <Button buttonName="Search" className="search-form__button search-form__button_search" />
//         </form>
//     </div>
// )


class Search extends React.Component {
    render() {
        console.log(this.props.location);
        console.log(this.props.match);
        return (
            <div className="search-block">
                <p className="search-block__title">{ this.props.searchTitle }</p>
                <form className="search-form">
                    <input
                        type="input"
                        name="search"
                        className="search-form__input"
                        onChange={ ev => this.props.history.push(`/search/${ev.target.value}`) }
                    />
                    
                    <Button buttonName="Search"
                            className="search-form__button search-form__button_search" 
                            handler={ () => this.props.filterByTitle(this.props.match.params.id) }                            
                    />
                </form>
            </div> 
        )
    }
}

const mapDispatchToProps =  {
    filterByTitle
}

export default withRouter (
    connect(null, mapDispatchToProps)(Search)
);