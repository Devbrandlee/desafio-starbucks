import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importando ícones
import { FooterContainer, SocialLinks } from "./style";


export default function Footer() {
    return (
        <FooterContainer>
            <SocialLinks>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
            </SocialLinks>
            <p>&copy; 2024 Starbucks. Todos os direitos reservados.</p>
        </FooterContainer>
    );
}
