import React from 'react';
import { shallow } from 'enzyme';

import { TeamList } from '../TeamList';

function setup() {
    const props = {
        teamList: [
            {
                name: 'Awesome Dancers',
                id: 1
            },
            {
                name: 'Awesome Tricksters',
                id: 2
            },
            {
                name: 'Invincible Jugglers',
                id: 3
            },
            {
                name: 'Unbelivable Astronauts',
                id: 4
            },
            {
                name: 'Unbelivable Heroes',
                id: 5
            }
        ],
        searchFilter:'',
        fetchTeamList: jest.fn(),
        fetchUserList: jest.fn()

    };

    const wrapper = shallow(<TeamList {...props}/>)
    return {
        props,
        wrapper
    }
};

describe('component', () => {
    describe('TeamList', () => {
        
        it('should render itself', () => {
            const {wrapper} = setup();
            expect(wrapper.find('TeamList')).toBeTruthy();
        });

        it('should render the correct amount of elements', () => {
            const {wrapper, props} = setup();
            expect(wrapper.find('li').length).toEqual(props.teamList.length);
        });
    });
});