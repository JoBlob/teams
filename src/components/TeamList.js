import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import ListGroup from 'react-bootstrap/ListGroup';

import TeamListItem from './TeamListItem';
import { fetchUserList } from '../actions/users';
import { fetchTeamList } from '../actions/teams'

class TeamList extends React.Component {
    componentDidMount(){
        this.props.fetchUserList();
        this.props.fetchTeamList();
    
    }

    renderList(){
        let filteredList = this.props.teamList.filter(team => {
            return team.name.toLowerCase().includes(this.props.searchFilter.toLowerCase()) && team;
        });

        return filteredList.map(team => {
            return(
            <li key={team.id}>
            <TeamListItem team={team}/>
            </li>

            );
        });
    };

    render(){
        return(
            <div>{this.props.teamList && this.renderList()}</div>
        );
    };
};
const mapStateToProps = (state) => {
    return{
        teamList:state.teams.teamList,
        searchFilter: state.search.filter
    }   
}


const mapDispatchToProps = (dispatch) => {
    return{
        fetchUserList: () => dispatch(fetchUserList()),
        fetchTeamList: () => dispatch(fetchTeamList())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamList));