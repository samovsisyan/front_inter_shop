import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class Latest extends Component {
    render() {
        return (
            <Wrapper>
                <div className="content-page">

                    <div className="latest-baaners-top">

                        <div className="container">

                            <div className="row">
                                <div className="col-md-8">

                                    <div
                                        className="slider-latest owl-carousell owl-carousel owl-loaded owl-drag initialized"
                                        data-nav="false" data-dots="true" data-loop="true" data-items="1"
                                        data-smart-speed="1100">


                                        <div className="owl-stage-outer">
                                            <div className="owl-stage"
                                                 style={{
                                                     transform: `translate3d(-1580px, 0px, 0px)`,
                                                     transition: `all 0s ease 0s`,
                                                     width: 5530
                                                 }}>
                                                <div className="owl-item cloned" style={{width: 790}}>
                                                    <div className="slider">
                                                        <Link to=""><img src="img/sliders/slider-3.jpg" alt=""/></Link>
                                                        <div className="box-slider">
                                                            <div className="pre-title">Все для вашего удовольствия</div>
                                                            <div className="title">Новые коллекции</div>
                                                            <Link to href="" className="btn-sli">Подробнее</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item cloned" style={{width: 790}}>
                                                    <div className="slider">
                                                        <Link to=""><img src="img/sliders/slider-333.jpg"
                                                                         alt=""/></Link>
                                                        <div className="box-slider">
                                                            <div className="pre-title">Все для вашего удовольствия</div>
                                                            <div className="title">Новые коллекции</div>
                                                            <Link to href="" className="btn-sli">Подробнее</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item cloned" style={{width: 790}}>
                                                    <div className="slider">
                                                        <Link to=""><img src="img/sliders/slider-1.jpg" alt=""/></Link>
                                                        <div className="box-slider">
                                                            <div className="pre-title">Все для вашего удовольствия</div>
                                                            <div className="title">Новые коллекции</div>
                                                            <Link to href="" className="btn-sli">Подробнее</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item cloned" style={{width: 790}}>
                                                    <div className="slider">
                                                        <Link to=""><img src="img/sliders/slider-3.jpg" alt=""/></Link>
                                                        <div className="box-slider">
                                                            <div className="pre-title">Все для вашего удовольствия</div>
                                                            <div className="title">Новые коллекции</div>
                                                            <Link to href="" className="btn-sli">Подробнее</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item cloned" style={{width: 790}}>
                                                    <div className="slider">
                                                        <Link to=""><img src="img/sliders/slider-333.jpg"
                                                                         alt=""/></Link>
                                                        <div className="box-slider">
                                                            <div className="pre-title">Все для вашего удовольствия</div>
                                                            <div className="title">Новые коллекции</div>
                                                            <Link to href="" className="btn-sli">Подробнее</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item cloned" style={{width: 790}}>
                                                    <div className="slider">
                                                        <Link to=""><img src="img/sliders/slider-1.jpg" alt=""/></Link>
                                                        <div className="box-slider">
                                                            <div className="pre-title">Все для вашего удовольствия</div>
                                                            <div className="title">Новые коллекции</div>
                                                            <Link to href="" className="btn-sli">Подробнее</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item cloned" style={{width: 790}}>
                                                    <div className="slider">
                                                        <Link to=""><img src="img/sliders/slider-3.jpg" alt=""/></Link>
                                                        <div className="box-slider">
                                                            <div className="pre-title">Все для вашего удовольствия</div>
                                                            <div className="title">Новые коллекции</div>
                                                            <Link to href="" className="btn-sli">Подробнее</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-nav disabled">
                                            <div className="owl-prev"><i className="fa fa-angle-left"></i></div>
                                            <div className="owl-next"><i className="fa fa-angle-right"></i></div>
                                        </div>
                                        <div className="owl-dots">
                                            <div className="owl-dot active"><span></span></div>
                                            <div className="owl-dot"><span></span></div>
                                            <div className="owl-dot"><span></span></div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-4">
                                    <div className="text-center hover-banner">
                                        <Link to="#"><img className="img-responsive"
                                                          src="img/sliders/5-single-default.jpg"
                                                          alt="" /><span>Баннер</span></Link>
                                        <Link to="#"><img className="img-responsive"
                                                          src="img/sliders/8-single-default.jpg"
                                                          alt="" /><span>Баннер</span></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container">

                        <div className="latest-content">

                            <div className="mixitup-control-block clearfix">
                                <div className="title-latest">
                                    Новинки
                                </div>
                                <ul>
                                    <li className="active"><Link to="">Все новинки</Link></li>
                                    <li><Link to="">Куртки и жилеты</Link></li>
                                    <li><Link to="">Обувь</Link></li>
                                    <li><Link to="">Футболки и топы</Link></li>
                                    <li><Link to="">Брюки и тайтсы</Link></li>
                                </ul>
                            </div>


                            <div className="row row-first-offset">

                                <div className="col-xs-6 col-md-4 col-lg-3">
                                    <div className="item-product">
                                        <div className="img-product--box">
                                            <Link to="">
                                                <img
                                                    src="img/items/1123.jpg"
                                                    alt="alt"/>
                                            </Link>
                                        </div>
                                        <div className="product-descr">
                                            <div className="product-title">
                                                <Link to="" className="title-share">Куртка от Lavel-Frame
                                                    (черная)</Link>
                                            </div>
                                            <div className="type">Куртки / куртки на осень</div>
                                            <span className="new-price">3 790 р.</span>
                                        </div>
                                        <div className="ad--set">
                                            <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                className="fa fa-heart-o"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-6 col-md-4 col-lg-3">
                                    <div className="item-product">
                                        <div className="img-product--box">
                                            <Link to="">
                                                <img
                                                    src="img/items/1123.jpg"
                                                    alt="alt"/>
                                            </Link>
                                        </div>
                                        <div className="product-descr">
                                            <div className="product-title">
                                                <Link to="" className="title-share">Куртка от Lavel-Frame
                                                    (черная)</Link>
                                            </div>
                                            <div className="type">Куртки / куртки на осень</div>
                                            <span className="new-price">3 790 р.</span>
                                        </div>
                                        <div className="ad--set">
                                            <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                className="fa fa-heart-o"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-6 col-md-4 col-lg-3">
                                    <div className="item-product">
                                        <div className="img-product--box">
                                            <Link to="">
                                                <img
                                                    src="img/items/1123.jpg"
                                                    alt="alt"/>
                                            </Link>
                                        </div>
                                        <div className="product-descr">
                                            <div className="product-title">
                                                <Link to="" className="title-share">Куртка от Lavel-Frame
                                                    (черная)</Link>
                                            </div>
                                            <div className="type">Куртки / куртки на осень</div>
                                            <span className="new-price">3 790 р.</span>
                                        </div>
                                        <div className="ad--set">
                                            <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                className="fa fa-heart-o"></i></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xs-6 col-md-4 col-lg-3">
                                    <div className="item-product">
                                        <div className="img-product--box">
                                            <Link to="">
                                                <img
                                                    src="img/items/1123.jpg"
                                                    alt="alt"/>
                                            </Link>
                                        </div>
                                        <div className="product-descr">
                                            <div className="product-title">
                                                <Link to="" className="title-share">Куртка от Lavel-Frame
                                                    (черная)</Link>
                                            </div>
                                            <div className="type">Куртки / куртки на осень</div>
                                            <span className="new-price">3 790 р.</span>
                                        </div>
                                        <div className="ad--set">
                                            <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                className="fa fa-heart-o"></i></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xs-6 col-md-4 col-lg-3">
                                    <div className="item-product">
                                        <div className="img-product--box">
                                            <Link to="">
                                                <img
                                                    src="img/items/1123.jpg"
                                                    alt="alt"/>
                                            </Link>
                                        </div>
                                        <div className="product-descr">
                                            <div className="product-title">
                                                <Link to="" className="title-share">Куртка от Lavel-Frame
                                                    (черная)</Link>
                                            </div>
                                            <div className="type">Куртки / куртки на осень</div>
                                            <span className="new-price">3 790 р.</span>
                                        </div>
                                        <div className="ad--set">
                                            <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                className="fa fa-heart-o"></i></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xs-6 col-md-4 col-lg-3">
                                    <div className="item-product">
                                        <div className="img-product--box">
                                            <Link to="">
                                                <img
                                                    src="img/items/1123.jpg"
                                                    alt="alt"/>
                                            </Link>
                                        </div>
                                        <div className="product-descr">
                                            <div className="product-title">
                                                <Link to="" className="title-share">Куртка от Lavel-Frame
                                                    (черная)</Link>
                                            </div>
                                            <div className="type">Куртки / куртки на осень</div>
                                            <span className="new-price">3 790 р.</span>
                                        </div>
                                        <div className="ad--set">
                                            <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                className="fa fa-heart-o"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-6 col-md-4 col-lg-3">
                                    <div className="item-product">
                                        <div className="img-product--box">
                                            <Link to="">
                                                <img
                                                    src="img/items/1123.jpg"
                                                    alt="alt"/>
                                            </Link>
                                        </div>
                                        <div className="product-descr">
                                            <div className="product-title">
                                                <Link to="" className="title-share">Куртка от Lavel-Frame
                                                    (черная)</Link>
                                            </div>
                                            <div className="type">Куртки / куртки на осень</div>
                                            <span className="new-price">3 790 р.</span>
                                        </div>
                                        <div className="ad--set">
                                            <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                className="fa fa-heart-o"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-6 col-md-4 col-lg-3">
                                    <div className="item-product">
                                        <div className="img-product--box">
                                            <Link to="">
                                                <img
                                                    src="img/items/1123.jpg"
                                                    alt="alt"/>
                                            </Link>
                                        </div>
                                        <div className="product-descr">
                                            <div className="product-title">
                                                <Link to="" className="title-share">Куртка от Lavel-Frame
                                                    (черная)</Link>
                                            </div>
                                            <div className="type">Куртки / куртки на осень</div>
                                            <span className="new-price">3 790 р.</span>
                                        </div>
                                        <div className="ad--set">
                                            <Link to="#" className="fa-heart-like" title="В избранное"><i
                                                className="fa fa-heart-o"></i></Link>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <Link className="button button-more" role="button"><span
                                className="button__text">Показать еще</span></Link>

                        </div>

                        <section className="news-the-blog equal-container">
                            <div className="title-of-section">Новости</div>
                            <div
                                className="nav-style owl-carousell owl-carousel owl-theme owl-loaded owl-drag initialized"
                                data-nav="true" data-autoplay="false" data-dots="false" data-loop="true"
                                data-margin="30"
                                data-responsive="{&quot;0&quot;:{&quot;items&quot;:1},&quot;768&quot;:{&quot;items&quot;:2},&quot;992&quot;:{&quot;items&quot;:3}}">


                                <div className="owl-stage-outer">
                                    <div className="owl-stage"
                                         style={{
                                             transform: `translate3d(-1230px, 0px, 0px)`,
                                             transition: `all 0s ease 0s`,
                                             width: 4100
                                         }}>
                                        <div className="owl-item cloned" style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img
                                                        src="img/home/girl-in-leather-jacket-1442097_640.jpg"
                                                        alt="news2"/></Link>
                                                    <span className="date">2017<span>Фев 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img src="img/home/lake-691726_640.jpg"
                                                                     alt="news2"/></Link>
                                                    <span className="date">2017<span>Дек 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img src="img/home/zip-656132_640.jpg"
                                                                     alt="news2"/></Link>
                                                    <span className="date">2017<span>Авг 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item active item-first"
                                             style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img src="img/home/converse-1853345_640.jpg"
                                                                     alt="news2"/></Link>
                                                    <span className="date">2017<span>Янв 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img
                                                        src="img/home/girl-in-leather-jacket-1442097_640.jpg"
                                                        alt="news2"/></Link>
                                                    <span className="date">2017<span>Фев 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item active item-last"
                                             style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img src="img/home/lake-691726_640.jpg"
                                                                     alt="news2"/></Link>
                                                    <span className="date">2017<span>Дек 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img src="img/home/zip-656132_640.jpg"
                                                                     alt="news2"/></Link>
                                                    <span className="date">2017<span>Авг 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img src="img/home/converse-1853345_640.jpg"
                                                                     alt="news2"/></Link>
                                                    <span className="date">2017<span>Янв 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img
                                                        src="img/home/girl-in-leather-jacket-1442097_640.jpg"
                                                        alt="news2"/></Link>
                                                    <span className="date">2017<span>Фев 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 380, "margin-right": 30}}>
                                            <div className="news-item">
                                                <div className="post-thumb">
                                                    <Link to=""><img src="img/home/lake-691726_640.jpg"
                                                                     alt="news2"/></Link>
                                                    <span className="date">2017<span>Дек 06</span></span>
                                                </div>
                                                <div className="post-item-info">
                                                    <h3 className="post-name equal-elem" style={{height: 70}}><Link
                                                        to="">Далеко-далеко за словесными горами в стране, гласных и
                                                        согласных живут.</Link></h3>
                                                </div>
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
                        </section>

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
                                        <div className="owl-item active" style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (1).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (2).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 228, "margin-right": 15}}>
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
                                        <div className="owl-item" style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (5).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: 228, "margin-right": 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (6).png" alt="alt"/>
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: 228, "margin-right": 15}}>
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

export default Latest;