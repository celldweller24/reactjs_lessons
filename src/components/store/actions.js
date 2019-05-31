import axios from 'axios';
export const FILTER_BY_DATE = 'FILTER_BY_DATE';
export const FILTER_BY_RAITING = 'FILTER_BY_RAITING';
export const FETCH_SEARCH_RESULTS_START = 'FETCH_SEARCH_RESULTS_START';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_SEARCH_RESULTS_ERROR = 'FETCH_SEARCH_RESULTS_ERROR';

export const sortByDate = () => ({
    type: FILTER_BY_DATE,
    payload: ''
});

export const sortByRaiting = () => ({
    type: FILTER_BY_RAITING,
    payload: ''
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