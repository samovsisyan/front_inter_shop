import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class Zakaz2 extends Component {
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
                                <div className="stage active"><Link to="zakaz-2.html"><span>Адрес доставки</span></Link>
                                </div>
                                <div className="stage"><Link to="zakaz-3.html"><span>Способ оплаты</span></Link></div>
                                <div className="stage"><Link to="zakaz-4.html"><span>Проверка заказа</span></Link></div>
                            </div>

                            <div className="stage-body">

                                <form action="" className="wrapper-box-z form-stage-2">

                                    <div className="select-box-zak">
                                        <div className="descr-label">Имя:</div>
                                        <div className="content-label">
                                            <input type="text" required="" />
                                        </div>
                                    </div>

                                    <div className="select-box-zak">
                                        <div className="descr-label">Фамилия:</div>
                                        <div className="content-label">
                                            <input type="text" required="" />
                                        </div>
                                    </div>

                                    <div className="select-box-zak">
                                        <div className="descr-label">Телефон:</div>
                                        <div className="content-label">
                                            <input type="text" required="" />
                                        </div>
                                        <span className="min-descr">Для подтверждения заказа</span>
                                    </div>

                                    <div className="select-box-zak">
                                        <div className="descr-label">E-mail:</div>
                                        <div className="content-label">
                                            <input type="text" required="" />
                                        </div>
                                        <span className="min-descr">Для получения уведомления</span>
                                    </div>

                                    <div className="select-box-zak">
                                        <div className="descr-label">Улица:</div>
                                        <div className="content-label">
                                            <input type="text" required="" />
                                        </div>
                                    </div>


                                    <div className="spec-cont-z select-box-zak clearfix">
                                        <div className="content-label">Дом:
                                            <input type="text" required="" maxLength="3" />
                                        </div>
                                        <div className="content-label">Кв:
                                            <input type="text" maxLength="3" />
                                        </div>
                                        <div className="content-label">Корп:
                                            <input type="text" maxLength="3" />
                                        </div>
                                    </div>

                                    <div className="footer-form">
                                        <Link to="zakaz-3.html" className="btn-form-z">Продолжить</Link>
                                        <button className="btn-form-z hidden">Продолжить</button>
                                    </div>

                                </form>

                            </div>

                        </div>


                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Zakaz2;