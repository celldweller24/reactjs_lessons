import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component Test Suite', () => {
    it('Should render <footer> with <h4>', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer h4').exists()).toMatchSnapshot();
    });
});