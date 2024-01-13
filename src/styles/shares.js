import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
`

export const Button = styled.button`
background-color: hotpink;
margin-top: 15px;
border: none;
padding: 10px 20px;
color: #fff;
border-radius: 20px;

&:hover {
    background-color: indigo;
}
`