import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Test Suite', () => {
    let buttonName = 'Test Button';
    let className = 'test_button_class';

    it(`Should render <button> with class ${className}`, () => {
        const wrapper = shallow(<Button buttonName={ buttonName } className={ className }/>);
        expect(wrapper.find('button').exists()).toMatchSnapshot();
    });
});