import * as ACTIONS from '../actions/types';

export default function (state = '', action) {
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