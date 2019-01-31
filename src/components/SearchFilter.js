import React from 'react';
import { connect } from 'react-redux';

import { updateFilter } from '../actions/filter';

class SearchFiler extends React.Component {


    handleChange = (e) => {
        this.props.updateFilter(e.target.value)
    }

    render(){
        return(
            <div>
                <label>Search</label>
                <input type="text" id="filter" onChange={this.handleChange}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (filter) => dispatch(updateFilter(filter)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFiler);