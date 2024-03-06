import { Image, Title } from "./styles";

import bannerImg from "../../assets/images/banner-elden-ring.png";
import Tag from "../Tag";
import Button from "../Button";

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Elden Ring: Shadow of Erdtree PC</Title>
      </div>
      <Button type="link" to="/produto" title="Clique aqui para aproveitar!">
        Aproveitar
      </Button>
    </div>
  </Image>
);

export default Banner;
