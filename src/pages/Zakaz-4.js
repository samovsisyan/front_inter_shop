import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class Zakaz4 extends Component {
    render() {
        return (
            <Wrapper>
                <div className="content-page">
                    <div className="container">

                        <div className="breadcrumbs">
                            <Link to="">Главная</Link>
                            <span className="item-trig"></span>
                            <span>Корзина</span>
                        </div>

                        <div className="title-page-cat">
                            <div className="title">Оформление заказа</div>
                        </div>

                        <div className="zakaz-stages">

                            <div className="tab-nav-stage">
                                <div className="stage complete"><Link to="zakaz-1.html"><span>Способ получения</span></Link>
                                </div>
                                <div className="stage complete"><Link to="zakaz-2.html"><span>Адрес доставки</span></Link>
                                </div>
                                <div className="stage complete"><Link to="zakaz-3.html"><span>Способ оплаты</span></Link>
                                </div>
                                <div className="stage active"><Link to="zakaz-4.html"><span>Проверка заказа</span></Link>
                                </div>
                            </div>

                            <div className="stage-body">

                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3">

                                        <div className="tot-container">

                                            <div className="product-item clearfix">
                                                <div className="image link-js-inited">
                                                    <img src="img/items/wqewee.jpg" alt="alt" />
                                                </div>
                                                <div className="descr">
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
                                                        <li>
                                                            <span>Количество:</span>
                                                            <span className="product-r">1</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">3 845 руб.</div>
                                                </div>
                                            </div>

                                            <div className="product-item clearfix">
                                                <div className="image link-js-inited">
                                                    <img src="img/items/258b7345758439.5845735e75a223.jpg" alt="alt" />
                                                </div>
                                                <div className="descr">
                                                    <div className="product-name"><Link to="">Smartphone MTK6737 Quad
                                                        Core. Smartphone MTK6737 Quad Core.</Link></div>
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
                                                        <li>
                                                            <span>Количество:</span>
                                                            <span className="product-r">1</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">3 845 руб.</div>
                                                </div>
                                            </div>

                                            <div className="container-options">

                                                <div className="product-spec-wrap__body">
                                                    <h2>Доставка:</h2>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span
                                                                className="product-spec__name-inner">Способ доставки</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span className="product-spec__value-inner">Траспортной компанией</span>
                                                        </dd>
                                                    </dl>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span className="product-spec__name-inner">Компания</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span
                                                                className="product-spec__value-inner">Деловые линии</span>
                                                        </dd>
                                                    </dl>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span
                                                                className="product-spec__name-inner">Пункт Выдачи</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span
                                                                className="product-spec__value-inner">г. Ставрополь</span>
                                                        </dd>
                                                    </dl>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span
                                                                className="product-spec__name-inner">Адрес выдачи</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span className="product-spec__value-inner">Ставрополь, ул. Комсомольская 1</span>
                                                        </dd>
                                                    </dl>
                                                    <div className="mas-p">Стоимость доставки из магазина до траспортной
                                                        компании:<br /> Москва - <span className="grey-t">300 руб</span>,
                                                        Московская область - <span
                                                            className="grey-t">30 руб.</span> за 1 км.</div>
                                                    <div className="mas-p">Стоимость услуг по доставке до вашего
                                                        населенного пункта вы можете узнать на официальном <Link
                                                            to="https://www.dellin.ru/">сайте</Link> компании или
                                                        позвониnm по телефону <span
                                                            className="phone">8 800 100–8000</span></div>
                                                </div>

                                                <div className="product-spec-wrap__body">
                                                    <h2>Контактные данные:</h2>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span className="product-spec__name-inner">ФИО:</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span className="product-spec__value-inner">Иванов Иван Иванович</span>
                                                        </dd>
                                                    </dl>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span className="product-spec__name-inner">Город</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span
                                                                className="product-spec__value-inner">Ставрополь</span>
                                                        </dd>
                                                    </dl>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span className="product-spec__name-inner">Адрес</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span className="product-spec__value-inner">Ставрополь, ул. Ленинградская д. 54 кв. 8 </span>
                                                        </dd>
                                                    </dl>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span className="product-spec__name-inner">Телефон</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span className="product-spec__value-inner">+7 (961) 457 20-82</span>
                                                        </dd>
                                                    </dl>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span className="product-spec__name-inner">E-mail</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span
                                                                className="product-spec__value-inner">yourwebpixel@gmail.com</span>
                                                        </dd>
                                                    </dl>
                                                </div>

                                                <div className="product-spec-wrap__body">
                                                    <h2>Способ оплаты:</h2>
                                                    <dl className="product-spec clearfix">
                                                        <dt className="product-spec__name">
                                                            <span className="product-spec__name-inner">Оплата</span>
                                                        </dt>
                                                        <dd className="product-spec__value">
                                                            <span className="product-spec__value-inner">Банковской картой</span>
                                                        </dd>
                                                    </dl>
                                                </div>

                                            </div>

                                            <div className="total-summ">
                                                <span className="title">Итого</span>
                                                <div className="checkout-element-content">
                                                    <span
                                                        className="order-left">Итого:<span>24 000.00 руб.</span></span>
                                                    <span
                                                        className="order-left">Доставка:<span>300.00 руб.</span></span>
                                                    <span
                                                        className="order-left">Всего:<span>24 300.00 руб.</span></span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                                <button className="btn-form-z">Приступить к оплате</button>

                            </div>

                        </div>


                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Zakaz4;