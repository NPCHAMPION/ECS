import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import ServicesPage from '../pages/services';

const Main = (props) => (
    <div>
        { props.children }
        <div className="main">
            <Switch>
                <Route exact path='/' component={ HomePage }/>
                <Route path='/services' component={ ServicesPage }/>
            </Switch>
        </div>
    </div>
)

export default Main;