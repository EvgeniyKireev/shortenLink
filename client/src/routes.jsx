import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {DetailsPage} from "./pages/DetailsPage";
import {CreatePage} from "./pages/CreatePage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuth => {
    if (isAuth) {
        return (<Switch>
            <Route path={'/links'} exact><LinksPage/></Route>
            <Route path={'/detail/:id'}><DetailsPage/></Route>
            <Route path={'/create'} exact><CreatePage/></Route>
            <Redirect to={'/create'} />
        </Switch>);
    }
    return (
        <Switch>
            <Route path={'/'}><AuthPage/></Route>
            <Redirect to={'/'} />
        </Switch>
    );
}