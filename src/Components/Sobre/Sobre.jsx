import loja from "../../assets/Images/loja.png";
import { Section, Div, Button, Img } from "./style";

export default function Sobre() {
  return (
    <Section>
      <Img src={loja} alt="" />
      <Div>
        <h3>SOBRE NÓS</h3>
        <h2>A história da Starbucks</h2>
        <p>
          Todos os dias, os parceiros (funcionários) da Starbucks vão trabalhar
          na esperança de fazer duas coisas: compartilhar um ótimo café com seus
          amigos e ajudar a tornar o mundo um pouco melhor.
        </p>

        <a
          href="https://www.starbucksathome.com/br/sobre-starbucks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>LEIA A HISTÓRIA</Button>
        </a>
      </Div>
    </Section>
  );
}
