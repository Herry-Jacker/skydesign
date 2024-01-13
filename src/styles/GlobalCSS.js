import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }
    body {
        background-color: aliceblue;
    }
    a {
        text-decoration: none
    }
    ul {
        list-style-type: none
    }
`