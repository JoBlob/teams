export function executeGetRequest(url, startAction, successAction, failureAction){
    debugger
    return dispatch => {
        dispatch(startAction());
        return fetch(url)
        .then(
            response => {
                if(response.ok){
                    return response.json()
                };
                throw new Error('404');
            }
        )
        .then(json => 
            dispatch(successAction(json))
        )
        .catch(error => {
            dispatch(failureAction(error))
        });
    }
}