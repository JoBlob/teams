import React from 'react';
import { connect } from "react-redux";

class TeamList extends React.Component {

    renderList(){
       console.log("filter", this.props.filter)

        let filteredList = this.props.teamList.filter(team =>{
            let name = team.name.toLowerCase();
            return name.indexOf(
                this.props.filter.toString().toLowerCase() > -1
            )
        });
        
        console.log("list", filteredList)
        return filteredList.map(team => {
            return(
                <li key={team.id}>{team.name}</li>
            )
        })
    }

    render(){
        return(
            <div>{this.props.teamList && this.renderList()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        teamList:state.teams.teamList,
        filter: state.filter
    }   
}

export default connect(mapStateToProps, null )(TeamList);