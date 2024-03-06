import { Container, FooterSection, Links, SectionTitle } from "./style";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Container>
    <FooterSection className="container">
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Links>Novidades</Links>
          </li>
          <li>
            <Links>Populares</Links>
          </li>
        </Links>
      </FooterSection>
      <p> {currentYear} - &copy; PLAY Todos os direitos reservados</p>
    </FooterSection>
  </Container>
);

export default Footer;
