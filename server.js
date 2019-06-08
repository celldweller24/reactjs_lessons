import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './src/components/store/reducers';
import IndexContainer from "./src/containers/IndexContainer";
import { renderToString } from 'react-dom/server';
import renderFullPage from './public/template';
const fetch = require('node-fetch');


const app = Express();

//Serve static files
app.use('/static', Express.static('build'));
  
// This is fired every time the server side receives a request
app.use(handleRender);

async function handleRender(req, res) { 
  return (
    await fetch(`http://react-cdp-api.herokuapp.com/movies/`)
    .then(resp => resp.json())
    .then(data => {
      const context = {};
      const preloadedState = { filmsData: data.data };

      const store = createStore(
          rootReducer,
          preloadedState
      );

      const html = renderToString(
        <Provider store={store}>
          <IndexContainer location={ req.url } />
        </Provider>
      );

      res.send(renderFullPage(html, preloadedState));
    })
  );
}

 
const port = 3001;

app.listen(port, () => {console.log(`Ok. Server listen post ${port}`)})