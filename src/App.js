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
import Product from "./pages/Product";
import Registr from "./pages/Registr";
import Shares from "./pages/Shares";
import Wishlist from "./pages/Wishlist";
import Zakaz_1 from "./pages/Zakaz-1";
import Zakaz_2 from "./pages/Zakaz-2";
import Zakaz_3 from "./pages/Zakaz-3";
import Zakaz_4 from "./pages/Zakaz-4";

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
                    <Route path="/product" component={Product}/>
                    <Route path="/registr" component={Registr}/>
                    <Route path="/shares" component={Shares}/>
                    <Route path="/wishlist" component={Wishlist}/>
                    <Route path="/zakaz-1" component={Zakaz_1}/>
                    <Route path="/zakaz-2" component={Zakaz_2}/>
                    <Route path="/zakaz-3" component={Zakaz_3}/>
                    <Route path="/zakaz-4" component={Zakaz_4}/>



                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;