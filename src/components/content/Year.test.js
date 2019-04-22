import React from 'react';
import { shallow } from 'enzyme';
import Year from './Year';

describe('Year Test Suite', () => {
    let year = '2020-05-01';
    it('Should render <p> with class "film-item__year"', () => {
        const wrapper = shallow(<Year filmYear={ year }/>);
        expect(wrapper.find('p.film-item__year').exists()).toMatchSnapshot();
    });
});