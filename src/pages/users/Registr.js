// import React, {Component} from 'react';
// import Wrapper from "../../components/Wrapper";
// import {Link} from "react-router-dom";
// import {connect} from "react-redux";
// import {axiosRegistr} from "../../store/actions/registr";
//
//
// class Registr extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//             email: "",
//             role: "",
//         }
//     }
//
//     componentDidMount() {
//         this.props.fetchUser();
//         this.props.fetchRegister();
//     }
//
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state)
//     };
//
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     };
//
//     handleClick = () => {
//         // this.props.fetchUserCreate(this.state);
//         this.props.fetchRegister(this.state);
//     }
//
//     render() {
//         return (
//             <Wrapper>
//                 <div className="content-page">
//
//                     <div className="container">
//
//                         <div className="breadcrumbs">
//                             <Link to="">Главная</Link>
//                             <span className="item-trig"></span>
//                             <span>Регистрация</span>
//                         </div>
//
//                         <div className="row">
//                             <div
//                                 className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
//                                 <h5 className="title-login">Регистрация</h5>
//                                 <p className="p-title-login">Персональная информация</p>
//                                 <form className="register" method="post">
//                                     <p className="form-row form-row-wide col-sm-6 padding-left">
//                                         <label>Имя<span className="required">*</span></label>
//                                         <input type="text" value="" name="text" placeholder="Имя"
//                                                className="input-text" />
//                                     </p>
//                                     <p className="form-row form-row-wide col-sm-6 padding-right">
//                                         <label>Фамилия<span className="required">*</span></label>
//                                         <input type="text" value="" name="text" placeholder="Фамилия"
//                                                className="input-text" />
//                                     </p>
//                                     <p className="form-row form-row-wide">
//                                         <label>Роль<span className="required"></span></label>
//                                         <input type="text" name="text" placeholder="Роль" className="input-text" />
//                                     </p>
//                                     <p className="form-row form-row-wide">
//                                         <label>E-mail адрес<span className="required">*</span></label>
//                                         <input type="email" name="email" placeholder="Ваш е-mail адрес"
//                                                className="input-text" />
//                                     </p>
//                                     <ul>
//                                         <li><p className="p-zak">В соответствии с Федеральным законом от 07.02.2017 N
//                                             13-ФЗ "О персональных данных" Вам необходимо подвтердить свое согласие на
//                                             обработку своих перональных данных</p></li>
//                                     </ul>
//                                     <p className="form-row">
//                                         <input type="submit" value="Зарегистрироваться" name="submit"
//                                                className="button-submit" />
//                                     </p>
//                                 </form>
//                             </div>
//                         </div>
//
//                     </div>
//
//                 </div>
//             </Wrapper>
//         );
//     }
// }
// const mapStateToProps = (state) => ({
//     registr: state.registr.registr,
// });
//
//
// const mapDispatchToProps = {
//     axiosRegistr
// };
//
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Registr);
