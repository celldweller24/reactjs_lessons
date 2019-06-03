import React from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../store/actions';

// const Filter = ({ quantityFilmsFound }) => (
//     <div className="filter">
//         <p className="filter__found"><span>{ quantityFilmsFound }</span> Movies found</p>
//         <div className="filter__sortby">
//             <p>Sort by</p>
//             <p onClick={ () => setSorting('release') }>release date</p>
//             <p onClick={ () => setSorting('raiting') }>raiting</p>
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
                    <p onClick={ () => this.props.setSorting('release') }>release date</p>
                    <p onClick={ () => this.props.setSorting('raiting') }>raiting</p>
                </div>
            </div>
        )
        
    }
}

const mapDispatchToProps =  {
    setSorting
}

export default connect(null, mapDispatchToProps)(Filter);