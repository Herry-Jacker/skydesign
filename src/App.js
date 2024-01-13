import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './styles/shares';
import { ThemeProvider } from 'styled-components';
import {GlobalCSS} from './styles/GlobalCSS';
import Nav from './component/Nav';
import Home from './component/Home';
import Login from './component/login';
import LoginContextProvider from './store/LoginContextApi';
import RouteGuard from './helpers/RouteGuard';

const theme = {
  colors: {
    primary: "aliceblue"
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <LoginContextProvider>
        <Router>
          <Nav></Nav>
          <Container>
            <Routes>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/' element={
                <RouteGuard>
                  <Home/>
                </RouteGuard>
              }></Route>
            </Routes>
          </Container>
        </Router>
      </LoginContextProvider>
    </ThemeProvider>
  )
}