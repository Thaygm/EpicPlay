import Tag from "../Tag";
import { Card, Description, Title, Infos } from "./style";

type Props = {
  title: string;
  category: string;
  description: string;
  infos: string[];
  image: string;
};

const Product = ({ title, category, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </Infos>
    <Title>{title}</Title>
    <Tag>{category}</Tag>
    <Description>{description}</Description>
  </Card>
);

export default Product;
