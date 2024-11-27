import React from "react";
import torra from "../../assets/Images/torra.png";
import { Section, Div, Button, Img } from "./style";

export default function Novidades() {
  return (
    <Section>
      <Div>
        <h3>PREPARAÇÃO</h3>
        <h2>Níveis de torra</h2>
        <p>
          Qual nível de torra combina com você? ☕ Descubra os sabores únicos de
          cada torra Starbucks:
        </p>
        <p>
          ✨ Torra Clara: Um sabor suave e brilhante, com notas delicadas que
          realçam o frescor de cada grão. Perfeito para quem aprecia leveza e um
          toque de acidez.
        </p>
        <p>
          ☕ Torra Média: O equilíbrio ideal! Rico em sabor, com notas suaves de
          caramelo e chocolate. Uma escolha versátil para todas as ocasiões.
        </p>
        <p>
          🌑 Torra Escura: Intenso e marcante, com um sabor robusto e encorpado.
          Ideal para quem busca força e personalidade em cada gole.
        </p>
        <p>E você, qual vai escolher hoje?</p>
        <a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank" rel="noopener noreferrer">
          <Button>SAIBA MAIS</Button>
        </a>

      </Div>
      <Img src={torra} alt="Níveis de torra" />
    </Section>
  );
}
