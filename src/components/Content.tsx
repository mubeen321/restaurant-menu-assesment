import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Favorites from '../pages/Favorites';
import MealGenerator from '../pages/MealGenerator';
import AboutMe from '../pages/AboutMe';
import Dishes from '../pages/Dishes';
import '../App.css'

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path="/menu" component={Menu} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/generator" component={MealGenerator} />
                <Route path="/about" component={AboutMe} />
                <Route path="/dishes/:category" component={Dishes} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}

export default Content;
