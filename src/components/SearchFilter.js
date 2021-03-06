import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'

import { updateFilter } from '../actions/filter';

class SearchFilter extends React.Component {


    handleChange = (e) => {
        this.props.updateFilter(e.target.value)
    };
    
    render(){

        const inputStyle = {
            width: '15%',
            marginBottom:'20px'
        };

        return(
            <Form>
                <Form.Label >Search</Form.Label>
                <Form.Control style={inputStyle} type="text" id="filter" onChange={this.handleChange}/>
            </Form>
        );
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (filter) => dispatch(updateFilter(filter)),
    };
};

export default connect(null, mapDispatchToProps)(SearchFilter);