import React, {Component} from 'react';
// import {Link} from "react-router-dom";

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         openMenu: false,
    //         openLeng: true,
    //         openCurrency: true,
    //     }
    // }
    //
    // toggleMenu = () => {
    //     this.setState({openMenu: !this.state.openMenu})
    // }
    //
    // toggleLeng = () => {
    //     this.setState({openLeng: !this.state.openLeng})
    // }
    //
    // toggleCurrency = () => {
    //     this.setState({openCurrency: !this.state.openCurrency})
    // }

    render() {
        console.log(this.state);
        return (
            <header>
                Header
                {/*<div id="my-page">*/}
                {/*    <div className="site-header">*/}
                {/*        <div className="top-line-wrapper">*/}
                {/*            <div className="container">*/}

                {/*                <div className="top-line clearfix">*/}

                {/*                    <button className="hamburger hamburger--squeeze" type="button">*/}
				{/*				<span className="hamburger-box">*/}
				{/*					<span className="hamburger-inner"></span>*/}
				{/*				</span>*/}
                {/*                    </button>*/}

                {/*                    <ul className="nav-top-left">*/}
                {/*                        <li>*/}
                {/*                            <div onClick={this.toggleCurrency} className={`${this.state.openCurrency ? "currency-selector dropdown" : "currency-selector dropdown open"}`}>*/}
                {/*                                <span className="expand-more dropdown-button-tl" data-toggle="dropdown"*/}
                {/*                                      aria-expanded={`${this.state.openCurrency ? "false" : "true"}`}>Рубли ₽</span>*/}
                {/*                                <ul className="dropdown-menu">*/}
                {/*                                    <li className="current">*/}
                {/*                                        <Link title="Рубли" rel="nofollow" to=""*/}
                {/*                                              className="dropdown-item">РУБЛИ ₽</Link>*/}
                {/*                                    </li>*/}
                {/*                                    <li>*/}
                {/*                                        <Link title="Euro" rel="nofollow" to=""*/}
                {/*                                              className="dropdown-item">EUR €</Link>*/}
                {/*                                    </li>*/}
                {/*                                    <li>*/}
                {/*                                        <Link title="US Dollar" rel="nofollow" to=""*/}
                {/*                                              className="dropdown-item">USD $</Link>*/}
                {/*                                    </li>*/}
                {/*                                </ul>*/}
                {/*                            </div>*/}
                {/*                        </li>*/}
                {/*                        <li>*/}
                {/*                            <div onClick={this.toggleLeng} className={`${this.state.openLeng ? "site-lng dropdown" : "site-lng dropdown open"}`}>*/}
                {/*                                <div className="button-lng-box dropdown-button-tl"*/}
                {/*                                     data-toggle="dropdown" role="button" aria-expanded={`${this.state.openLeng ? "false" : "true"}`}>Русский*/}
                {/*                                </div>*/}
                {/*                                <div className="lng-box-hiiden-wrapp dropdown-menu dropdown-box-s-wrap">*/}
                {/*                                    <div className="lng-box-hiiden dropdown-box-s">*/}
                {/*                                        <span className="hide-lng"><i*/}
                {/*                                            className="fa fa-long-arrow-left"></i> Назад</span>*/}
                {/*                                        <ul>*/}
                {/*                                            <li className="active"><Link to="#"*/}
                {/*                                                                         target="_blank">Русский<span>Русский</span></Link>*/}
                {/*                                            </li>*/}
                {/*                                            <li><Link to="#">English<span>Английский</span></Link></li>*/}
                {/*                                            <li><Link to="#">Deutsch<span>Немецкий</span></Link></li>*/}
                {/*                                            <li><Link to="#">Français<span>Французский</span></Link></li>*/}
                {/*                                            <li><Link to="#">Español<span>Испанский</span></Link></li>*/}
                {/*                                            <li><Link to="#">中國<span>Китайский</span></Link></li>*/}
                {/*                                            <li><Link to="#">한국의<span>Корейский</span></Link></li>*/}
                {/*                                            <li><Link to="#">日本の<span>Японский</span></Link></li>*/}
                {/*                                            <li><Link to="#">Italiano<span>Итальянский</span></Link></li>*/}
                {/*                                            <li><Link to="#">Português<span>Португальский</span></Link></li>*/}
                {/*                                            <li><Link to="#">العربية<span>Арабский</span></Link></li>*/}
                {/*                                            <li><Link to="#">Nederlands<span>Нидерландский</span></Link>*/}
                {/*                                            </li>*/}
                {/*                                            <li><Link to="#">Türk<span>Турецкий</span></Link></li>*/}
                {/*                                            <li><Link to="#">Polski<span>Польский</span></Link></li>*/}
                {/*                                        </ul>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </li>*/}
                {/*                        <li><span className="top-priv">Добро пожаловать на Yourlogo!</span></li>*/}
                {/*                    </ul>*/}

                {/*                    <ul className="nav-top-right">*/}
                {/*                        <li><Link to="/delivety" className="title-pages">Оплата и доставка</Link></li>*/}
                {/*                        <li>*/}
                {/*                            <Link to="/registr" className="reg-or-sign hidden-xs popup_content"><i*/}
                {/*                                className="fa fa-user"></i>Регистрация / Вход</Link>*/}
                {/*                            <Link to="#registr" className="ref-or-sign-mobile visible-xs popup_content">*/}
                {/*                                <img src="img/header/profile.svg" alt="alt" />*/}
                {/*                            </Link>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}

                {/*                </div>*/}

                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="center-line">*/}

                {/*            <div className="container full-height">*/}
                {/*                <div className="center-line-inner">*/}
                {/*                    <div className="row">*/}
                {/*                        <div className="col-md-3 nav-left">*/}
                {/*                            <Link to="/" className="logo-img"><img className="img-responsive"*/}
                {/*                                                                   src="img/header/sample-logo.png"*/}
                {/*                                                                   alt="alt"/></Link>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-6 nav-center">*/}
                {/*                            <div className="nav-search">*/}
                {/*                                <form className="clearfix">*/}
                {/*                                    <input id="search-input" type="search" name="searchList"*/}
                {/*                                           placeholder="Поиск" required=""/>*/}
                {/*                                    <button type="reset" className="search-clear">Начать снова</button>*/}
                {/*                                    <button type="submit" className="btn search-button">Найти</button>*/}
                {/*                                </form>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-md-3 nav-right">*/}

                {/*                            <div className="block-minicart dropdown">*/}
				{/*					<span className="minicart" data-toggle="dropdown" role="button">*/}
				{/*						<span className="counter qty">*/}
				{/*							<span className="cart-icon"><i className="fa fa-shopping-bag"></i></span>*/}
				{/*							<span className="counter-number">2</span>*/}
				{/*						</span>*/}
				{/*						<span className="counter-your-cart">*/}
				{/*							<span className="counter-label">Товаров на:</span>*/}
				{/*							<span className="counter-price">24 000.00 руб.</span>*/}
				{/*						</span>*/}
				{/*					</span>*/}
                {/*                                <div className="parent-megamenu" style={{display: "block"}}>*/}
                {/*                                    <form>*/}
                {/*                                        <div className="minicart-content-wrapper">*/}
                {/*                                            <div className="subtitle">*/}
                {/*                                                Сейчас в корзине <span>2</span> товара:*/}
                {/*                                            </div>*/}
                {/*                                            <div className="minicart-items-wrapper">*/}
                {/*                                                <ol className="minicart-items">*/}
                {/*                                                    <li className="product-inner clearfix">*/}
                {/*                                                        <div className="product-thumb">*/}
                {/*                                                            <div className="thumb-inner">*/}
                {/*                                                                <Link to=""><img*/}
                {/*                                                                    src="img/items/258b7345758439.5845735e75a22.jpg"*/}
                {/*                                                                    alt="c1"*/}
                {/*                                                                    className="img-responsive"/></Link>*/}
                {/*                                                            </div>*/}
                {/*                                                        </div>*/}
                {/*                                                        <div className="product-innfo">*/}
                {/*                                                            <div className="product-name"><Link to="">Ноутбук*/}
                {/*                                                                Asus X540LJ-XX569D 15.6 "/i3 5005U/4*/}
                {/*                                                                ГБ/500</Link></div>*/}
                {/*                                                            <Link to="#" className="remove"><i*/}
                {/*                                                                className="fa fa-times"></i></Link>*/}
                {/*                                                            <span className="price price-dark">*/}
				{/*													<ins>12 000.00 руб.</ins>*/}
				{/*												</span>*/}
                {/*                                                        </div>*/}
                {/*                                                    </li>*/}
                {/*                                                    <li className="product-inner clearfix">*/}
                {/*                                                        <div className="product-thumb">*/}
                {/*                                                            <div className="thumb-inner">*/}
                {/*                                                                <Link to=""><img*/}
                {/*                                                                    src="img/items/258b7345758439.5845735e75a222.jpg"*/}
                {/*                                                                    alt="c2"*/}
                {/*                                                                    className="img-responsive"/></Link>*/}
                {/*                                                            </div>*/}
                {/*                                                        </div>*/}
                {/*                                                        <div className="product-innfo">*/}
                {/*                                                            <div className="product-name"><Link to="">Телевизор*/}
                {/*                                                                LED Haier 32" LE32B8500T</Link></div>*/}
                {/*                                                            <Link to="#" className="remove"><i*/}
                {/*                                                                className="fa fa-times"></i></Link>*/}
                {/*                                                            <span className="price">*/}
				{/*													<ins>12 000.00 руб.</ins>*/}
				{/*													<del>11 000.00 руб.</del>*/}
				{/*												</span>*/}
                {/*                                                        </div>*/}
                {/*                                                    </li>*/}
                {/*                                                </ol>*/}
                {/*                                            </div>*/}
                {/*                                            <div className="subtotal">*/}
                {/*                                                <span className="label">Итого:</span>*/}
                {/*                                                <span className="price">24 000.00 руб</span>*/}
                {/*                                            </div>*/}
                {/*                                            <div className="actions">*/}
                {/*                                                <Link className="btn btn-viewcart" to="my-cart.html">В*/}
                {/*                                                    корзину</Link>*/}
                {/*                                                <Link className="btn btn-checkout" to="">Оформить*/}
                {/*                                                    заказ</Link>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                    </form>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}

                {/*                            <Link to="" className="hidden-md hidden-lg search-hidden"><span*/}
                {/*                                className="pe-7s-search"></span></Link>*/}
                {/*                            <Link to="" className="wishlist-minicart"><i className="fa fa-heart-o"></i></Link>*/}

                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="form-search-mobile">*/}
                {/*                    <form className="form-content">*/}
                {/*                        <Link to="#" className="close-block-serach"><span*/}
                {/*                            className="icon fa fa-times"></span></Link>*/}
                {/*                        <div className="input-wrapper">*/}
                {/*                            <input type="text" name="search" placeholder="Поиск..."*/}
                {/*                                   className="input-subscribe"/>*/}
                {/*                            <button type="submit" className="btn search">*/}
                {/*                                <span><i className="fa fa-search"></i></span>*/}
                {/*                            </button>*/}
                {/*                        </div>*/}
                {/*                    </form>*/}
                {/*                </div>*/}

                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="navigation-wrapper">*/}
                {/*            <div className="container">*/}

                {/*                <div className="navigation">*/}

                {/*                    <div*/}
                {/*                        class={`megamnu dropdown ${this.state.openMenu ? 'megamnu dropdown open' : ''}`}>*/}
                {/*                        <div onClick={this.toggleMenu} className="megamnu-button" data-toggle="dropdown"*/}
                {/*                             role="button">*/}
                {/*                            <h4 className="title">*/}
				{/*					<span className="btn-open-mobile home-page">*/}
				{/*						<span></span>*/}
				{/*						<span></span>*/}
				{/*						<span></span>*/}
				{/*					</span>*/}
                {/*                                <span className="title-menu">Все категории</span>*/}
                {/*                            </h4>*/}

                {/*                        </div>*/}
                {/*                        <ul className="megamnu-dropdown dropdown-menu">*/}
                {/*                            <li><Link to="category-page.html">Обувь</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Футболки и топы</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Худи и толстовки</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Куртки и жилеты</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Брюки и тайтсы</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Шорты</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Аксессуары и снаряжение</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Куртки и жилеты</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Брюки и тайтсы</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Шорты</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Аксессуары и снаряжение</Link></li>*/}
                {/*                            <li><Link to="category-page.html">Шорты</Link></li>*/}
                {/*                        </ul>*/}
                {/*                    </div>*/}

                {/*                    <div className="nav-site-wrapp">*/}
                {/*                        <nav className="nav-site">*/}
                {/*                            <ul className="nav-site-mnu clearfix">*/}
                {/*                                <li><Link to="/product">Популярное</Link></li>*/}
                {/*                                <li><Link to="/shares">Акции</Link></li>*/}
                {/*                                <li><Link to="/latest">Новинки</Link></li>*/}
                {/*                                <li><Link to="/news">Новости</Link></li>*/}
                {/*                                <li><Link to="/about-us">О нас</Link></li>*/}
                {/*                                <li><Link to="/contacts">Контакты</Link></li>*/}
                {/*                            </ul>*/}
                {/*                        </nav>*/}
                {/*                    </div>*/}

                {/*                </div>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </header>
        );
    }
}

export default Header;