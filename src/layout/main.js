import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../components/nav';
import Footer from '../components/footer';
import HomePage from '../pages/home';
import ServicesPage from '../pages/services';
import TeamPage from '../pages/team';
import ProductsPage from '../pages/products';
import ContactPage from '../pages/contact';

const Main = (props) => (
    <div>
        { props.children }
        <div className="main">
        <Nav />
            <Switch>
                <Route exact path='/ECS' component={ HomePage }/>
                <Route path='/ECS/services' component={ ServicesPage }/>
                <Route path='/ECS/team' component={ TeamPage }/>
                <Route path='/ECS/products' component={ ProductsPage }/>
                <Route path='/ECS/contact' component={ ContactPage }/>
            </Switch>
        <Footer />
        </div>
    </div>
)

export default Main;