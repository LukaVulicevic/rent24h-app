import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #1c1c1c;
        color: #333333;
        font-size: 16px;
        margin: 0; 
    }
`