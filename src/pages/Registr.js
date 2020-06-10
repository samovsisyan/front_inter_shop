import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

class Registr extends Component {
    render() {
        return (
            <Wrapper>
                <div className="content-page">

                    <div className="container">

                        <div className="breadcrumbs">
                            <Link to="">Главная</Link>
                            <span className="item-trig"></span>
                            <span>Регистрация</span>
                        </div>

                        <div className="row">
                            <div
                                className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                <h5 className="title-login">Регистрация</h5>
                                <p className="p-title-login">Персональная информация</p>
                                <form className="register" method="post">
                                    <p className="form-row form-row-wide col-sm-6 padding-left">
                                        <label>Имя<span className="required">*</span></label>
                                        <input type="text" value="" name="text" placeholder="Имя"
                                               className="input-text" />
                                    </p>
                                    <p className="form-row form-row-wide col-sm-6 padding-right">
                                        <label>Фамилия<span className="required">*</span></label>
                                        <input type="text" value="" name="text" placeholder="Фамилия"
                                               className="input-text" />
                                    </p>
                                    <p className="form-row form-row-wide">
                                        <label>Отчество<span className="required"></span></label>
                                        <input type="text" name="text" placeholder="Отчество" className="input-text" />
                                    </p>
                                    <p className="form-row form-row-wide">
                                        <label>E-mail адрес<span className="required">*</span></label>
                                        <input type="email" name="email" placeholder="Ваш е-mail адрес"
                                               className="input-text" />
                                    </p>
                                    <ul>
                                        <li><label className="inline"><input type="checkbox" /><span
                                            className="input"></span>Подписаться на наши обновления</label></li>
                                    </ul>
                                    <p className="form-row form-row-wide col-sm-6 padding-left">
                                        <label>Пароль<span className="required"></span></label>
                                        <input type="password" name="password" className="input-text" />
                                    </p>
                                    <p className="form-row form-row-wide col-sm-6 padding-right">
                                        <label>Повторите пароль<span className="required">*</span></label>
                                        <input type="password" name="password" className="input-text" />
                                    </p>
                                    <ul>
                                        <li><p className="p-zak">В соответствии с Федеральным законом от 07.02.2017 N
                                            13-ФЗ "О персональных данных" Вам необходимо подвтердить свое согласие на
                                            обработку своих перональных данных</p></li>
                                        <li><label className="inline"><input type="checkbox" /><span
                                            className="input"></span>Да, я даю разрешение на обработку моих
                                            персоональных данных</label></li>
                                    </ul>
                                    <p className="form-row">
                                        <input type="submit" value="Зарегистрироваться" name="submit"
                                               className="button-submit" />
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </Wrapper>
        );
    }
}

export default Registr;