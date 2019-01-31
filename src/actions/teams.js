import * as ACTIONS from './types';

const TEAM_REQUEST_URL = 'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/'

//GET team list
 const getTeamListStart = () => {
    return {
        type:ACTIONS.GET_TEAM_LIST_START,
    };
};


const getTeamListSuccess = (teamList) => {
    return {
        type:ACTIONS.GET_TEAM_LIST_SUCCESS,
        payload:teamList
    };
};


const getTeamListFailure = (error) => {
    return {
        type:ACTIONS.GET_TEAM_LIST_FAILURE,
        payload: [],
        error
    };
};


export const fetchTeamList = () => {
    return dispatch => {
        dispatch(getTeamListStart());
        return fetch(TEAM_REQUEST_URL)
        .then(
            response => {
                if(response.ok){
                    return response.json();
                };
                throw new Error('404');
            }
        )
        .then(json =>
            dispatch(getTeamListSuccess(json))
        ).catch(error => {
            dispatch(getTeamListFailure(error));;
        })
    }
}



// GET team info
const getTeamDetailsStart = () => {
    return {
        type:ACTIONS.GET_TEAM_DETAILS_START,
    };
};


const getTeamDetailsSuccess = (teamDetails) => {
    return {
        type:ACTIONS.GET_TEAM_DETAILS_SUCESS,
        payload: teamDetails
    };
};


const getTeamDetailsFailure = (error) => {
    return {
        type:ACTIONS.GET_TEAM_DETAILS_FAILURE,
        payload:[],
        error
    };
};


export const fetchTeamDetails = (id) => {
    return dispatch => {
        dispatch(getTeamDetailsStart());
        return fetch(TEAM_REQUEST_URL + id)
        .then(
            response => {
                if(response.ok){
                    return response.json();
                };
                throw new Error('404');
            }
        )
        .then(json =>
            dispatch(getTeamDetailsSuccess(json))
        ).catch(error => {
            dispatch(getTeamDetailsFailure(error));;
        })
    }
}

