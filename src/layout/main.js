import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import ServicesPage from '../pages/services';
import TeamPage from '../pages/team';
import ProductsPage from '../pages/products';
import ContactPage from '../pages/contact';

const Main = (props) => (
    <div>
        { props.children }
        <div className="main">
            <Switch>
                <Route exact path='/' component={ HomePage }/>
                <Route path='/services' component={ ServicesPage }/>
                <Route path='/team' component={ TeamPage }/>
                <Route path='/products' component={ ProductsPage }/>
                <Route path='/contact' component={ ContactPage }/>
            </Switch>
        </div>
    </div>
)

export default Main;