
import logo from "../../assets/images/logo.png";
import { HeaderStyle, StyleLink, Ul } from "./style";
// import { Nav } from "./style"; // Importe o estilo

export default function Header() {
    return (
        <HeaderStyle>
          {/* <img src="src\assets\images\logo.png" alt="Logomarca"/> */}
            <img src={logo} alt="logomarca" />
            <nav>
                <Ul>
                    <li>
                        <StyleLink to="/">Home</StyleLink>
                    </li>
                    <li>
                        <StyleLink to="/novidades">Novidades</StyleLink>
                    </li>
                    <li>
                        <StyleLink to="/sobre">Sobre</StyleLink>
                    </li>
                </Ul>
            </nav>
        </HeaderStyle>
    );
}