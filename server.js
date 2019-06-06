import qs from 'qs'
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './src/components/store/reducers';
import App from './src/index.js';
import IndexContainer from "./src/containers/IndexContainer";
import { renderToString } from 'react-dom/server';
import renderFullPage from './public/template';

const app = Express();

//Serve static files
app.use('/static', Express.static('build'));
  
// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
    const preloadedState = { filmsData: [{
      id: 337167,
      title: "Fifty Shades Freed",
      tagline: "Don't miss the climax",
      vote_average: 6.1,
      vote_count: 1195,
      release_date: "2018-02-07",
      poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
      budget: 55000000,
      revenue: 136906000,
      genres: [
      "Drama",
      "Romance"
      ],
      runtime: 106
      },
      {
      id: 269149,
      title: "Zootopia",
      tagline: "Welcome to the urban jungle.",
      vote_average: 7.7,
      vote_count: 6795,
      release_date: "2016-02-11",
      poster_path: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
      overview: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
      budget: 150000000,
      revenue: 1023784195,
      genres: [
      "Animation",
      "Adventure",
      "Family",
      "Comedy"
      ],
      runtime: 108
      }] };
    const store = createStore(rootReducer, preloadedState)

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
          <IndexContainer />
        </Provider>
    )

    res.send(renderFullPage(html, preloadedState));
}

 
const port = 3001;

app.listen(port, () => {console.log(`Ok. Server listen post ${port}`)})