import amarelo1 from "../../assets/Images/amarelo1.png"
import vermelho1 from "../../assets/Images/vermelho1.png"
import laranja3 from "../../assets/Images/laranja3.png"
import Ellipseverde from "../../assets/Images/Ellipseverde.png"
import laranja2x1 from "../../assets/Images/laranja2x1.png"
import Footer from "../../Components/Footer/Footer";
import { MainStyle, Copo, Section, Button, Div } from "./style";

export default function Home() {
    return (
        <>
        <MainStyle>
            <section>
                <h2>Mais que Café</h2>
                <h1>Isso  é <span>Starbucks</span></h1>
                <p>
                A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
                </p>

                <a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank" rel="noopener noreferrer">
          <Button>SAIBA MAIS</Button>
        </a>

                
                <Div>
                    <img src={amarelo1} alt="Miniatura copo amarelo" />
                    <img src={vermelho1} alt="Miniatura copo vermelho" />
                    <img src={laranja3} alt="Miniatura copo laranja" />
                </Div>

            </section>

            <Section>
                <Copo src={laranja2x1} alt="" />

                <img className="fundo" src={Ellipseverde} alt="" />
            </Section>

        </MainStyle>
        <Footer />
        </>
        
    )
}