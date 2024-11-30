import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: white; /* Cor de fundo Starbucks */
  color: black;
  text-align: center;
  //padding: 1rem 0;
  font-family: Arial, sans-serif;
  margin-bottom:0 ;

  p {
    margin-top: 1.1rem;
    font-size: 0.875rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  a {
    color: #037143;
    font-size: 1.5rem;
    transition: transform 0.3s, color 0.3s;

    position: relative;
    top: 0.8rem;
    

    &:hover {
      transform: scale(1.5);
      color: #02592e;
    }
  }
`;
