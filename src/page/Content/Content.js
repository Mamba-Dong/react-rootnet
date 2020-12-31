import React from 'react';
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import ViewCalender from "../Calendar/ViewCalender";

function Content(props) {
    return (
        <Layout className="site-layout">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/viewCalender" component={ViewCalender} />
            </Switch>
        </Layout>
    );
}

export default Content;
