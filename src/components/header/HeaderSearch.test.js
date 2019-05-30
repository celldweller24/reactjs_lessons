import React from 'react';
import { shallow } from 'enzyme';
import HeaderSearch from './HeaderSearch';

describe('HeaderSearch component Test Suite', () => {
    it('Should render <header>', () => {
        const wrapper = shallow(<HeaderSearch />);
        expect(wrapper.find('header').exists()).toMatchSnapshot();
    });
});