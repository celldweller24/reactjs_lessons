import React from "react";
import { ReactDOM, hydrate } from "react-dom";
import './main.scss';
import { Provider } from 'react-redux';
import IndexContainer from "./containers/IndexContainer";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './configureStore';

hydrate(<PersistGate loading={ null } persistor={ persistor }>
    <Provider store={ store }>
        <IndexContainer />
    </Provider>
</PersistGate>, document.getElementById("app"));
