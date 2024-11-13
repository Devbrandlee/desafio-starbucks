import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HeaderStyle } from "./style";
import { Nav } from "./style"; // Importe o estilo

export default function Header() {
    return (
        <HeaderStyle>
          {/* <img src="src\assets\images\logo.png" alt="Logomarca"/> */}
            <img src={logo} alt="logomarca" />
            <Nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/novidades">Novidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </Nav>
        </HeaderStyle>
    );
}