import React from 'react';
import { shallow } from 'enzyme';
import Genre from './Genre';

const genres = ['Adventure', 'Science Fiction', 'Fantasy', 'Action'];

describe('Genre Test Suite', () => {
    it('Should render <div> with <p>', () => {
        const wrapper = shallow(<Genre filmGenre={ genres }/>);
        expect(wrapper.find('p').exists()).toMatchSnapshot();
    });
});