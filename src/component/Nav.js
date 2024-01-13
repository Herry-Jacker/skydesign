import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/shares'
import { FlexDiv } from '../styles/shares'
import { useLoginContext } from '../store/LoginContextApi'
import { Link, useNavigate } from 'react-router-dom'

const NavBackground = styled.div`
    height: 50px;
    display: flex;
    background-color: ${(props) => props.theme.colors.primary };
    align-items: center;
    box-shadow: 0px 6px 5px #aaaaaa;
`

const FlexNav = styled.div`
    flex: 1;
    
    ul {
        display: flex;
        height: 40px;
        justify-content: flex-end;
        align-items: center;
    }
    ul>li {
        padding: 10px;
        &:hover {
            &:after {
                content: "";
                display: block;
                height: 5px;
                background-color: hotpink;
            }
        }
    }
    a {
        color: hotpink;
    }
`

export default function Nav() {
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = useLoginContext();
    const logout = () => {
        setLoggedIn(false);
        navigate('/login');
    }
  return (
    <NavBackground>
        <Container style={{flex: 1}}>
            <FlexDiv>
                <div>
                    <strong>SKY</strong>
                    <span>DESIGN</span>
                </div>
                <FlexNav>
                    <ul>
                        <li><Link to="/"><a href='#'>Home</a></Link></li>
                        <li><a href='#' onClick={logout}>{ loggedIn ? "Logout" : "Login"}</a></li>
                    </ul>
                </FlexNav>
            </FlexDiv>
        </Container>
    </NavBackground>
  )
}