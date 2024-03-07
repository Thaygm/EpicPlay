import Movie from "../Movie";
import { Container, List } from "./styles";

import GarraFerro from "../../assets/images/GarraFerro.png";
import LuaFlores from "../../assets/images/LuadasFlores.png";
import ReinoGelado from "../../assets/images/OReinoGelado.png";
import OneLove from "../../assets/images/OnesLove.png";

export type Props = {
  title: string;
  background: "gray" | "black";
};

const MoviesList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Movie category="Drama" image={GarraFerro} title="Garra de Ferro" />
        <Movie
          category="Suspense"
          image={LuaFlores}
          title="Assassinos da Lua das Flores"
        />
        <Movie
          category="Animação"
          image={ReinoGelado}
          title="O Reino Gelado: A Magia Continua"
        />
        <Movie category="Drama" image={OneLove} title="Bob Marley: One Love" />
      </List>
    </div>
  </Container>
);

export default MoviesList;
