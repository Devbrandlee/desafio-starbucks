import styled from "styled-components";

export const Section = styled.section`
display: flex;
align-items: center;
//border: solid;
height: 80vh;
justify-content: space-around;
color: #1e3932;
`

export const Div = styled.div`
width: 35vw;

h3{
  font-size: 0.9rem;
}

h2{
    font-size: 1.7rem;
    font-weight:300;
    margin-bottom: 1rem;

    span{
    color: #037143;
    font-weight: bold;
  }
}

`
export const Img = styled.img`
  width: 21vw;
 // border: solid green;
`;


export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 8px 10px;
  margin-top: 1rem;
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