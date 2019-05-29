import { FILTER_BY_DATE, FILTER_BY_RAITING } from './actions';
import axios from 'axios';


const getDefaultState = () => {
    axios.get('https://reactjs-cdp.herokuapp.com/movies')
        .then(response => {
            return response.data.data;
        });       
};

const compareDate = (filmA, filmB) => {
    return filmA.release_date - filmB.release_date;
};

const compareRaiting = (filmA, filmB) => {
    return filmA.vote_average - filmB.vote_average;
};

export const filterReducer = (state = getDefaultState(), action) => {
    console.log(state);
    switch (action.type) {
        case FILTER_BY_DATE:
            return state.sort(compareDate);
        case FILTER_BY_RAITING:
            return state.sort(compareRaiting);
    }
    return state;
};
