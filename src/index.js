import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


import configureStore from './store';
import App from './components/App';
import TeamDetails from './components/TeamDetails';
import TeamList from './components/TeamList';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" component={TeamList} exact/>
                    <Route path="/teamDetails" component={TeamDetails} exact/>
                </Switch>
            </App>
        </BrowserRouter>
      
    </Provider>
, document.querySelector('#root'));