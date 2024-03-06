import { HeaderBar, Links, LinkItem, ProfileConfig } from "./styles";

import logo from "../../assets/images/logo.jpg";
import profile from "../../assets/images/carrinho.svg";

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EpicPlay" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#"> Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#"> Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#"> Populares</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <ProfileConfig href="#">
      Configurações
      <img src={profile} alt="Perfil" />
    </ProfileConfig>
  </HeaderBar>
);

export default Header;
