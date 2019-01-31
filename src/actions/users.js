import * as ACTIONS from './types';

const USER_URL = 'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/';

//GET user list
 const getUserListStart = () => {
    return {
        type:ACTIONS.GET_USER_LIST_START,
    };
};

const getUserListSuccess = (userList) => {
    return {
        type:ACTIONS.GET_USER_LIST_SUCCESS,
        payload: userList
    };
};


const getUserListFailure = (error) => {
    return {
        type:ACTIONS.GET_USER_LIST_FAILURE,
        payload: [],
        error
    };
};


export const fetchUserList = () => {
    return dispatch => {
        dispatch(getUserListStart());
        return fetch(USER_URL)
        .then(
            response => {
                if(response.ok){
                    return response.json();
                };
                throw new Error('404');
            }
        )
        .then(json =>
            dispatch(getUserListSuccess(json))
        ).catch(error => {
            dispatch(getUserListFailure(error));;
        })
    }
}


// GET user info
const getUserDetailsStart = () => {
    return {
        type: ACTIONS.GET_USER_DETAILS_START,
    };
};


const getUserDetailsSuccess = (userDetails) => {
    return {
        type: ACTIONS.GET_USER_DETAILS_SUCCESS,
        payload: userDetails
    };
};


const getUserDetailsFailure = (error) => {
    return {
        type:ACTIONS.GET_USER_DETAILS_FAILURE,
        payload:{},
        error
    };
};


export const fetchUserDetails = (id) => {
    return dispatch => {
        dispatch(getUserDetailsStart());
        return fetch(USER_URL + id)
        .then(
            response => {
                if(response.ok){
                    return response.json();
                };
                throw new Error('404');
            }
        )
        .then(json =>
            dispatch(getUserDetailsSuccess(json))
        ).catch(error => {
            dispatch(getUserDetailsFailure(error));;
        })
    }
}

