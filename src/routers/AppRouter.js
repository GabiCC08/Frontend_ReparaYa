import React from 'react';
import {Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';
import NotFound from '../pages/NotFound';
import Routes from '../constants/routes';
import HomeHeader from "../components/HomeHeader";
import HomeContent from "../components/HomeContent";
import GeneralFooter from "../components/GeneralFooter";
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";



const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={Routes.HOME}>
                <HomeHeader />
                <HomeContent />
                <GeneralFooter />
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
            <Route component={NotFound}/>
        </Switch>
    );
};

export default AppRouter;
