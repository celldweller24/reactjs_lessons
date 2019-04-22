import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title Test Suite', () => {
    let title = 'Avengers: Infinity War';
    it('Should render <p> with class "film-item__film-title"', () => {
        const wrapper = shallow(<Title filmTitle={ title }/>);
        expect(wrapper.find('p.film-item__film-title').exists()).toMatchSnapshot();
    });
});