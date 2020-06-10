import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class MyCart extends Component {
    render() {
        return (
            <Wrapper>
                <div id="my-content">
                    <div className="content-page">
                        <div className="container">

                            <div className="breadcrumbs">
                                <Link to="">Главная</Link>
                                <span className="item-trig"></span>
                                <span>Корзина</span>
                            </div>

                            <div className="title-page-cat">
                                <div className="title">Корзина</div>
                            </div>

                            <div className="shopping-cart-page">

                                <form className="form-cart">
                                    <div className="table-cart">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th className="tb-image">Изображение</th>
                                                <th className="tb-product">Наименование</th>
                                                <th className="tb-price">Cтоимость</th>
                                                <th className="tb-qty">Количество</th>
                                                <th className="tb-total">Стоимость (руб.)</th>
                                                <th className="tb-remove"></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="dec-height"></tr>
                                            <tr>
                                                <td className="tb-image"><Link to="" className="item-photo"><img
                                                    src="img/cart/cart1.jpg" alt="cart" /></Link></td>
                                                <td className="tb-product">
                                                    <div className="product-name"><Link to="">Smartphone MTK6737 Quad
                                                        Core.</Link></div>
                                                    <ul className="feature">
                                                        <li>
                                                            <span>Цвет:</span>
                                                            <span className="product-color"
                                                                  style={{background_color: `#D1C8C1`}}></span>
                                                        </li>
                                                        <li>
                                                            <span>Размер:</span>
                                                            <span className="product-r">41</span>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="tb-price">
                                                    <span className="price">12 000.00</span>
                                                </td>
                                                <td className="tb-qty">
                                                    <div className="quantity">
                                                        <div className="buttons-added">
                                                            <Link to="#" className="sign minus"><i
                                                                className="fa fa-minus"></i></Link>
                                                            <input type="text" value="1" title="Qty"
                                                                   className="input-text qty text" size="1" />
                                                            <Link to="#" className="sign plus"><i
                                                                className="fa fa-plus"></i></Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="tb-total">
                                                    <span className="price">12 000.00</span>
                                                </td>
                                                <td className="tb-remove"><Link to="" className="action-remove"
                                                                                title="Удалить"><span><img
                                                    src="img/icons/cross.png" alt="alt" /></span></Link></td>
                                            </tr>
                                            <tr className="dec-height"></tr>
                                            <tr>
                                                <td className="tb-image"><Link to="" className="item-photo"><img
                                                    src="img/cart/cart2.jpg" alt="cart" /></Link>
                                                </td>
                                                <td className="tb-product">
                                                    <div className="product-name"><Link to="">Acer's Aspire S7 is a thin and
                                                        portable laptop</Link></div>
                                                    <ul className="feature">
                                                        <li>
                                                            <span>Цвет:</span>
                                                            <span className="product-color"
                                                                  style={{background_color: `#3F3E3A`}}></span>
                                                        </li>
                                                        <li>
                                                            <span>Размер:</span>
                                                            <span className="product-r">42</span>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="tb-price">
                                                    <span className="price">12 000.00</span>
                                                </td>
                                                <td className="tb-qty">
                                                    <div className="quantity">
                                                        <div className="buttons-added">
                                                            <Link to="#" className="sign minus"><i
                                                                className="fa fa-minus"></i></Link>
                                                            <input type="text" value="1" title="Qty"
                                                                   className="input-text qty text" size="1" />
                                                            <Link to="#" className="sign plus"><i
                                                                className="fa fa-plus"></i></Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="tb-total">
                                                    <span className="price">12 000.00</span>
                                                </td>
                                                <td className="tb-remove"><Link to="" className="action-remove"
                                                                                title="Удалить"><span><img
                                                    src="img/icons/cross.png" alt="alt" /></span></Link></td>
                                            </tr>
                                            <tr className="dec-height"></tr>
                                            </tbody>

                                        </table>
                                    </div>

                                    <div className="cart-actions">
                                        <button type="submit" className="btn-continue"><i
                                            className="fa fa-angle-double-left" aria-hidden="true"></i><span>Вернуться в магазин</span>
                                        </button>
                                        <button type="submit" className="btn-clean"><span>Очистить корзину</span></button>
                                    </div>

                                </form>

                                <div className="row">
                                    <div className="col-md-4">

                                        <div className="shopping-cart-info-content">
                                            <h3>У Вас есть купон?</h3>
                                            <form>
                                                <input type="text" placeholder="Введите номер купона" />
                                                <button type="submit" className="btn-black">Активировать купон</button>
                                            </form>
                                        </div>

                                    </div>
                                    <div className="col-md-4">

                                        <div className="shopping-cart-info-content">
                                            <h3>Стоимость доставки</h3>
                                            <form>
                                                <div className="jq-selectbox jqselect sorter-options form-control"><select
                                                    className="sorter-options form-control" data-placeholder="Страна">
                                                    <option></option>
                                                    <option>Страна_1</option>
                                                    <option>Страна_2</option>
                                                    <option>Страна_3</option>
                                                    <option>Страна_4</option>
                                                </select>
                                                    <div className="jq-selectbox__select">
                                                        <div className="jq-selectbox__select-text placeholder"
                                                             style={{width: 323}}>Страна
                                                        </div>
                                                        <div className="jq-selectbox__trigger">
                                                            <div className="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div className="jq-selectbox__dropdown" style={{display: `none`}}>
                                                        <ul>
                                                            <li className="selected sel" style={{display: `none`}}></li>
                                                            <li style={{}}>Страна_1</li>
                                                            <li style={{}}>Страна_2</li>
                                                            <li style={{}}>Страна_3</li>
                                                            <li style={{}}>Страна_4</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="jq-selectbox jqselect sorter-options form-control"><select
                                                    className="sorter-options form-control" data-placeholder="Регион">
                                                    <option></option>
                                                    <option>Регион_1</option>
                                                    <option>Регион_2</option>
                                                    <option>Регион_3</option>
                                                    <option>Регион_4</option>
                                                </select>
                                                    <div className="jq-selectbox__select">
                                                        <div className="jq-selectbox__select-text placeholder"
                                                             style={{width: 323}}>Регион
                                                        </div>
                                                        <div className="jq-selectbox__trigger">
                                                            <div className="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div className="jq-selectbox__dropdown" style={{display: `none`}}>
                                                        <ul>
                                                            <li className="selected sel" style={{display: `none`}}></li>
                                                            <li style={{}}>Регион_1</li>
                                                            <li style={{}}>Регион_2</li>
                                                            <li style={{}}>Регион_3</li>
                                                            <li style={{}}>Регион_4</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="jq-selectbox jqselect sorter-options form-control"><select
                                                    className="sorter-options form-control" data-placeholder="Город">
                                                    <option></option>
                                                    <option>Город_1</option>
                                                    <option>Город_2</option>
                                                    <option>Город_3</option>
                                                    <option>Город_4</option>
                                                </select>
                                                    <div className="jq-selectbox__select">
                                                        <div className="jq-selectbox__select-text placeholder"
                                                             style={{width: 323}}>Город
                                                        </div>
                                                        <div className="jq-selectbox__trigger">
                                                            <div className="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div className="jq-selectbox__dropdown" style={{display: `none`}}>
                                                        <ul>
                                                            <li className="selected sel" style={{display: `none`}}></li>
                                                            <li style={{}}>Город_1</li>
                                                            <li style={{}}>Город_2</li>
                                                            <li style={{}}>Город_3</li>
                                                            <li style={{}}>Город_4</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn-black">Расчитать доставку</button>
                                            </form>
                                        </div>

                                    </div>
                                    <div className="col-md-4">

                                        <div className="order-summary">
                                            <h4 className="title-shopping-cart">Заказ</h4>
                                            <div className="checkout-element-content">
                                                <span className="order-left">Итого:<span>24 000.00 руб.</span></span>
                                                <span className="order-left">Доставка:<span>Бесплатно</span></span>
                                                <span className="order-left">Всего:<span>24 000.00 руб.</span></span>
                                                <button type="submit" className="btn-checkout">
                                                    <span>Оформить заказ</span>
                                                </button>
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
                                <h2>Похожие товары</h2>
                            </div>
                            <div className="share-row owl-carousell owl-carousel owl-loaded owl-drag initialized"
                                 data-nav="true" data-dots="false" data-loop="true" data-autoplay="false"
                                 data-responsive="{&quot;0&quot;:{&quot;items&quot;:1},&quot;570&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;992&quot;:{&quot;items&quot;:4},&quot;1260&quot;:{&quot;items&quot;:5, &quot;magrin&quot;:10}}">


                                <div className="owl-stage-outer">
                                    <div className="owl-stage"
                                         style={{transform: `translate3d(-1200, 0, 0)`, transition: `all 0s ease 0s`, width: 3840}}>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product equal-elem new-product" style={{height: 360}}>
                                                <Link to="#" className="img-product-inner"><img src="img/items/1123.jpg"
                                                                                                alt="alt" /></Link>
                                                <div className="product-title">
                                                    <Link to="" className="title-share">Ноутбук Asus X540LJ-XX569D 15.6 "/i3
                                                        5005U/4 ГБ/500</Link>
                                                </div>
                                                <div className="stick">Новинка</div>
                                                <span className="new-price">8 790 руб.</span>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{width: 240}}>
                                            <div className="item-product equal-elem share-product" style={{height: 360}}>
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
                                            <div className="item-product equal-elem share-product" style={{height: 360}}>
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
                                            <div className="item-product equal-elem share-product" style={{height: 360}}>
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
                                            <div className="item-product equal-elem share-product" style={{height: 360}}>
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
                                            <div className="item-product equal-elem share-product" style={{height: 360}}>
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
                                            <div className="item-product equal-elem share-product" style={{height: 360}}>
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
                                            <div className="item-product equal-elem share-product" style={{height: 360}}>
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
                </div>
            </Wrapper>
        );
    }
}

export default MyCart;