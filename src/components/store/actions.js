import axios from 'axios';
export const FILTER_BY_DATE = 'FILTER_BY_DATE';
export const FILTER_BY_RAITING = 'FILTER_BY_RAITING';
export const FILTER_BY_TITLE = 'FILTER_BY_TITLE';
export const FETCH_SEARCH_RESULTS_START = 'FETCH_SEARCH_RESULTS_START';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_SEARCH_RESULTS_ERROR = 'FETCH_SEARCH_RESULTS_ERROR';
export const SET_CURRENT_FILM_ID = 'SET_CURRENT_FILM_ID';
export const FETCH_CURRENT_MOVIE = 'FETCH_CURRENT_MOVIE';

export const sortByDate = (filmsData) => ({
    type: FILTER_BY_DATE,
    payload: filmsData.sort(compareDate)
});

export const sortByRaiting = (filmsData) => ({
    type: FILTER_BY_RAITING,
    payload: filmsData.sort(compareRaiting)
});

export const getFilmId = (id) => ({
    type: SET_CURRENT_FILM_ID,
    payload: id
});

export const fetchData = () => async (dispatch) => {
    dispatch({ type: FETCH_SEARCH_RESULTS_START });
    try {
        const response = await axios.get('https://reactjs-cdp.herokuapp.com/movies');
        dispatch({ type: FETCH_SEARCH_RESULTS_SUCCESS, payload: { ...response } });
    } catch (e) {
        console.error(e);
        dispatch({ type: FETCH_SEARCH_RESULTS_ERROR });
    }
};

export const fetchCurrentMovie = (movieId) => async (dispatch) => {
    const response = await axios.get('https://reactjs-cdp.herokuapp.com/movies/' + movieId);
    dispatch({ type: FETCH_CURRENT_MOVIE, payload: { ...response } });
    
};

export const filterByTitle = (filmsData, match) => ({
    type: FILTER_BY_TITLE,
    payload: filmsData.filter((item) => {
        return item.title.toLowerCase().indexOf(match.toLowerCase()) >= 0
    }),
});

const compareDate = (filmA, filmB) => {
    return new Date(filmA.release_date).getTime() - new Date(filmB.release_date).getTime();
};

const compareRaiting = (filmA, filmB) => {
    return filmA.vote_average - filmB.vote_average;
};