import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Routes from '../constants/routes';
import GeneralFooter from "../components/GeneralFooter";
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Publications from "../pages/Publications";
import Login from "../pages/Login";

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
            <Route path={Routes.REGISTER} >
                <Register />
                <GeneralFooter />
            </Route>
            <Route path={Routes.PROFILE} >
                <Profile />
                <GeneralFooter />
            </Route>
            <Route path={Routes.PUBLICATION} >
                <Publications />
                <GeneralFooter />
            </Route>
            <Route path={Routes.LOGIN} >
                <Login/>
                <GeneralFooter />
            </Route>
            <Route component={Home}/>
        </Switch>
    );
};

export default AppRouter;
