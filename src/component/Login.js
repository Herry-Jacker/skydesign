import React, { createRef } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/shares';
import { useLoginContext } from '../store/LoginContextApi';
import { useNavigate } from 'react-router-dom';

const LoginBox = styled.div`
    background-color: rgba(255,255,255,0.9);
    width: 500px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    h1 {
        margin: 10px 0;
        color: #ff8800;
    }

    input {
        width: 350px;
        display: block;
        padding: 5px 10px;
        margin: 10px 0;
        border: none;
        outline: 1px solid #ddd;
    }
`

export default function Login() {
    const phoneRef = createRef();
    const passwordRef = createRef();
    const { setLoggedIn } = useLoginContext();
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        let user = {
            phone: phoneRef.current.value,
            password: passwordRef.current.value,
        };
        phoneRef.current.value = "";
        passwordRef.current.value = "";
        setLoggedIn(true);
        navigate('/');
    }
  return (
    <LoginBox>
        <h1>Login To Continute</h1>
        <form>
            <input type="tel" placeholder='phone' ref={phoneRef}/>
            <input type='password' placeholder='password' ref={passwordRef}/>
            <Button type='submit' onClick={login}>Login</Button>
        </form>
    </LoginBox>
  )
}
