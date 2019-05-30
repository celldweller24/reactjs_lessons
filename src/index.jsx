import React from "react";
import ReactDOM from "react-dom";
import './main.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { filterReducer } from './components/store/reducers';
import IndexContainer from "./containers/IndexContainer";
import thunk from "redux-thunk";

const store = createStore(filterReducer, applyMiddleware(thunk));

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filmsData: [],
//             filmId: null,
//         }
//     }

//     render() {
//         return (
//             <Provider store={ store }>
//                 <div>
//                     <Header filmId={ this.state.filmId }/>
//                     <Filter quantityFilmsFound="7"/>
//                     <Content filmsData={ this.state.filmsData } setFilmId={ this.getFilmId.bind(this) }/>
//                     <Footer />
//                 </div>
                
//             </Provider>
//         )
//     } 
// }

const App = () => {
    return (
        <Provider store={ store }>
            <IndexContainer />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
