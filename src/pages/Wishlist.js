import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class Wishlist extends Component {
    render() {
        return (
            <Wrapper>
                <div className="content-page">

                    <div className="container">

                        <div className="breadcrumbs">
                            <Link to="">Главная</Link>
                            <span className="item-trig"></span>
                            <span>Отложенные</span>
                        </div>

                        <div className="title-page-cat">
                            <div className="title">Отложенные</div>
                        </div>

                        <div className="wishlist-content">

                            <div className="wishlist-sort">
                                <span>Сортировать:</span>
                                <Link to="" className="active">по дате добавления</Link>
                                <Link to="">по цене</Link>
                            </div>

                            <div className="wish-product clearfix">
                                <div className="wish-product-image">
                                    <Link to="" className="link-js-inited"><img src="img/items/1123.jpg" alt="alt" /></Link>
                                </div>
                                <div className="wish-product-options clearfix">
                                    <div className="wish-product-descr">
                                        <div className="title"><h3><Link to="product.html">Куртка от Lavel-Frame
                                            (черная)</Link></h3></div>
                                        <div className="type-cat">Куртки / куртки на осень</div>
                                        <ul className="haract">
                                            <li>Производитель: Strellson</li>
                                            <li>Цвет:
                                                <span className="color-type black tooltip">
											<span className="tooltip-label">Черынй</span>
										</span>
                                                <span className="color-type orange tooltip">
											<span className="tooltip-label">Оранжевый</span>
										</span>
                                                <span className="color-type red tooltip">
											<span className="tooltip-label">Красный</span>
										</span>
                                                <span className="color-type brown tooltip">
											<span className="tooltip-label">Коричневый</span>
										</span>
                                            </li>
                                            <li>Застежка: кнопки, молния</li>
                                            <li>Размер: 46, 48, 50, 52, 54, 56, 58, 60 (RU)</li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div className="wish-product-cart-to-price">
                                        <div className="price">8 560 руб.</div>
                                        <Link to="" className="btn-cart">Добавить в корзину</Link>
                                    </div>
                                </div>

                                <Link to="" className="action-remove tooltip">
                                    <span className="tooltip-label">Удалить</span>
                                    <span><img src="img/icons/cross.png" alt="alt" /></span>
                                </Link>
                            </div>

                            <div className="wish-product clearfix">
                                <div className="wish-product-image">
                                    <Link to="" className="link-js-inited"><img
                                        src="img/items/258b7345758439.5845735e75a223.jpg" alt="alt" /></Link>
                                </div>
                                <div className="wish-product-descr">
                                    <div className="title"><h3><Link to="product.html">Classic leather solids Italy pack
                                        white</Link></h3></div>
                                    <div className="type-cat">Куртки / куртки на осень</div>
                                    <ul className="haract">
                                        <li>Производитель: Strellson</li>
                                        <li>Цвет:
                                            <span className="color-type black tooltip">
										<span className="tooltip-label">Черынй</span>
									</span>
                                            <span className="color-type orange tooltip">
										<span className="tooltip-label">Оранжевый</span>
									</span>
                                            <span className="color-type red tooltip">
										<span className="tooltip-label">Красный</span>
									</span>
                                            <span className="color-type brown tooltip">
										<span className="tooltip-label">Коричневый</span>
									</span>
                                        </li>
                                        <li>Застежка: кнопки, молния</li>
                                        <li>Размер: 46, 48, 50, 52, 54, 56, 58, 60 (RU)</li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="wish-product-cart-to-price">
                                    <div className="price">8 560 руб.</div>
                                    <Link to="" className="btn-cart">Добавить в корзину</Link>
                                </div>
                                <Link to="" className="action-remove tooltip">
                                    <span className="tooltip-label">Удалить</span>
                                    <span><img src="img/icons/cross.png" alt="alt" /></span>
                                </Link>
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
                                         style={{transform: `translate3d(-1200px, 0px, 0px)`, transition: `all 0s ease 0s`, width: 3840}}>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product new-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img src="img/items/1123.jpg"
                                                                                                alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a222.jpg" alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a223.jpg" alt="alt" /></Link>
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
                                                    alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a22.jpg" alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a22.jpg" alt="alt" /></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <span className="new-price">25 490 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 240}}>
                                            <div className="item-product new-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img src="img/items/1123.jpg"
                                                                                                alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a222.jpg" alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a223.jpg" alt="alt" /></Link>
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
                                                    alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a22.jpg" alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a22.jpg" alt="alt" /></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Classic leather solids</Link>
                                                </div>
                                                <span className="new-price">25 490 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product new-product equal-elem" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img src="img/items/1123.jpg"
                                                                                                alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a222.jpg" alt="alt" /></Link>
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
                                                    src="img/items/258b7345758439.5845735e75a223.jpg" alt="alt" /></Link>
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
                                                    alt="alt" /></Link>
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
                                         style={{transform: `translate3d(0px, 0px, 0px)`, transition: `all 0s ease 0s`, width: 1944}}>
                                        <div className="owl-item active item-first"
                                             style={{width: 228, margin_right: 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig.png" alt="alt" />
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 228, margin_right: 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (1).png" alt="alt" />
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 228, margin_right: 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (2).png" alt="alt" />
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{width: 228, margin_right: 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (3).png" alt="alt" />
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item active item-last"
                                             style={{width: 228, margin_right: 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (4).png" alt="alt" />
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: 228, margin_right: 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (5).png" alt="alt" />
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: 228, margin_right: 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (6).png" alt="alt" />
                                                <Link to=""></Link>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{width: 228, margin_right: 15}}>
                                            <div className="brand-wrapper">
                                                <img src="img/brands/orig (7).png" alt="alt" />
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

export default Wishlist;