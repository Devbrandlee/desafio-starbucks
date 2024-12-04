import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  align-items: center;
  margin-left: 4rem;

  h2 {
    font-size: 2.5rem; /* Define o tamanho da fonte */
    font-weight: 300;
    //margin-top: 1rem;
  }
h1{
  font-size: 2.5rem; /* Define o tamanho da fonte */
    font-weight: 300; /* Controla o peso (normal, bold, ou valores numéricos como 400, 700, etc.) */
  span{
    color: #037143;
    font-weight: bold;
  }
}

  p {
    text-align: left; /* Alinha a esquerda */
    line-height: 1.4; /* Ajusta o espaçamento entre linhas para melhor legibilidade */
    margin: 0.7rem; /* Adiciona espaçamento ao redor do parágrafo */
    
    font-size: 0.9rem; /* Define o tamanho da fonte */
    color: black; /* Exemplo de cor do texto (opcional) */
  }

  
`;

export const Section = styled.section`
  //position: relative;
  height: 21rem;
  
`;


export const Fundo = styled.img`
  top: 3.8rem;
  //right: 0rem;
  position: relative;
  width: 35vw;
  height: 69vh;
  //border: solid; Aqui controlo a Ellipse fundo dinâmico

  
`;

export const Copo = styled.img`
  z-index: 2;
  position: absolute;
  top: 5.1rem;
  left: 45rem;
  width: 25vw;
  //border: solid yellow; Aqui controlo o Copão 
`;

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 0.4rem 1.2rem;
  font-weight: bold;
  border-radius: 30px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #02592e;
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Div = styled.div`
  //Aqui controlo a caixa com os copinhos
  //border: solid red;

display: flex;
justify-content: center;

margin-left: 10.4rem;

position: relative;
   bottom: 1.3rem;



img {

  //Aqui conrolo as imagens dos copinhos
    width: 6.3vw;
    margin-left: 2rem;
    //border: solid blue;
    cursor: pointer;
    transition: transform 0.41s ease-in-out; /* Transições bem rápidas */

    &:hover {
      transform: translateX(-1px) translateY(-10px) rotate(-14deg);
    }

    &:hover:nth-child(2n) {
      transform: translateX(-1px) translateY(-15px) rotate(-14deg);
    }

    &:hover:nth-child(3n) {
      transform: translateX(-1px) translateY(-15px) rotate(-14deg);
    }

   
  }
`;