import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/header" component={Header} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;