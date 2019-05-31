import { FILTER_BY_DATE, FILTER_BY_RAITING, FETCH_SEARCH_RESULTS_START, FETCH_SEARCH_RESULTS_SUCCESS, FETCH_SEARCH_RESULTS_ERROR } from './actions';

const compareDate = (filmA, filmB) => {
    return filmA.release_date - filmB.release_date;
};

const compareRaiting = (filmA, filmB) => {
    return filmA.vote_average - filmB.vote_average;
};

const initialState = {
    filmsData: [],
    currentFilmId: {},
    loading: true,
}

export const filterReducer = (state = initialState, action) => {
    console.log(state);
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
            return [...state].sort(compareDate);
        case FILTER_BY_RAITING:
            return state.sort(compareRaiting);
    }
    return state;
};
