import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter Test Suite', () => {
    it('Should render filter container', () => {
        const wrapper = shallow(<Filter quantityFilmsFound="10"/>);
        expect(wrapper.find('.filter').exists()).toMatchSnapshot();
    });
});