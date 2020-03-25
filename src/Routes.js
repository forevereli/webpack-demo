/**
 * @author cici
 * @date 2020-01-02
 * @Description:
 */
import React from 'react';
import {
    BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Page from './components/Page2';

export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/page" component={Page} />
            </Switch>
        </BrowserRouter>
    );
}
