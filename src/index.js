import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Root from './Root';
import App from './components/App';
import TeamDetails from './components/TeamDetails';
import TeamList from './components/TeamList';


ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" component={TeamList} exact/>
                    <Route path="/teamDetails" component={TeamDetails} exact/>
                </Switch>
            </App>
        </BrowserRouter>
    </Root>
, document.querySelector('#root'));