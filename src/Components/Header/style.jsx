import styled from "styled-components";

import { Link } from "react-router-dom";


  // A Carol disse que não pode colocar "Header" pq irá gerar conflito.
    // Você tá falando do componente funcional Header ou do estilo da header? 
export const HeaderStyle = styled.header `
display: flex; 
/* A logo foi pro lado da nav */

justify-content: space-between;
`



export const StyleLink = styled(Link) `
//Caso específico para  a tag link com o uso de ()

text-decoration: none; //Retira a linha do link
color: #555;
font-weight: 600;
     &:hover {
         color: #005235; // Tom de verde similar ao Starbucks
     }
`


export const Ul = styled.ul`
  
    display: flex;
    width: 40vw;
    //border: solid red;
    justify-content: space-around;
    list-style-type: none;
   
  

  li {
    margin-right: 2rem;
    //border: solid red;
  }
  `

//   a {
//     text-decoration: none;
//     color: #333;
//     font-weight: bold;

//     &:hover {
//         color: #00704A; // Tom de verde similar ao Starbucks
//     }
//   }
// `;



