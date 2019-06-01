import { 
    FILTER_BY_DATE, 
    FILTER_BY_RAITING, 
    FETCH_SEARCH_RESULTS_START, 
    FETCH_SEARCH_RESULTS_SUCCESS, 
    FETCH_SEARCH_RESULTS_ERROR, 
    SET_CURRENT_FILM_ID,
    FETCH_CURRENT_MOVIE,
    FILTER_BY_TITLE } from './actions';

const initialState = {
    filmsData: [],
    currentFilmId: {},
    currentMovie: {},
    loading: true
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_RESULTS_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                loading: false,
                filmsData: action.payload.data.data,
            }
        case FETCH_SEARCH_RESULTS_ERROR:
            return {
                ...state,
                loading: false,
            }
        case FILTER_BY_DATE:
            return {
                ...state,
                loading: false,
                filmsData: action.payload,
            }
        case FILTER_BY_RAITING:
            return {
                ...state,
                loading: false,
                filmsData: action.payload,
            }
        case SET_CURRENT_FILM_ID:
            return {
                ...state,
                loading: false,
                currentFilmId: action.payload,
            }
        case FETCH_CURRENT_MOVIE:
            return {
                ...state,
                loading: false,
                currentMovie: action.payload.data,
            }
        case FILTER_BY_TITLE:
            return {
                ...state,
                loading: false,
                filmsData: action.payload, 
            }
    }
    return state;
};