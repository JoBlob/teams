import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import  Table  from 'react-bootstrap/Table';

export class TeamDetails extends React.Component {

    renderTableHeader(){
        return(      
            <thead>
                <tr>
                    <th>Username</th>
                    <th> Name </th>
                </tr>
            </thead>
        );
    };

    renderTableBody(){

        const memberList = this.props.userList.filter( user => {
            return this.props.team.members.find( member => user.id === member);
        });

        const lead = this.props.userList.find( user => user.id === this.props.team.lead);

        memberList.splice(0, 0, lead)

        let filteredList =  memberList.filter(member => {
            return member.name.toLowerCase().includes(this.props.searchFilter.toLowerCase()) && member;
        });

       return filteredList.map(member=>{
            return (
                <tr key={member.id}>
                    <td>{member.username}</td>
                    <td>{member.name}</td>
                </tr>
            );
        });
    };

    render(){
        return(
           <div>
               <Table striped bordered hover size="sm">
               {this.props.team && this.renderTableHeader()}
               <tbody >
                    {this.props.team && this.renderTableBody()}
                </tbody>
               </Table>
                <Link to="/">Back</Link>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        team: state.teams.teamDetails,
        userList: state.users.userList,
        searchFilter: state.search.filter
    };
};

export default connect(mapStateToProps, null)(TeamDetails);