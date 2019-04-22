import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Picture from './Picture';

describe('Picture Test Suite', () => {
    it('Should render <p> with <img>', () => {
        let picture;
        axios.get('https://reactjs-cdp.herokuapp.com/movies')
        .then(response => {
            picture = response.data.data.poster_path;
        });
        const wrapper = shallow(<Picture imgSrc={ picture }/>);
        expect(wrapper.find('img').exists()).toMatchSnapshot();
    });
});