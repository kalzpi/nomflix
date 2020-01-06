import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from 'Components/Header';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/tv" exact component={TV}></Route>
                <Route path="/tv/popular" exact render={()=><h1>Popular</h1>}></Route>
                <Route path="/search" exact component={Search}></Route>
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)