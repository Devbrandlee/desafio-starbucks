import React, { useState } from "react";
import copinhoamarelo from "../../assets/Images/amarelo1.png";
import copinhovermelho from "../../assets/Images/vermelho1.png";
import copinholaranja from "../../assets/Images/laranja3.png";
import Elipseverde from "../../assets/Images/Ellipseverde.png";
import Elipsevermelho from "../../assets/Images/Ellipsevermelho.png";
import Elipseamarelo from "../../assets/Images/Ellipseamarelo.png";
import copaoamarelo from "../../assets/Images/amarelo2x1.png";
import copaolaranja from "../../assets/Images/laranja2x1.png";
import copaovermelho from "../../assets/Images/vermelho2x1.png";

import Footer from "../../Components/Footer/Footer";
import { MainStyle, Button, Div, Copo, Fundo , Section } from "./style";

export default function Home() {
  const [imagemFundo, setImagemFundo] = useState(Elipseverde);
  const [imagemCopo, setImagemCopo] = useState(copaolaranja);

  const handleCopinhoClick = (novoFundo, novoCopo) => {
    setImagemFundo(novoFundo);
    setImagemCopo(novoCopo);
  };

  return (
    <>
      <MainStyle>
        <Section>
          <h2>Mais que Café</h2>
          <h1>
            Isso é <span>Starbucks</span>
          </h1>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <a
            href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>SAIBA MAIS</Button>
          </a>

          <Div>
            <img
              src={copinholaranja}
              alt="Copinho Laranja"
              onClick={() => handleCopinhoClick(Elipseverde, copaolaranja)}
            />
            <img
              src={copinhovermelho}
              alt="Copinho Vermelho"
              onClick={() => handleCopinhoClick(Elipsevermelho, copaovermelho)}
            />
            <img
              src={copinhoamarelo}
              alt="Copinho Amarelo"
              onClick={() => handleCopinhoClick(Elipseamarelo, copaoamarelo)}
            />
          </Div>
          </Section>
          
          <section>
          {/* Apenas a imagem no fundo */}
          <Fundo src={imagemFundo} alt="Imagem de Fundo" />

          {/* Copo */}
          <Copo src={imagemCopo} alt="Copo" />
         
        </section>
        
      </MainStyle>
      <Footer />
    </>
  );
}
