import * as ACTIONS from './types';

export const updateFilter = (filter) => {
    return {
        type:ACTIONS.UPDATE_FILTER,
        payload: filter

    };
};
