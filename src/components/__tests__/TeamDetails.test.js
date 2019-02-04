import React from 'react';
import  { shallow }  from "enzyme";

import {TeamDetails}  from '../TeamDetails';


function setup(){
    const props = {
        team: {
            name: "Awesome Dancers",
            lead: 30,
            id: 1,
            members:[1,2]
        },
        userList:[
            {
                name: "Emma Lisbon",
                username: "superghost",
                id: 1
            },
            {
                name: "Emma Lisbon",
                username: "superghost",
                id: 2
            },
            {
                name: "Emma Lisbon",
                username: "superlead",
                id: 30
            }
        ],
        searchFilter:''
    };

    const wrapper = shallow(<TeamDetails { ...props }/>) 
    return {
        props, 
        wrapper
    };
};


describe('component', () => {

    describe('TeamDetails', () => {

        it('should render itself', () => {
            const { wrapper } = setup();
            expect(wrapper.find('TeamDetails')).toBeTruthy();
            expect(wrapper.find('table')).toBeTruthy();
        });

        it('should render the correct amount of elements', () => {
            const { wrapper, props } = setup();
            // the plus one is for the lead
            expect(wrapper.find('tbody').find('tr').length).toBe(props.team.members.length + 1);
        });

    });
});