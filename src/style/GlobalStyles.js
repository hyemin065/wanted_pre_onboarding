import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    a{text-decoration:none; color:inherit;}
    *{box-sizing:border-box;}
    body{width:100%; height:100vh;  font-size: 14px; color: #555;}
    button{outline:none; cursor:pointer;}
`;

export default GlobalStyles;
