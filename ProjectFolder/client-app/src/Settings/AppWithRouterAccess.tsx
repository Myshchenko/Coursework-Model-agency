import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import WelcomePage from '../Login page/WelcomePage';

export default function AppWithRouterAccess() {
    return (
        <>
            <Route exact path='/' component={WelcomePage} />
            <Route exact path='/homepage' component={HomePage} />
        </>

    );
}