import Movie from "../Movie";
import { Container, List } from "./styles";

import ACCreed from "../../assets/images/assassins-creed-mirage.png";
// import DeadLight from "../../assets/images/dead-by-light.png";
// import Palword from "../../assets/images/palworld.png";
// import Phasmophobia from "../../assets/images/phasmophobia.png";

export type Props = {
  title: string;
  background: "gray" | "black";
};

const PopularMovies = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Movie
          category="ação"
          image={ACCreed}
          title="Assassin's Creed Mirage: Edição Mestre Assassino"
        />
        {/* <Movie
          category="Terror"
          image={DeadLight}
          title="Dead by Daylight - Gold Edition"
        />
        <Movie category="Mundo Aberto" image={Palword} title="Palworld" />
        <Movie category="Terror" image={Phasmophobia} title="Phasmophobia" /> */}
      </List>
    </div>
  </Container>
);

export default PopularMovies;
