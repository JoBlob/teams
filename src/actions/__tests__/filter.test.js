import * as action from '../filter';
import * as TYPES from '../types';

describe('filter action',  () => {

    it('should create an action to add filter', () => {
        const text = 'toto';
        const expectedAction = {
            type: TYPES.UPDATE_FILTER,
            payload: text
        };

        expect(action.updateFilter(text)).toEqual(expectedAction);
    });
});