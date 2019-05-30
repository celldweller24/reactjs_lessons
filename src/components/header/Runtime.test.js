import React from 'react';
import { shallow } from 'enzyme';
import Runtime from './Runtime';

describe('Runtime component Test Suite', () => {
    it('Should render <p> with class "film-item__runtime"', () => {
        const wrapper = shallow(<Runtime filmRuntime="150"/>);
        expect(wrapper.find('.film-item__runtime').exists()).toMatchSnapshot();
    });
});