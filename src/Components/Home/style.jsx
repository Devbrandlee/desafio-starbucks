import styled from "styled-components";

export const MainStyle = styled.main`
display: flex;
align-items: center;
//height: 80vh;
margin-left: 4rem;

h2{
  margin-top: 1rem;
}



p{
  text-align: left; /* Alinha a esquerda */
  line-height: 1.4; /* Ajusta o espaçamento entre linhas para melhor legibilidade */
  margin: 1rem 0; /* Adiciona espaçamento ao redor do parágrafo */
  font-size: 1rem; /* Define o tamanho da fonte */
  color: black; /* Exemplo de cor do texto (opcional) */
}
`

export const Section = styled.section`
position: relative;



 .fundo{
   //margin-top: 15rem;
   position: relative;
   top: 8rem;
    width: 28vw;
    height: 51vh;
} 
`
export const Copo = styled.img`
//margin-top: 12rem;
z-index: 2;
position: absolute;
top: 9rem;
left: 2rem;
width: 20vw;
margin-left: 4rem;
border: solid red;
`


export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 0.4rem 1.2rem;
  //margin-top: 1rem;
  font-weight: bold;
  border-radius: 30px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; /* Transições suaves para movimento, cor e sombra */

  /* Sombras e cor do botão quando não estiver com o mouse */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Sombra suave quando o mouse não está sobre o botão */
  

  &:hover {
    background-color: #02592e; /* Tom mais escuro quando o mouse passa sobre o botão */
    transform: translateY(-10px); /* O botão se move 14px para cima ao passar o mouse */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* A sombra fica mais forte quando o mouse está sobre o botão */
  }

  &:active {
    transform: translateY(0); /* Volta à posição original ao clicar */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra normal após o clique */
  }
`;

export const Div = styled.div `
border: solid red;
//height: 10vh;
display: flex;
justify-content: center;
margin-left: 13rem;
//align-items: center;


img{
    width: 6vw;
}

`