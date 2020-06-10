import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class Zakaz3 extends Component {
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
                                <div className="stage active"><Link to="zakaz-3.html"><span>Способ оплаты</span></Link>
                                </div>
                                <div className="stage"><Link to="zakaz-4.html"><span>Проверка заказа</span></Link></div>
                            </div>

                            <div className="stage-body">

                                <form action="" className="wrapper-box-z">

                                    <div className="select-box-zak">
                                        <div className="descr-label">Способ оплаты:</div>
                                        <div className="content-label">
                                            <div className="jq-selectbox jqselect sorter-options form-control"><select
                                                className="sorter-options form-control"
                                                data-placeholder="Выберите способ оплаты" required="">
                                                <option></option>
                                                <option className="st-type">Банковской картой</option>
                                                <option className="qiwiwallet">Qiwi wallet</option>
                                                <option className="ehbm">Яндекс деньги</option>
                                                <option className="webmoney">WebMoney</option>
                                            </select>
                                                <div className="jq-selectbox__select">
                                                    <div className="jq-selectbox__select-text placeholder"
                                                         style={{width: 233}}>Выберите способ оплаты
                                                    </div>
                                                    <div className="jq-selectbox__trigger">
                                                        <div className="jq-selectbox__trigger-arrow"></div>
                                                    </div>
                                                </div>
                                                <div className="jq-selectbox__dropdown" style={{display: `none`}}>
                                                    <ul>
                                                        <li className="selected sel" style={{display: `none`}}></li>
                                                        <li data-jqfs-class="st-type" className=" st-type"
                                                            style={{}}>Банковской картой
                                                        </li>
                                                        <li data-jqfs-class="qiwiwallet" className=" qiwiwallet"
                                                            style={{}}>Qiwi wallet
                                                        </li>
                                                        <li data-jqfs-class="ehbm" className=" ehbm" style={{}}>Яндекс
                                                            деньги
                                                        </li>
                                                        <li data-jqfs-class="webmoney" className=" webmoney"
                                                            style={{}}>WebMoney
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="footer-form">
                                        <Link to="zakaz-4.html" className="btn-form-z">Продолжить</Link>
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

export default Zakaz3;