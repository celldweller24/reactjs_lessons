import { FILTER_BY_DATE, FILTER_BY_RAITING, FETCH_SEARCH_RESULTS_START, FETCH_SEARCH_RESULTS_SUCCESS } from './actions';

const compareDate = (filmA, filmB) => {
    return filmA.release_date - filmB.release_date;
};

const compareRaiting = (filmA, filmB) => {
    return filmA.vote_average - filmB.vote_average;
};

export const filterReducer = (state = {data: []}, action) => {
    console.log(state);
    switch (action.type) {
        case FETCH_SEARCH_RESULTS_SUCCESS:
            return [...state]
        case FILTER_BY_DATE:
            return [...state].sort(compareDate);
        case FILTER_BY_RAITING:
            return state.sort(compareRaiting);
    }
    return state;
};
