import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class Zakaz1 extends Component {
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
                                <div className="stage active"><Link to="zakaz-1.html"><span>Способ получения</span></Link>
                                </div>
                                <div className="stage"><Link to="zakaz-2.html"><span>Адрес доставки</span></Link></div>
                                <div className="stage"><Link to="zakaz-3.html"><span>Способ оплаты</span></Link></div>
                                <div className="stage"><Link to="zakaz-4.html"><span>Проверка заказа</span></Link></div>
                            </div>

                            <div className="stage-body">

                                <form action="" className="wrapper-box-z">

                                    <div className="select-box-zak">
                                        <div className="descr-label">Способ доставки:</div>
                                        <div className="content-label">
                                            <div className="jq-selectbox jqselect sorter-options form-control"
                                                 id="type-shipping-styler"><select
                                                className="sorter-options form-control"
                                                data-placeholder="Выберите способ доставки" id="type-shipping"
                                                required="">
                                                <option></option>
                                                <option value="1">Транспортной компанией (межгород)</option>
                                                <option value="3">Доставка на дом (Москава)</option>
                                                <option value="2">Самовывоз (Москва)</option>
                                            </select>
                                                <div className="jq-selectbox__select">
                                                    <div className="jq-selectbox__select-text placeholder">Выберите
                                                        способ доставки
                                                    </div>
                                                    <div className="jq-selectbox__trigger">
                                                        <div className="jq-selectbox__trigger-arrow"></div>
                                                    </div>
                                                </div>
                                                <div className="jq-selectbox__dropdown" style={{display: `none`}}>
                                                    <ul>
                                                        <li className="selected sel" style={{display: `none`}}></li>
                                                        <li style={{}}>Транспортной компанией (межгород)</li>
                                                        <li style={{}}>Доставка на дом (Москава)</li>
                                                        <li style={{}}>Самовывоз (Москва)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-content-z"></div>

                                    <div className="footer-form">
                                        <Link to="zakaz-2.html" className="btn-form-z">Продолжить</Link>
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

export default Zakaz1;