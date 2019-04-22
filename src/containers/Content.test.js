import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Content from './Content';

describe('Content component Test Suite', () => {
    it('Should render <div> with class "content"', () => {
        let data;
        axios.get('https://reactjs-cdp.herokuapp.com/movies')
        .then(response => {
            data = response.data.data;
        });
        const wrapper = shallow(<Content />);
        wrapper.setProps({ filmsData: data });
        expect(wrapper.find('div.content').exists()).toMatchSnapshot();
    });
});