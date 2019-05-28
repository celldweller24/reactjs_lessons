import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

describe('Content component Test Suite', () => {
    it('Should render <div> with class "content"', () => {
        let data = {
                budget: 0,
                genres: ["Action", "Adventure", "Science Fiction"],
                id: 447365,
                overview: "The third film based on Marvel's Guardians of the Galaxy.",
                poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
                release_date: "2020-05-01",
                revenue: 0,
                runtime: null,
                tagline: "",
                title: "Guardians of the Galaxy Vol. 3",
                vote_average: 0,
                vote_count: 9
        };
        
        const wrapper = shallow(<Content />);
        wrapper.setProps({ filmsData: data });
        expect(wrapper.find('div.content').exists()).toMatchSnapshot();
    });
});