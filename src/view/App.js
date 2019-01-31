import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchUserList } from '../actions/users';
import { fetchTeamList } from '../actions/teams'
import TeamList from '../components/TeamList';
import SearchFilter from '../components/SearchFilter';

class App extends React.Component {

    componentDidMount(){
        this.props.fetchUserList();
        this.props.fetchTeamList();
    }

    render(){
        return(
            <div>
               <header>hello!</header>
               <SearchFilter/>
               <Route path="/" component={TeamList} exact={true}/>
            </div>
        );
    };
}


const mapDispatchToProps = (dispatch) => {
    return{
        fetchUserList: () => dispatch(fetchUserList()),
        fetchTeamList: () => dispatch(fetchTeamList())
    }
}

export default connect(null, mapDispatchToProps)(App);