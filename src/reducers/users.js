import * as ACTIONS from '../actions/types';

export default function (state = [], action) {
    switch(action.type) {
        case ACTIONS.GET_USER_LIST_SUCCESS:
        return { 
           ...state, 
           userList: [...action.payload]
        };

        case ACTIONS.GET_USER_DETAILS_SUCCESS:
        return{
            ...state,
            userDetails:{...action.payload}
        };
        
        default:
        return state;
    }
};