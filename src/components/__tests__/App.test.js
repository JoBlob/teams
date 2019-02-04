import React from 'react';
import {shallow} from 'enzyme';

import App from '../App';
import SearchFilter from  '../SearchFilter';

let wrapper = shallow(<App/>);


it('renders searchFilter correctly', () => {
   expect(wrapper.find(SearchFilter).length).toEqual(1);
});