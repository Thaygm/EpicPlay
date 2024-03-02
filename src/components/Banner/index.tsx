import { Image, Title, Prices } from "./styles";

import bannerImg from "../../assets/images/banner-homem-aranha.png";

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Title>Marvel&apos;s Spider-Man: Miles Morales PC</Title>
      <Prices>
        De <span> R$ 259,99</span>
        <br />
        por apenas R$ 99,90
      </Prices>
    </div>
  </Image>
);

export default Banner;
