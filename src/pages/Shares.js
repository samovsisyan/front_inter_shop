import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Wrapper from "../components/Wrapper";

class Shares extends Component {
    render() {
        return (
            <Wrapper>
                <div className="content-page">

                    <div className="container">

                        <div className="row">

                            <div className="col-sm-8 col-sm-push-4 col-md-9 col-md-push-3">

                                <div className="banners-top">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <div className="hover-banner">
                                                <Link to=""><img src="img/sliders/adidas-02.jpg"
                                                                 alt="adidas-02"/><span>Баннер</span></Link>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="hover-banner">
                                                <Link to=""><img src="img/sliders/adidas-01.jpg"
                                                                 alt="adidas-01"/><span>Баннер</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-cat-page">

                                    <div className="toolbar-products">
                                        <div className="toolbar-option clearfix">

                                            <div className="toolbar-s-page">
                                                <span>24 из 65</span>
                                            </div>

                                            <div className="toolbar-sort">
                                                <span>Сортировать</span>
                                                <div className="jq-selectbox jqselect sorter-options form-control">
                                                    <select className="sorter-options form-control">
                                                        <option>По популярности</option>
                                                        <option>По названию</option>
                                                        <option>По цене</option>
                                                    </select>
                                                    <div className="jq-selectbox__select">
                                                        <div className="jq-selectbox__select-text"
                                                             style={{width: 111.672}}>По популярности
                                                        </div>
                                                        <div className="jq-selectbox__trigger">
                                                            <div className="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div className="jq-selectbox__dropdown" style={{display: "none"}}>
                                                        <ul>
                                                            <li className="selected sel" style={{}}>По популярности</li>
                                                            <li style={{}}>По названию</li>
                                                            <li style={{}}>По цене</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="toolbar-per">
                                                <span>Показывать</span>
                                                <div
                                                    className="jq-selectbox jqselect limiter-options form-control changed">
                                                    <select className="limiter-options form-control">
                                                        <option>12 товаров</option>
                                                        <option selected="">24 товаров</option>
                                                        <option>36 товаров</option>
                                                        <option>48 товаров</option>
                                                    </select>
                                                    <div className="jq-selectbox__select">
                                                        <div className="jq-selectbox__select-text"
                                                             style={{width: 71.5938}}>24 товаров
                                                        </div>
                                                        <div className="jq-selectbox__trigger">
                                                            <div className="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div className="jq-selectbox__dropdown" style={{display: "none"}}>
                                                        <ul>
                                                            <li style={{}}>12 товаров</li>
                                                            <li className="selected sel" style={{}}>24 товаров</li>
                                                            <li style={{}}>36 товаров</li>
                                                            <li style={{}}>48 товаров</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="products products-list products-grid equal-container">

                                        <div className="row spec-row-0">


                                            <div className="col-xs-6 col-md-4">
                                                <div className="product-item share-product">
                                                    <div className="img-product--box">
                                                        <Link to="">
                                                            <img className="product-img"
                                                                 src="img/items/258b7345758439.5845735e75a22.jpg"
                                                                 alt="alt"/>
                                                        </Link>
                                                    </div>
                                                    <div className="stik">
                                                        <span>-50%</span>
                                                    </div>
                                                    <div className="ad--set">
                                                        <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                            className="fa fa-heart-o"></i></Link>
                                                    </div>
                                                    <div className="product-descr">
                                                        <div className="product-title">
                                                            <Link to="" className="title-share">Куртка от Lavel-Frame
                                                                (черная)</Link>
                                                        </div>
                                                        <div className="type">Куртки / куртки на осень</div>
                                                        <span className="new-price">3 790 р.</span>
                                                        <del className="old-price">3 780 р.</del>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="pagination-panel clearfix">
                                        <div className="pagination-panel-wrap">
                                            <Link to="#" className="prev page-numbers"></Link>
                                            <span className="page-numbers current">1</span>
                                            <Link to="#" className="page-numbers">2</Link>
                                            <Link to="#" className="page-numbers">3</Link>
                                            <Link to="#" className="page-numbers">4</Link>
                                            <Link to="#" className="next page-numbers"></Link>
                                        </div>
                                        <span className="show-resuilt">24 из 65</span>
                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-4 col-sm-pull-8 col-md-3 col-md-pull-9">
                                <div className="right-bar">

                                    <div className="breadcrumbs">
                                        <Link to="">Главная</Link>
                                        <span className="item-trig"></span>
                                        <span>Акции</span>
                                    </div>

                                    <div className="title-page-cat">
                                        <div className="title">Акции</div>
                                    </div>


                                    <div className="bar-filters">

                                        <div className="filter-options">

                                            <div className="filter-options-item filter-categori">
                                                <div className="filter-options-title">
                                                    <Link data-toggle="collapse" href="#demo1">Категория<i
                                                        className="fa fa-chevron-down"></i></Link>
                                                </div>
                                                <div className="filter-options-content collapse in" id="demo1">
                                                    <div className="f-o-content-inner">
                                                        <ul>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Обувь</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Футболки и топы</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Худи и толстовки</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Куртки и жилеты</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Брюки и тайтсы</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Шорты</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Аксессуары и снаряжение</label>
                                                            </li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Куртки и жилеты</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Брюки и тайтсы</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Шорты</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Аксессуары и снаряжение</label>
                                                            </li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Худи и толстовки</label></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="filter-options-item filter-brand">
                                                <div className="filter-options-title">
                                                    <Link data-toggle="collapse" href="#demo2"
                                                          className="collapsed">Бренд<i
                                                        className="fa fa-chevron-down"></i></Link>
                                                </div>
                                                <div className="filter-options-content collapse" id="demo2">
                                                    <div className="f-o-content-inner">
                                                        <ul>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Nike</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Adidas</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Levi's</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Puma</label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>Reebok</label></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="filter-options-item filter-price">
                                                <div className="filter-options-title">
                                                    <Link data-toggle="collapse" href="#demo3">Цена<i
                                                        className="fa fa-chevron-down"></i></Link>
                                                </div>
                                                <div className="filter-options-content collapse in" id="demo3">
                                                    <div className="f-o-content-inner">
                                                        <div className="price_slider_wrapper">
                                                            <div data-label-reasult="Цена:" data-min="0"
                                                                 data-max="30000" data-unit="руб."
                                                                 className="slider-range-price ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                                                 data-value-min="1000" data-value-max="13000">
                                                                <div
                                                                    className="ui-slider-range ui-corner-all ui-widget-header"
                                                                    style={{left: 3.33333, width: 40}}></div>
                                                                <span tabIndex="0"
                                                                      className="ui-slider-handle ui-corner-all ui-state-default"
                                                                      style={{left: 3.33333}}></span><span tabIndex="0"
                                                                                                           className="ui-slider-handle ui-corner-all ui-state-default"
                                                                                                           style={{left: 43.3333}}></span>
                                                            </div>
                                                            <div className="price_slider_amount">
                                                                <div className="price_label clearfix">
                                                                    <div className="from">от <span>1000 руб.</span>
                                                                    </div>
                                                                    <div className="to">до <span>13000 руб.</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="filter-options-item filter-color">
                                                <div className="filter-options-title">
                                                    <Link data-toggle="collapse" href="#demo4">Цвет<i
                                                        className="fa fa-chevron-down"></i></Link>
                                                </div>
                                                <div className="filter-options-content collapse in" id="demo4">
                                                    <div className="f-o-content-inner">
                                                        <ul>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input black"></span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input orange"></span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input green"></span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input grey"></span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input red"></span></label></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="filter-options-item filter-size">
                                                <div className="filter-options-title">
                                                    <Link data-toggle="collapse" href="#demo5">Размеры<i
                                                        className="fa fa-chevron-down"></i></Link>
                                                </div>
                                                <div className="filter-options-content collapse in" id="demo5">
                                                    <div className="f-o-content-inner clearfix">
                                                        <ul>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>37<span
                                                                className="value">(217)</span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>38<span
                                                                className="value">(79)</span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>39<span
                                                                className="value">(116)</span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>40<span
                                                                className="value">(38)</span></label></li>
                                                        </ul>
                                                        <ul>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>41<span
                                                                className="value">(179)</span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>42<span
                                                                className="value">(283)</span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>43<span
                                                                className="value">(29)</span></label></li>
                                                            <li><label className="inline"><input type="checkbox"/><span
                                                                className="input"></span>44<span
                                                                className="value">(205)</span></label></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="filter-options-item filter-clear">
                                                <button type="reset" className="clear-filters"><span><img
                                                    src="img/icons/cross.png" alt="alt"/></span>Сбросить фильтр
                                                </button>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="viewed-product-list">
                                        <div className="product-list-title">Последние посмотренные</div>
                                        <div className="product-list">

                                            <div className="product">
                                                <Link to="" className="clearfix">
                                                    <div className="image"><img src="img/home/p1.jpg" alt="alt"/></div>
                                                    <div className="product-descr">
                                                        <div className="title">Кожанные ботинки</div>
                                                        <div className="price">4 408.00 руб.</div>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="product">
                                                <Link to="" className="clearfix">
                                                    <div className="image"><img src="img/home/p2.jpg" alt="alt"/></div>
                                                    <div className="product-descr">
                                                        <div className="title">Белые спортивные кеды Adidas</div>
                                                        <div className="price">4 408.00 руб.</div>
                                                        <del>4 408.00 руб.</del>
                                                    </div>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <section className="slider-product-5 block-recent-view equal-container">
                        <div className="container">
                            <div className="title-section">
                                <h2>Похожие предложения</h2>
                            </div>
                            <div className="share-row owl-carousell owl-carousel owl-loaded owl-drag initialized"
                                 data-nav="true" data-dots="false" data-loop="true" data-autoplay="false"
                                 data-responsive="{&quot;0&quot;:{&quot;items&quot;:1},&quot;570&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;992&quot;:{&quot;items&quot;:4},&quot;1260&quot;:{&quot;items&quot;:5, &quot;magrin&quot;:10}}">


                                <div className="owl-stage-outer">
                                    <div className="owl-stage"
                                         style={{
                                             transform: `translate3d(-1200px, 0px, 0px)`,
                                             transition: `all 0s ease 0s`,
                                             width: 3840
                                         }}>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product new-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img src="img/items/1123.jpg"
                                                                                                alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Ноутбук Asus X540LJ-XX569D 15.6
                                                        "/i3 5005U/4 ГБ/500</Link>
                                                </div>
                                                <div className="stick">Новинка</div>
                                                <span className="new-price">8 790 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product share-product equal-elem"
                                                 style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a222.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Телевизор LED Haier 32"
                                                        LE32B8500T</Link>
                                                </div>
                                                <div className="stick">-25%</div>
                                                <span className="new-price">6 690 руб.</span>
                                                <span className="old-price">3 780 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a223.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Монитор Viewsonic 23.8"
                                                        VX2476-SMHD Серебристый</Link>
                                                </div>
                                                <span className="new-price">3 790 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product share-product equal-elem"
                                                 style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/Военная-мужская-куртка-военный-стиль-куртки-для-мужчин-армейские-куртки-и-пальто-Chaqueta-Hombre-Veste-Homme.jpg"
                                                    alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <div className="stick">-50%</div>
                                                <span className="new-price">3 790 руб.</span>
                                                <span className="old-price">3 780 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product share-product equal-elem"
                                                 style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a22.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <div className="stick">-13%</div>
                                                <span className="new-price">25 490 руб.</span>
                                                <span className="old-price">23 780 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item active item-first" style={{width: 240}}>
                                            <div className="item-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a22.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <span className="new-price">25 490 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item active item-last" style={{width: 240}}>
                                            <div className="item-product new-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img src="img/items/1123.jpg"
                                                                                                alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Ноутбук Asus X540LJ-XX569D 15.6
                                                        "/i3 5005U/4 ГБ/500</Link>
                                                </div>
                                                <div className="stick">Новинка</div>
                                                <span className="new-price">8 790 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 240}}>
                                            <div className="item-product share-product equal-elem"
                                                 style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a222.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Телевизор LED Haier 32"
                                                        LE32B8500T</Link>
                                                </div>
                                                <div className="stick">-25%</div>
                                                <span className="new-price">6 690 руб.</span>
                                                <span className="old-price">3 780 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 240}}>
                                            <div className="item-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a223.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Монитор Viewsonic 23.8"
                                                        VX2476-SMHD Серебристый</Link>
                                                </div>
                                                <span className="new-price">3 790 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item active item-last" style={{width: 240}}>
                                            <div className="item-product share-product equal-elem"
                                                 style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/Военная-мужская-куртка-военный-стиль-куртки-для-мужчин-армейские-куртки-и-пальто-Chaqueta-Hombre-Veste-Homme.jpg"
                                                    alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <div className="stick">-50%</div>
                                                <span className="new-price">3 790 руб.</span>
                                                <span className="old-price">3 780 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: 240}}>
                                            <div className="item-product share-product equal-elem"
                                                 style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a22.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <div className="stick">-13%</div>
                                                <span className="new-price">25 490 руб.</span>
                                                <span className="old-price">23 780 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a22.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <span className="new-price">25 490 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product new-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img src="img/items/1123.jpg"
                                                                                                alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Ноутбук Asus X540LJ-XX569D 15.6
                                                        "/i3 5005U/4 ГБ/500</Link>
                                                </div>
                                                <div className="stick">Новинка</div>
                                                <span className="new-price">8 790 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product share-product equal-elem"
                                                 style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a222.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Телевизор LED Haier 32"
                                                        LE32B8500T</Link>
                                                </div>
                                                <div className="stick">-25%</div>
                                                <span className="new-price">6 690 руб.</span>
                                                <span className="old-price">3 780 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/258b7345758439.5845735e75a223.jpg" alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Монитор Viewsonic 23.8"
                                                        VX2476-SMHD Серебристый</Link>
                                                </div>
                                                <span className="new-price">3 790 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product share-product equal-elem"
                                                 style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img
                                                    src="img/items/Военная-мужская-куртка-военный-стиль-куртки-для-мужчин-армейские-куртки-и-пальто-Chaqueta-Hombre-Veste-Homme.jpg"
                                                    alt="alt"/></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <div className="stick">-50%</div>
                                                <span className="new-price">3 790 руб.</span>
                                                <span className="old-price">3 780 руб.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav">
                                    <div className="owl-prev"><i className="fa fa-angle-left"></i></div>
                                    <div className="owl-next"><i className="fa fa-angle-right"></i></div>
                                </div>
                                <div className="owl-dots disabled"></div>
                            </div>
                        </div>
                    </section>


                    <div className="container white-fone">
                        <section className="slider-brands">
                            <div className="title-section">
                                <h2>Популярные бренды</h2>
                            </div>

                            <div className="owl-carousell owl-carousel owl-loaded owl-drag initialized" data-margin="15"
                                 data-nav="true" data-dots="false" data-loop="false"
                                 data-responsive="{&quot;0&quot;:{&quot;items&quot;:1},&quot;570&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;992&quot;:{&quot;items&quot;:4},&quot;1260&quot;:{&quot;items&quot;:5, &quot;magrin&quot;:10}}">


                                <div className="owl-stage-outer">
                                    <div className="owl-stage"
                                         style={{
                                             transform: `translate3d(0px, 0px, 0px)`,
                                             transition: `all 0s ease 0s`,
                                             width: 1944
                                         }}>
                                        <div className="owl-item active item-first"
                                             style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig.png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active item-last"
                                             style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (1).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active"
                                             style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (2).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active"
                                             style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (3).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active item-last"
                                             style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (4).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item"
                                             style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (5).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item"
                                             style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (6).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item"
                                             style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (7).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav">
                                    <div className="owl-prev disabled"><i className="fa fa-angle-left"></i></div>
                                    <div className="owl-next"><i className="fa fa-angle-right"></i></div>
                                </div>
                                <div className="owl-dots disabled"></div>
                            </div>
                        </section>
                    </div>

                </div>
            </Wrapper>
        );
    }
}

export default Shares;