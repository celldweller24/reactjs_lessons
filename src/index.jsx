import React from "react";
import ReactDOM from "react-dom";
import './main.scss';
import { Provider } from 'react-redux';
import IndexContainer from "./containers/IndexContainer";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './configureStore';

const App = () => {
    return (
        <PersistGate loading={ null } persistor={ persistor }>
            <Provider store={ store }>
                <IndexContainer />
            </Provider>
        </PersistGate>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
