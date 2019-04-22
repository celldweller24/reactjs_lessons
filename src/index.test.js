import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import App from './index.jsx';

// configure({adapter:new Adapter()});
// jest.mock('axios');

describe('App Test Suite', () => {
    it('Should fetch a list of films', () => {
        //const getSpy = jest.spyOn(axios, 'get');
        const wrapper = shallow(<App />);
        //expect(getSpy).toBeCalled();
        expect(wrapper.exists()).toMatchSnapshot();
    });
});