import React from 'react'
import GoogleButton from 'react-google-button'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreaters } from '../reduxState';

const host = process.env.REACT_APP_BACKEND_URL
const Login = () => {

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);

    const handleLogin = () => {
        dispatch(actionCreaters.setLogin(!login))
        const googleLoginURL = `${host}/api/passport-auth/google`
    }

    return (
        <>
            <Link style={{textDecoration: 'none'}} to= {`login/google`} ><GoogleButton onClick={handleLogin} /></Link>
        </>
    )
}

export default Login