import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {


    render() {
        return (
            <footer id="my-footer">
                <footer className="site-footer">

                    <div className="footer-top full-width">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-7">
                                    <div className="newsletter-title">
                                        <h3 className="h3-newsletter">Подпишитесь на наши новости</h3>
                                        <span
                                            className="span-newsletter">И получите 10% скидку на первую покупку.</span>
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="newsletter-form">
                                        <form className="form subscribe">
                                            <div className="control">
                                                <input type="email" placeholder="Ваш e-mail" id="newsletter"
                                                       name="email" className="input-subscribe"/>
                                                <button type="submit" title="Отправить"
                                                        className="btn subscribe">
                                                    <span>Отправить</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-column equal-container">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-4 col-sm-6 equal-elem" style={{height: 277}}>
                                    <h3 className="title-of-section">О нас</h3>
                                    <div className="contacts">
                                        <p className="contacts-info">Далеко-далеко за словесными горами в стране,
                                            гласных и согласных живут рыбные тексты. Моей но, взгляд точках, семь
                                            заманивший своих, языком несколько образ.</p>
                                        <span className="contacts-info info-address ">г. Москва, Волжский бульвар, дом 38</span>
                                        <span className="contacts-info info-phone">+7 961 457 20 82</span>
                                        <span className="contacts-info info-support">yourwebpixel@gmail.com</span>
                                        <div className="socials">
                                            <Link to="" className="social"><i className="fa fa-twitter"></i></Link>
                                            <Link to="" className="social"><i className="fa fa-facebook"></i></Link>
                                            <Link to="" className="social"><i className="fa fa-vk"></i></Link>
                                            <Link to="" className="social"><i
                                                className="fa fa-instagram"></i></Link>
                                            <Link to="" className="social"><i className="fa fa-vimeo"></i></Link>
                                            <Link to="" className="social"><i className="fa fa-youtube"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-6 equal-elem" style={{height: 277}}>
                                    <div className="links">
                                        <h3 className="title-of-section">Помощь</h3>
                                        <ul>
                                            <li><Link to="">Моя корзина</Link></li>
                                            <li><Link to="">Оплата и доставка</Link></li>
                                            <li><Link to="">Оформление заказа</Link></li>
                                            <li><Link to="">Отслеживание заказа</Link></li>
                                            <li><Link to="">Обмен и возврат</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-6 equal-elem" style={{height: 277}}>
                                    <div className="links">
                                        <h3 className="title-of-section">Информация</h3>
                                        <ul>
                                            <li><Link to="">О компании</Link></li>
                                            <li><Link to="">Вакансии</Link></li>
                                            <li><Link to="">Новости</Link></li>
                                            <li><Link to="">Сотрудничество</Link></li>
                                            <li><Link to="">Контакты</Link></li>
                                            <li><Link to="">Карта сайта</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 equal-elem" style={{height: 277}}>
                                    <div className="links links-ins">
                                        <h3 className="title-of-section">Инстаграмм</h3>
                                        <div className="content-ins">
                                            <Link to=""><img src="img/detail/ins1.jpg" alt="ins1"/></Link>
                                            <Link to=""><img src="img/detail/ins2.jpg" alt="ins2"/></Link>
                                            <Link to=""><img src="img/detail/ins3.jpg" alt="ins3"/></Link>
                                            <Link to=""><img src="img/detail/ins4.jpg" alt="ins4"/></Link>
                                            <Link to=""><img src="img/detail/ins5.jpg" alt="ins5"/></Link>
                                            <Link to=""><img src="img/detail/ins6.jpg" alt="ins6"/></Link>
                                            <Link to=""><img src="img/detail/ins7.jpg" alt="ins7"/></Link>
                                            <Link to=""><img src="img/detail/ins8.jpg" alt="ins8"/></Link>
                                            <Link to=""><img src="img/detail/ins9.jpg" alt="ins9"/></Link>
                                            <Link to=""><img src="img/detail/ins10.jpg" alt="ins10"/></Link>
                                        </div>
                                        <Link to="" className="view-more">Смотреть
                                            все</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-line full-width">
                        <div className="pay-men">
                            <ul className="payment-logo-method">
                                <li className="pm-type-visamastermaestro"></li>
                                <li className="pm-type-qiwiwallet"></li>
                                <li className="pm-type-ehbm"></li>
                                <li className="pm-type-boleto"></li>
                                <li className="pm-type-debitoonline"></li>
                                <li className="pm-type-mercadepago"></li>
                                <li className="pm-type-doku"></li>
                                <li className="pm-type-webmoney"></li>
                                <li className="pm-type-sofort"></li>
                                <li className="pm-type-giropay"></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            © Copyright 2017<span> <strong>Yourlogo</strong></span>. Все права защищены.
                        </div>
                        <div className="container">
                            <div className="expo-t">
                                <Link to=""><img src="img/footer/sample-logo-expo.png" alt="alt"/></Link>
                                <span>Сайт подключен к системе <Link to="">Allmarket.life</Link></span>
                                <span>По вопросам обращаться по телефону  +7 (495) 255-25-25</span>
                                <span>ООО "Эксполайф" Все права защищены.</span>
                            </div>
                        </div>
                    </div>

                </footer>
            </footer>

        );
    }
}

export default Footer;