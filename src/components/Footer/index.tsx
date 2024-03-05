import { Container, FooterSection, Link, Links, SectionTitle } from "./style";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Container>
    <FooterSection className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Links>Ação</Links>
          </li>
          <li>
            <Links>RPG</Links>
          </li>
          <li>
            <Links>Simulador</Links>
          </li>
          <li>
            <Links>Corrida</Links>
          </li>
          <li>
            <Links>Mundo Aberto</Links>
          </li>
          <li>
            <Links>Sobrevivência</Links>
          </li>
          <li>
            <Links>Terror</Links>
          </li>
          <li>
            <Links>CyberPunk</Links>
          </li>
        </Links>
      </FooterSection>
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
      <p> {currentYear} - &copy; EpicPLAY Todos os direitos reservados</p>
    </FooterSection>
  </Container>
);

export default Footer;
