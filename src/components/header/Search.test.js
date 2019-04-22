import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component Test Suite', () => {
    let searchTitle = 'Test Search title';

    it(`Should render <div> with class ${searchTitle} and <form>`, () => {
        const wrapper = shallow(<Search searchTitle={ searchTitle } />);
        expect(wrapper.find('form').exists()).toMatchSnapshot();
    });
});