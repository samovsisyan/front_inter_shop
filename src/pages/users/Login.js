import React, {Component} from 'react';
import {fetchLogin} from "../../store/actions/login";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:''
        };
    }

    componentDidMount() {
        this.props.fetchLogin()
    }

    handleChange= (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })

    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchLogin(this.state)
    };

    handleClick = () => {
        localStorage.removeItem('Token');
    }


    render() {
        console.log(this.state)
        const token = this.props.token
        console.log("token token token", token)

        localStorage.setItem('Token', this.props.token);
        const getItem = localStorage.getItem('Token');
        console.log("local", getItem)

        return (
            <div className='container' >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='username'>username</label>
                        <input type="text" id='username' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='password'>password</label>
                        <input type="text" id='password' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>LogIn</button>
                    </div>
                </form>

                <div onClick={this.handleClick}>
                    LOGOUT
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

    token: state.login.token
});

const mapDispatchToProps = {
    fetchLogin,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default Container;

