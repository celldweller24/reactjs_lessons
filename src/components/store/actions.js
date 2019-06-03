import axios from 'axios';
export const SET_SONRTING = 'SET_SONRTING';
export const FILTER_BY_TITLE = 'FILTER_BY_TITLE';
export const FETCH_SEARCH_RESULTS_START = 'FETCH_SEARCH_RESULTS_START';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_SEARCH_RESULTS_ERROR = 'FETCH_SEARCH_RESULTS_ERROR';
export const SET_CURRENT_FILM_ID = 'SET_CURRENT_FILM_ID';
export const FETCH_CURRENT_MOVIE = 'FETCH_CURRENT_MOVIE';

export const setSorting = (sorting) => ({
    type: SET_SONRTING,
    payload: sorting
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

export const filterByTitle = (match) => ({
    type: FILTER_BY_TITLE,
    payload: match
});