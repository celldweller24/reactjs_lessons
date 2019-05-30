import React from 'react';
import { shallow } from 'enzyme';
import Overview from './Overview';

describe('Overview component Test Suite', () => {
    const filmOverwiev = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ';
    it('Should render <p> with class "film-item__overview"', () => {
        const wrapper = shallow(<Overview filmOverwiev={ filmOverwiev }/>);
        expect(wrapper.find('.film-item__overview').exists()).toMatchSnapshot();
    });
});