import Tag from "../Tag";
import { Card, Description, Title } from "./style";

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Title>Nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur
      magnam numquam perferendis architecto aliquid expedita. Nulla ipsa esse
      modi sunt et, soluta magnam dolore. Inventore temporibus laboriosam beatae
      eveniet?
    </Description>
  </Card>
);

export default Product;
