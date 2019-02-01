import React from 'react';
import SearchFilter from './SearchFilter';

export default({children}) => {
    return (
        <div>
            <SearchFilter/>
            {children}
        </div>
    );
};