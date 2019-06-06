import qs from 'qs'
import Express from 'express';
import React from 'react';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
//import counterApp from './reducers';
import App from './src/index.jsx';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import renderFullPage from './public/template';

const app = Express();

//Serve static files
app.use('/static', Express.static('static'));
  
// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
    const store = createStore(counterApp)

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
    )

    // Grab the initial state from our Redux store
    const preloadedState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}

// app.use((req, res) => {
//  return res.end(
//      template({
//          body: renderToString(<App />)
//     })
// )
// });
 
const port = 3001;

app.listen(port, () => {console.log(`Ok. Server listen post ${port}`)})