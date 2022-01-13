import LoginForm from 'custom-fields/FormLogin';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../redux/actions/userAction.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';

Login.propTypes = {};

function Login(props) {
    const dispatch = useDispatch();;
    const auth = useSelector(state => state.users.auth);
    const listInput = document.getElementsByTagName('input');

    if (auth.status === "200") {
        document.getElementsByClassName('spinner-border-small spinner-border')[0].style.display = "none";
        return <Redirect to="/" />
    }

    if (auth.status === "500") {
        document.getElementsByClassName('spinner-border-small spinner-border')[0].style.display = "none";
        for (let i = 0; i < listInput.length; i++) {
            listInput[i].addEventListener('focus', function (e) {
                document.getElementsByClassName('error-login')[0].style.display = "none";
            })
        };
    }

    const handleSubmit = (values) => {

        dispatch(logIn(values.userName.trim(), values.passWord.trim()));
    }

    const initialValues = {
        userName: '',
        passWord: '',
    };
 
    return (

        <div className="photo-edit__form">
            <h1>Login</h1>

            <LoginForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
                auth={auth}
            />
        </div>

    );
}

export default Login;