import * as ACTIONS from '../actions/types';

const initialState = {
    filter: ""
}

export default function (state =initialState, action) {
    switch(action.type) {

        case ACTIONS.UPDATE_FILTER:
        return { 
           ...state, 
           filter: action.payload
        }

        default:
        return state;
    }
}