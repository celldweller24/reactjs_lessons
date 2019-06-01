import React from 'react';
import { connect } from 'react-redux';
import { sortByDate, sortByRaiting } from '../store/actions';

// const Filter = ({quantityFilmsFound}) => (
//     <div className="filter">
//         <p className="filter__found"><span>{quantityFilmsFound}</span> Movies found</p>
//         <div className="filter__sortby">
//             <p>Sort by</p>
//             <p onClick={ () => props.sortByDate() }>release date</p>
//             <p onClick={ () =>  props.sortByRaiting() }>raiting</p>
//         </div>
//     </div>
// );

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter">
                <p className="filter__found"><span>{ this.props.quantityFilmsFound }</span> Movies found</p>
                <div className="filter__sortby">
                    <p>Sort by</p>
                    <p onClick={ () => this.props.sortByDate(this.props.filmsData) }>release date</p>
                    <p onClick={ () => this.props.sortByRaiting(this.props.filmsData) }>raiting</p>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        filmsData: state.filmsData
    };
}

const mapDispatchToProps =  {
    sortByDate,
    sortByRaiting   
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);