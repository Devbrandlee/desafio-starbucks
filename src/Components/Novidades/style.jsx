import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  //border: solid; 
  height: 100%;
  justify-content: space-around;
  color: white;
  background-color: #1E3932;
`;

export const Div = styled.div`
  width: 35vw;

h3{
  font-weight: 600;
  font-size: 0.9rem;
}

  h2 {
    font-size: 1.9rem;
    font-weight: 300;
  }

  p{
    margin-top: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.7;
  }
`;

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 0.4rem 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  border-radius: 31px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; /* Transições suaves para movimento, cor e sombra */

  /* Sombras e cor do botão quando não estiver com o mouse */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Sombra suave quando o mouse não está sobre o botão */

  &:hover {
    background-color: #02592e; /* Tom mais escuro quando o mouse passa sobre o botão */
    transform: translateY(-10px); /* O botão se move -10px para cima ao passar o mouse */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* A sombra fica mais forte quando o mouse está sobre o botão */
  }

  &:active {
    transform: translateY(0); /* Volta à posição original ao clicar */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra normal após o clique */
  }
`;



export const Img = styled.img`
  width: 30vw;
  //border: solid red;
  //controlo a imagem colorida do café
`;
