import { createGlobalStyle } from "styled-components";

import backimage from "./images/bg-intro-desktop.png";
const GlobalStyles = createGlobalStyle<{}>`


      *{
         margin:0;
    padding: 0;
      }
   body{
    margin:0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color:#FF7979 ;
    background-image: url(${backimage});
    
   }
   
   
`;

export default GlobalStyles;
