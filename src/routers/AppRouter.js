import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Routes from '../constants/routes';
import GeneralFooter from "../components/GeneralFooter";
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={Routes.HOME}>
                <Home/>
                <GeneralFooter/>
            </Route>
            <Route path={Routes.ABOUT} >
                <About />
                <GeneralFooter />
            </Route>
            <Route path={Routes.PRIVACY}>
                <Privacy />
                <GeneralFooter />
            </Route>
            <Route path={Routes.CONTACT} >
                <Contact />
                <GeneralFooter />
            </Route>
            <Route component={Home}/>
        </Switch>
    );
};

export default AppRouter;
