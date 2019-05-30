import React from 'react';
import { shallow } from 'enzyme';
import HeaderDetail from './HeaderDetail';

describe('Runtime component Test Suite', () => {
    it('Should render <header> and "detail-film" block', () => {
        const wrapper = shallow(<HeaderDetail />);
        expect(wrapper.find('header .detail-film').exists()).toMatchSnapshot();
    });
});