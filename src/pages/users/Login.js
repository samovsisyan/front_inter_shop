// import React, {Component} from 'react';
// import {Link} from "react-router-dom";
// import {connect} from "react-redux";
// import {axiosLogin} from "../../store/actions/login";
//
// class Login extends Component {
//     componentDidMount() {
//         this.props.axiosLogin();
//     }
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//             token: "",
//         }
//     }
//
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
//
//     };
//
//     handleClick = () => {
//         this.props.axiosLogin(this.state);
//
//     }
//     render() {
//
//         const token = this.props.user.token;
//         console.log("LOGIN this.props.token", token);
//         console.log(this.state);
//         localStorage.setItem('Token', this.props.user.token);
//         const getItem = localStorage.getItem('Token');
//         console.log("local", getItem)
//
//         return (
//
//
//             <div>
//
//                 <div className={`${this.state.openSignIn ? 'mfp-bg mfp-fade mfp-ready '
//                     : 'mfp-bg mfp-fade mfp-ready mfp-removing' ? "mfp-bg mfp-fade mfp-ready mfp-removing" : ""}`}></div>
//
//
//                 <div className={`${this.state.openSignIn ?
//                     'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready '
//                     : 'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready mfp-removing'
//                         ? 'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready mfp-removing' : "" } `}
//                      tabIndex="-1"
//                      style={{overflow: `hidden auto`}}>
//
//
//                     <div className="mfp-container mfp-s-ready mfp-inline-holder">
//                         <div onClick={this.toggelSignIn} className="mfp-content">
//                             <button onClick={this.toggelSignIn}
//                                     className="mfp-close">Click</button>
//                             <div className="modal" id="sign_in">
//                                 <div className="modal-dialog">
//                                     <div className="modal-content">
//                                         <div className="modal-header">
//                                             <div className="reg-title">Впервые у нас?<Link
//                                                 to="/registr">Зарегистрироваться</Link></div>
//                                         </div>
//                                         <div className="modal-body">
//                                             <form id="sigh_in_form">
//                                                 <p className="form-row form-row-wide">
//                                                     <label>Name<span className="required"></span></label>
//                                                     <input type="text" value=""
//                                                            name="username"
//                                                            placeholder="Ваш Name" className="input-text"
//                                                            onChange={e => this.handleChange(e)}
//                                                            value={this.state.username}
//                                                     />
//                                                 </p>
//                                                 <p className="form-row form-row-wide">
//                                                     <label>Пароль<span className="required"></span></label>
//                                                     <input type="password"
//                                                            name="password" placeholder="Ваш пароль"
//                                                            className="input-text"
//                                                            onChange={e => this.handleChange(e)}
//                                                            value={this.state.password}
//                                                     />
//                                                 </p>
//                                                 <p className="form-row form-button clearfix">
//                                                     <label className="inline"><input type="checkbox"/><span
//                                                         className="input"></span>Запомнить меня</label>
//                                                     <button type="submit"
//                                                             className="btn-submit"
//                                                             onClick={this.handleClick}>
//                                                         Войти</button>
//                                                 </p>
//                                                 <Link to="#" className="return-pass">Забыли пароль?</Link>
//                                             </form>
//                                         </div>
//                                         <div className="modal-footer">
//                                             <div className="social-title">Войти с помощью</div>
//                                             <div className="socials">
//                                                 <Link to="" className="social"><i
//                                                     className="fa fa-twitter"></i></Link>
//                                                 <Link to="" className="social"><i
//                                                     className="fa fa-facebook"></i></Link>
//                                                 <Link to="" className="social"><i className="fa fa-vk"></i></Link>
//                                                 <Link to="" className="social"><i
//                                                     className="fa fa-instagram"></i></Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/*<button onClick={this.toggelSignIn} title="Закрыть" type="button"*/}
//                                 {/*        className="mfp-close"><img*/}
//                                 {/*    src="img/icons/cross-black.png" alt="Закрыть" className="mfp-close"/></button>*/}
//                             </div>
//                         </div>
//                         <div className="mfp-preloader">Загрузка...</div>
//                     </div>
//
//                 </div>
//
//             </div>
//
//         );
//     }
// }
//
// const mapStateToProps = state => ({
//
//     user: state.login.token
// });
//
// const mapDispatchToProps = {
//     axiosLogin,
// };
//
// const Container = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Login);
//
// export default Container;
//
// // export default Login;




import React, {Component} from 'react';
import {axiosLogin} from "../../store/actions/login";
import {connect} from "react-redux";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password:''
        };
    }

    handleChange= (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })

    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.axiosLogin(this.state)
    };


    render() {

        return (
            <div className='container' >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='login'>login</label>
                        <input type="text" id='login' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='password'>password</label>
                        <input type="text" id='password' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>LogIn</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userLogin: state.usersData,
});

const mapDispatchToProps = {
    axiosLogin,
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);

export default SignInContainer;
