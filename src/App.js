import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import Delivety from "./pages/Delivety";
import Latest from "./pages/Latest";
import MyCart from "./pages/MyCart";
import News from "./pages/News";
import NewsSing from "./pages/NewsSing";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/header" component={Header} />
                    <Route path="/footer" component={Footer} />
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/delivety" component={Delivety}/>
                    <Route path="/latest" component={Latest}/>
                    <Route path="/my-cart" component={MyCart}/>
                    <Route path="/news" component={News}/>
                    <Route path="/news-sing" component={NewsSing}/>


                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;