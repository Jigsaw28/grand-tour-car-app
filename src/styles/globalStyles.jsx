import { createGlobalStyle } from "styled-components";
import ManropeRegular from "../fonts/Manrope-Regular.ttf";
import ManropeMedium from "../fonts/Manrope-Medium.ttf";
import ManropeSemiBold from "../fonts/Manrope-SemiBold.ttf";
import MontserratSemiBold from "../fonts/Montserrat-SemiBold.ttf";
import MontserratRegular from "../fonts/Montserrat-Regular.ttf"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'ManropeRegular';
        src: local('ManropeRegular'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeMedium';
        src: local('ManropeMedium'),
        url(${ManropeMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeSemiBold';
        src: local('ManropeSemiBold'),
        url(${ManropeSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'),
        url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'),
        url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }    
    
     body {
        margin: 0; 
        padding: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *,
*::before,
*::after {
  box-sizing: border-box;
}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        text-decoration: none;
    }

    p {
        padding: 0;
        margin: 0;
    }


    ul,
    ol {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin: 0;
    padding: 0;
    }

    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;

export default GlobalStyle;
