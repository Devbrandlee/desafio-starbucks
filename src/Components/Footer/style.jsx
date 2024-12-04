import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: white; /* Cor de fundo Starbucks */
  //background-size: cover ;
  color: black;
  text-align: center;
  //padding: 1rem 0;
  font-family: Arial, sans-serif;
  height: 1vh;
  //margin-bottom:5rem ;
  display: flex;
  flex-direction: column; /* Alinha os itens em coluna */
  align-items: center; /* Centraliza os itens horizontalmente */
  //padding: 0.5rem; /* Espaçamento interno */
  text-align: center;
  

  p {
    //margin-top: -1.8rem;
    position: relative;
    bottom: 1rem;
    font-size: 0.875rem;
    margin-right: 5rem;
    
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.4rem;
//margin-top: -1rem;
//line-height: 0.8;
  

  a {
    
    color: #037143;
    font-size: 1.5rem;
    transition: transform 0.3s, color 0.3s;
   

    position: relative;
    bottom: 1rem;
    right: 2.5rem;
  
    

    &:hover {
      transform: scale(1.5);
      color: #02592e;
    }
  }
`;

