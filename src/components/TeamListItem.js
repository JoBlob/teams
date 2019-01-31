import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  ListGroupItem  from 'react-bootstrap/ListGroupItem';

import { fetchTeamDetails } from '../actions/teams';

class TeamListItem extends React.Component {


    handleClick=()=>{
        this.props.fetchTeamDetails(this.props.team.id);
    };


    render(){
        return(
            <Link to="/teamDetails" onClick={this.handleClick}>{this.props.team.name}</Link>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchTeamDetails: (id) => dispatch(fetchTeamDetails(id))
    }
}

export default connect(null, mapDispatchToProps)(TeamListItem);