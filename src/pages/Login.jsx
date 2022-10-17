import React from 'react'
import GoogleButton from 'react-google-button'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreaters } from '../reduxState';

const Login = () => {

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);

    const handleLogin = () => {
                dispatch(actionCreaters.setLogin(!login))
    }

    return (
        <>
            <div>
                Login
            </div>
            <GoogleButton onClick={handleLogin}/>
        </>
    )
}

export default Login