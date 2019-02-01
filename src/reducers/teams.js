import * as ACTIONS from '../actions/types';

export default function (state = [], action) {
    switch(action.type) {
        case ACTIONS.GET_TEAM_LIST_SUCCESS:
        return { 
           ...state, 
           teamList: [...action.payload]
        };

        case ACTIONS.GET_TEAM_DETAILS_SUCESS:
        return{
            ...state,
            teamDetails:{...action.payload}
        };
        
        default:
        return state;
    }
};