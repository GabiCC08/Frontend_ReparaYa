
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Routes from '../constants/routes';
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Switch>
      <Route path={ Routes.ABOUT }>
        <About />
      </Route>
      <Route path={ Routes.PRIVACY }>
        <Privacy />
      </Route>
      <Route path={ Routes.CONTACT}>
        <Contact />
      </Route>

      <Route component={ NotFound } />
    </Switch>
  );
};

export default AppRouter;
